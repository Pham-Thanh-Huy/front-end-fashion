import React, {useEffect, useState} from 'react';
import {ToastContainer} from 'react-toastify';
import {getCart} from '../../utils/AddCartUtil';
import {jwtDecode} from "jwt-decode";
import {getUserById} from "../../utils/CallApi.ts";
import User from "../../entity/User.ts";


const Header = () => {
    const [quantityCart, setQuantityCart] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);


    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                const parseToken: any = jwtDecode(token);
                const userId = parseToken?.userId;

                // Gọi getUserById và đợi kết quả
                const fetchedUser = await getUserById(userId, token);
                setUser(fetchedUser);

            }
        };

        fetchUser(); // Gọi hàm fetchUser khi component mount
        // Cập nhật số lượng giỏ hàng
        const interval = setInterval(() => {
            const cart = getCart();
            if (cart.length > 0) {
                setQuantityCart(cart.length);
            }else{
                setQuantityCart(0)
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
       localStorage.removeItem('token');
       window.location.reload();
    };

    return (<React.Fragment>
        <ToastContainer/>
        {/* Header */}
        <header>
            {/* Header desktop */}
            <div className="container-menu-desktop">
                <div className="wrap-menu-desktop">
                    <nav className="limiter-menu-desktop container">
                        {/* Logo desktop */}
                        <a href="/" className="logo">
                            <img src="../../../public/logo.png" alt="IMG-LOGO"/>
                        </a>
                        {/* Menu desktop */}
                        <div className="menu-desktop">
                            <ul className="main-menu">
                                <li className="active-menu">
                                    <a href="/">Trang chủ</a>
                                    <ul className="sub-menu">
                                        <li><a href="/">Homepage 1</a></li>
                                        <li><a href="/">Homepage 2</a></li>
                                        <li><a href="/">Homepage 3</a></li>
                                    </ul>
                                </li>
                                <li><a href="shop">Sản phẩm</a></li>
                                <li><a href="blog">Tin tức</a></li>
                                <li><a href="about">Về chúng tôi</a></li>
                                <li><a href="contact">Liên hệ</a></li>
                            </ul>
                        </div>
                        {/* Icon header */}
                        <div className="wrap-icon-header flex-w flex-r-m">
                            {user ? (<div className="user-info">
                                <span>Xin chào <b>{user?.lastName + " " + user?.firstName}</b></span> | {" "}
                                <button onClick={handleLogout}>Đăng xuất</button>

                            </div>) : (<a href="/login" className="login-link">Đăng nhập</a>)}
                            <div
                                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"/>
                            </div>
                            <div
                                className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                                data-notify={quantityCart}>
                                <i className="zmdi zmdi-shopping-cart"/>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Header Mobile */}
            <div className="wrap-header-mobile">
                <div className="logo-mobile">
                    <a href="index.html"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO"/></a>
                </div>
                <div  className="wrap-icon-header flex-w flex-r-m m-r-15">
                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                        <i className="zmdi zmdi-search"/>
                    </div>
                    <div
                        className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                        data-notify={quantityCart}>
                        <i className="zmdi zmdi-shopping-cart"/>
                    </div>
                    <div style={{padding:'10px'}}> </div>
                    {user ? (<div style={{width:'200px'}}  className="user-info">
                        <span>Xin chào {user?.lastName + " " + user?.firstName}</span>
                        <button onClick={handleLogout}>Đăng xuất</button>
                    </div>) : (
                        <a style={{color: 'black !important'}} href="/login" className="login-link">Đăng nhập</a>)}
                </div>
            </div>
            {/* Menu Mobile */}
            <div className="menu-mobile">
                <ul className="main-menu-m">
                    <li>
                        <a href="/">Home</a>
                        <ul className="sub-menu-m">
                            <li><a href="/">Homepage 1</a></li>
                            <li><a href="/">Homepage 2</a></li>
                            <li><a href="/">Homepage 3</a></li>
                        </ul>
                        <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true"/>
              </span>
                    </li>
                    <li><a href="shop">Shop</a></li>
                    <li><a href="cart" className="label1 rs1" data-label1="hot">Features</a></li>
                    <li><a href="blog">Blog</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </div>
        </header>
    </React.Fragment>);
};

export default Header;
