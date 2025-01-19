import React, { useEffect, useState } from 'react';
import './asset/checkout.css'
import { getCart } from '../../../utils/AddCartUtil';
import Cart from '../../../entity/Cart';
import { formatVND } from '../../../utils/FormatUtil';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
const Checkout = () => {
    const [cart, setCart] = useState<Cart[]>([]);
    const [quantityTotal, setQuantityTotal] = useState<number>(0);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [refresh, setRefresh] = useState<number>(0);
    // Lấy dữ liệu giỏ hàng từ localStorage và set vào state
    useEffect(() => {
        const cartData = getCart();
        setCart(cartData);

    }, [refresh]);

    useEffect(() => {
        const totalQuantity = cart.reduce((total, value) => total + value.quantity, 0);
        const totalPrice = cart.reduce((total, value) => total + value.productPrice * value.quantity, 0);

        setQuantityTotal(totalQuantity);
        setTotalPrice(totalPrice);
    }, [cart]); // Khi cart thay đổi, tính toán lại
   

    return (
        <div className="checkout-container">
            {/* Danh sách sản phẩm */}
            <div className="cart-section">
                <h4 style={{fontWeight: 'bold', margin: '15px 0px'}}>Danh sách đơn hàng</h4>
                <div className="cart-items">
                    {cart.map((product) => (
                        <div className="cart-item" key={product.productId}>
                            {/* Cột hình ảnh và tên */}
                            <div className="product-left">
                                <img  className="product-image" src={product.imageUrl} alt={product.productName} />
                                <p className="item-name">{product.productName}</p>

                            </div>

                            {/* Cột số lượng và tổng tiền */}
                            <div className="product-right">
                                <p className="item-quantity">Giá: <b>{product.productPrice}</b></p>
                                <p className="item-quantity">Số lượng: <b>{product.quantity}</b></p>
                                <p className="item-total">
                                    Tổng:<b>{formatVND(product.productPrice * product.quantity)}</b>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Form thông tin khách hàng */}
            <div className="form-section">
            <h3 style={{fontWeight: 'bold', margin: '15px 0px'}}>Thông tin khách hàng đặt hàng</h3>
                <form>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" placeholder="Nhập họ và tên" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Nhập email" />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại" />
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input type="text" placeholder="Nhập địa chỉ giao hàng" />
                    </div>
                </form>
            </div>

            {/* Tổng tiền và nút đặt hàng */}
            <div className="summary-section">
                <h2>Tổng kết</h2>
                <p className="total-price">
                    Tổng cộng: {formatVND(totalPrice)}
                </p>
                <button className="checkout-button">Đặt hàng</button>
            </div>
        </div>
    );

};

export default Checkout;