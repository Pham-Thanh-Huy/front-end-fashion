import React, { useEffect, useState } from 'react';
import './asset/checkout.css'
import { getCart } from '../../../utils/AddCartUtil';
import Cart from '../../../entity/Cart';
import { formatVND } from '../../../utils/FormatUtil';
import { jwtDecode } from "jwt-decode";
import { addOrderApiUtils, getAllDeliveryMethod, getAllPaymentMethod, getUserById } from "../../../utils/CallApi.ts";
import User from "../../../entity/User.ts";
import { useNavigate } from "react-router-dom";
import { DeliveryMethod } from "../../../entity/DeliveryMethod.ts";
import { PaymentMethod } from "../../../entity/PaymentMethod.ts";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Orders from '../../../entity/Order.ts';

const Checkout = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [cart, setCart] = useState<Cart[]>([]);
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();
    const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod[]>([]);
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod[]>([]);
    const [userId, setUserId] = useState<number>();

    useEffect(() => {

        fetchUser(); // Gọi hàm fetchUser khi component mount

        fetchMethod()

        const cartData = getCart();
        if (cartData.length <= 0) {
            navigate(-1);
        }

        setCart(cartData);
    }, []);

    useEffect(() => {
        const totalPrice = cart.reduce((total, value) => total + value.productPrice * value.quantity, 0);
        setTotalPrice(totalPrice);
    }, [cart]);


    const fetchUser = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            const parseToken: any = jwtDecode(token);
            const userId = parseToken?.userId;
            setUserId(userId);

            // Gọi getUserById và đợi kết quả
            const fetchedUser = await getUserById(userId, token);
            setUser(fetchedUser);
        } else {
            navigate(-1); // Quay lại trang trước nếu không có token
        }
    };


    const fetchMethod = async () => {
        setDeliveryMethod(await getAllDeliveryMethod());
        setPaymentMethod(await getAllPaymentMethod());
    }

    // ---> KHI NGƯỜI DÙNG NHẤN ĐẶT HÀNG
    const order = async (data: any) => {
        const json = JSON.stringify({
            address: data.address,
            deliveryMethod: {
                deliveryId: data.delivery
            },
            paymentMethod: {
                paymentId: data.payment
            },
            orderDetailList:
                cart.map((item) => {
                    return {
                        quantity: item.quantity,
                        product: {
                            productId: item.productId
                        },
                        productColor: {
                            productColorId: item.productColorId
                        },
                        productSize: {
                            productSizeId: item.productSizeId
                        }
                    }
                })

        });

        const order: Orders | null =  await addOrderApiUtils(json, Number(userId));

        
        if (order !== null) {
            toast.success("Đặt hàng thành công")
            navigate(`/order-info?orderId=${order.orderId}`)
        } else {
            toast.error("Lỗi khi đặt hàng");
        }
    }

    // Kiểm tra xem user đã được tải chưa
    if (!user) {
        return <div>Đang tải thông tin người dùng...</div>; // Hoặc bạn có thể hiển thị một loader tại đây
    }

    return (<div style={{ backgroundColor: '#f9f9f9' }}>
        <div className="checkout-container">
            {/* Danh sách sản phẩm */}
            <div className="cart-section">
                <h4 style={{ fontWeight: 'bold', margin: '15px 0px' }}>Danh sách đơn hàng</h4>
                <div className="cart-items">
                    {cart.map((product) => (<div className="cart-item" key={product.productId}>
                        {/* Cột hình ảnh và tên */}
                        <div className="product-left">
                            <img className="product-image" src={product.imageUrl} alt={product.productName} />
                            <p className="item-name">{product.productName}</p>
                            <p className="item-name">Màu sắc: <b>{product.productColorName}</b></p>
                            <p className="item-name">Size: <b>{product.productSizeName}</b></p>
                        </div>

                        {/* Cột số lượng và tổng tiền */}
                        <div className="product-right">
                            <p className="item-quantity">Giá: <b>{formatVND(product.productPrice)}</b></p>
                            <p className="item-quantity">Số lượng: <b>{product.quantity}</b></p>
                            <p className="item-total">
                                Tổng: <b>{formatVND(product.productPrice * product.quantity)}</b>
                            </p>
                        </div>
                    </div>))}
                </div>
            </div>

            {/* Form thông tin khách hàng */}
            <div className="form-section">
                <h3 style={{ fontWeight: 'bold', margin: '15px 0px' }}>Thông tin khách hàng đặt hàng</h3>
                <h6 style={{ fontWeight: 'bold', color: 'orange', margin: '15px 0px' }}>Chỉ được sửa địa chỉ và chọn
                    phương thức thanh toán</h6>
                <form onSubmit={handleSubmit(order)}>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input
                            type="text"
                            placeholder="Nhập họ và tên"
                            defaultValue={`${user.lastName || ''} ${user.firstName || ''}`} // Nếu user không có giá trị, sử dụng chuỗi rỗng
                            readOnly={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Nhập email"
                            defaultValue={user.email || ''} // Nếu email không có, sử dụng chuỗi rỗng
                            readOnly={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input
                            type="text"
                            placeholder="Nhập số điện thoại"
                            defaultValue={user.phoneNumber || ''} // Nếu số điện thoại không có, sử dụng chuỗi rỗng
                            readOnly={true}
                        />
                    </div>
                    <div className="form-group">
                        <label>Địa chỉ</label>
                        <input
                            {...register("address", {
                                required: 'Vui lòng nhập đầy đủ địa chỉ',
                            })}
                            type="text"
                            placeholder="Nhập địa chỉ giao hàng"
                            defaultValue={user.address || ''} // Nếu địa chỉ không có, sử dụng chuỗi rỗng
                        />
                        {errors.address?.message && <span
                            style={{
                                color: 'red', margin: '10px'
                            }}><>{errors.address.message}</></span>}
                    </div>
                    <div className="form-group">
                        <label>Phương thức thanh toán</label>
                        <select  {...register('payment', { required: 'Vui lòng chọn phương thức thanh toán' })}>
                            <option value="">Chọn</option>
                            {paymentMethod && Array.isArray(paymentMethod) && paymentMethod.map((method) => (
                                <option value={method.paymentId} key={method.paymentId}>
                                    {method.paymentName}
                                </option>))}
                        </select>
                        {errors.payment?.message && <span
                            style={{
                                color: 'red', margin: '10px'
                            }}><>{errors.payment.message}</></span>}
                    </div>

                    <div className="form-group">
                        <label>Phương thức vận chuyển</label>
                        <select {...register('delivery', { required: 'Vui lòng chọn phương thức vận chuyển' })}>
                            <option value="">Chọn</option>
                            {deliveryMethod && Array.isArray(deliveryMethod) && deliveryMethod.map((method) => (
                                <option value={method.deliveryId} key={method.deliveryId}>
                                    {`${method?.name} (${method?.description})`}
                                </option>))}
                        </select>
                        {errors.delivery?.message && <span
                            style={{
                                color: 'red', margin: '10px '
                            }}><>{errors.delivery.message}</></span>}

                    </div>

                    {/* Tổng tiền và nút đặt hàng */}
                    <div className="summary-section">
                        <h3 style={{ fontWeight: 'bold', margin: '15px 0px' }}>Tổng kết đơn hàng</h3>
                        <p className="total-price">
                            Tổng giá trị đơn hàng: {formatVND(totalPrice)}
                        </p>
                        <button className="checkout-button" type="submit">Đặt hàng</button>
                    </div>
                </form>

            </div>

        </div>
    </div>);
};

export default Checkout;
