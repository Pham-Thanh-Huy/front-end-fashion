import React, {useEffect, useState} from 'react';
import './asset/CartComponents.css';
import Cart from '../../../entity/Cart';
import {addCart, deleteAllCartInLocalStorage, deleteCartByProductId, getCart} from '../../../utils/AddCartUtil';
import {formatVND} from '../../../utils/FormatUtil';
import {toast} from 'react-toastify';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom";

const CartComponents = () => {
    const [cart, setCart] = useState<Cart[]>([]);
    const [quantityTotal, setQuantityTotal] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [refresh, setRefresh] = useState<number>(0);
    const navigate = useNavigate();


    useEffect(() => {
        const cartData = getCart();
        setCart(cartData);

    }, [refresh]);

    // Tính toán tổng số lượng và tổng giá trị mỗi khi giỏ hàng thay đổi
    useEffect(() => {
        const totalQuantity = cart.reduce((total, value) => total + value.quantity, 0);
        const totalPrice = cart.reduce((total, value) => total + value.productPrice * value.quantity, 0);

        setQuantityTotal(totalQuantity);
        setTotalPrice(totalPrice);
    }, [cart]); // Khi cart thay đổi, tính toán lại

    const deleteAllCart = (event: React.FormEvent) => {
        event.preventDefault();
        if (cart.length > 0) {
            const deleteAllCart = deleteAllCartInLocalStorage();
            if (deleteAllCart) {
                toast.success("Xóa giỏ hàng thành công");
                setCart([]);  // Cập nhật lại giỏ hàng rỗng
            } else toast.error("Có lỗi khi xóa giỏ hàng");
        }
    }

    const deleteCartById = (event: React.FormEvent, productId: number, productSizeId: number, productColorId: number) => {
        event.preventDefault();
        const deleteCartById = deleteCartByProductId(productId, productSizeId, productColorId);
        if (deleteCartById) {
            toast.success("Xóa sản phẩm thành công");
            setCart(prevCart => prevCart.filter(product => product.productId !== productId || product.productSizeId !== productSizeId || product.productColorId !== productColorId));
        } else toast.error("Có lỗi khi xóa sản phẩm");
    }


    const addQuantityCart = async (productId: number, quantity: number, productSizeId: number, productColorId: number) => {
        const addQuantity = await addCart(productId, quantity, productSizeId, productColorId);

        if (addQuantity) {
            const updatedCart = await getCart();
            setCart(updatedCart);
            toast.success("Cập nhật số lượng thành công")

        }
        setRefresh(refresh + 1)
    }

    const redirectToCheckout = () => {
        // ---> NẾU CHƯA ĐĂNG NHẬP THÌ KHÔNG CHO THANH TOÁN VÀ CHUYỂN TỚI TRANG ĐĂNG NHẬP
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login')
        }else{
            navigate('/checkout')
        }
    }

    return (<React.Fragment>
            {/* Shopping Cart */}
            <form className="cart-container">
                <div className="cart-wrapper cart-wide">
                    <div className="cart-table-section">
                        <div className="cart-table-container">
                            <table className="cart-table">
                                <thead>
                                <tr>
                                    <th>Sản phẩm</th>
                                    <th>Tên sản phẩm</th>
                                    <th>Màu sắc</th>
                                    <th>Size</th>
                                    <th>Giá tiền</th>
                                    <th>Số lượng</th>
                                    <th>Thành tiền</th>
                                    <th>Chức năng</th>
                                </tr>
                                </thead>
                                <tbody>
                                {cart.length > 0 ? (cart.map((value) => (<tr>
                                            <td>
                                                <div className="cart-item-image">
                                                    <img src={value.imageUrl} alt="Product"/>
                                                </div>
                                            </td>
                                            <td>{value.productName}</td>
                                            <td>{value.productColorName}</td>
                                            <td>{value.productSizeName}</td>
                                            <td>{formatVND(value.productPrice)}</td>
                                            <td>
                                                <div className="quantity-control">
                                                    {/* <button className="btn-decrease">-</button> */}
                                                    <input type="number" min={1} className="quantity-input"
                                                           onChange={(e) => addQuantityCart(value.productId, Number(e.target.value), value.productSizeId, value.productColorId)}
                                                           defaultValue={value.quantity}/>
                                                    {/* <button className="btn-increase">+</button> */}
                                                </div>
                                            </td>
                                            <td>{formatVND(value.productPrice * value.quantity)}</td>
                                            <td style={{cursor: 'pointer'}}
                                                onClick={(e) => deleteCartById(e, value.productId, value.productSizeId, value.productColorId)}>
                                                <FontAwesomeIcon icon={faTrash}/></td>
                                        </tr>))) : (<div>Giỏ hàng trống</div>)}
                                </tbody>
                            </table>
                        </div>
                        <br/>
                    </div>

                    <div className="cart-summary">
                        <h4>Thông tin đơn hàng</h4>
                        <br/>
                        <div className="summary-row">
                            <span>Tổng số lượng sản phẩm</span>
                            <span><b>{quantityTotal}</b></span>
                        </div>
                        <div className="summary-row">
                            <span>Tổng cộng:</span>
                            <span><b>{formatVND(totalPrice)}</b></span>
                        </div>
                        <div className='btn-feature'>
                            <button className="btn-delete-cart" onClick={(e) => deleteAllCart(e)}>Xóa toàn bộ giỏ hàng
                            </button>
                            <button className="btn-checkout" onClick={() => redirectToCheckout()}><a href={"#"}>Tiến
                                hành thanh toán</a></button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>);
};

export default CartComponents;
