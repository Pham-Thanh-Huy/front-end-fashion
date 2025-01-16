import React, { useEffect, useState } from 'react';
import Cart from '../../entity/Cart';
import { getCart } from '../../utils/AddCartUtil';
import { formatVND } from '../../utils/FormatUtil';

const CartUtils = () => {
    const [cart, setCart] = useState<Cart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Gọi getCart mỗi 10 giây (tùy chỉnh thời gian theo nhu cầu)
            const updatedCart = getCart();
            setCart(updatedCart);

            // Tính tổng giá trị ngay sau khi cập nhật giỏ hàng
            const total = updatedCart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);
            setTotalPrice(total);
        }, 1000); // 10 giây

        // Dọn dẹp interval khi component bị unmount
        return () => clearInterval(interval);
    }, []);
    return (
        <React.Fragment>
            <div className="wrap-header-cart js-panel-cart">
                <div className="s-full js-hide-cart" />
                <div className="header-cart flex-col-l p-l-65 p-r-25">
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2">
                            Giỏ hàng của bạn
                        </span>
                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close" />
                        </div>
                    </div>
                    <div className="header-cart-content flex-w js-pscroll">
                        <ul className="header-cart-wrapitem w-full">
                            {cart.length > 0 ? (
                                cart.map(value => (
                                    <li className="header-cart-item flex-w flex-t m-b-12">
                                        <div className="header-cart-item-img">
                                            <img src={value.imageUrl} alt="IMG" />
                                        </div>
                                        <div className="header-cart-item-txt p-t-8">
                                            <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                                {value.productName}
                                            </a>
                                            <span className="header-cart-item-info">
                                                {value.quantity} x {formatVND(value.productPrice)}
                                            </span>
                                            <span className="header-cart-item-info">
                                                màu sắc: <b>{value.productColorName}</b>  ----  size: <b>{value.productSizeName}</b>
                                            </span>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <div>Giỏ hàng trống</div>
                            )}

                        </ul>
                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">
                                Tổng giá trị đơn hàng: {formatVND(totalPrice)}
                            </div>
                            <div className="header-cart-buttons flex-w w-full">
                                <a href="/cart" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                   giỏ hàng
                                </a>
                                <a href="/checkout" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                   Thanh toán 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default CartUtils;