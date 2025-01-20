import { useEffect, useState } from "react";
import { formatVND } from "../../../utils/FormatUtil";
import { ApiDomain } from "../../../utils/ApiUtils";
import { useLocation, useNavigate } from "react-router-dom";
import Orders from "../../../entity/Order";
import './asset/order-info.css'
import { toast } from "react-toastify";

export const OrderInformation = () => {
    const location = useLocation();
    const param = new URLSearchParams(location.search);
    const orderId = param.get("orderId");
    const navigate = useNavigate();
    const [order, setOrder] = useState<Orders | null>(null);

    if (!orderId) {
        navigate(-1);
    }

    useEffect(() => {
        fetch(ApiDomain + `/api/order/get/${orderId}`).then((res) => {
            if (res.status === 404 || res.status === 401) {
                toast.error(`Không tồn tại đơn hàng với id là: ${orderId}`);
                navigate(-1);
                return;
            }
            return res.json();
        })
            .then((data) => {
                if (data.code === 200) {
                    setOrder(data.data);
                }
            }).catch((err) => console.log("Lỗi: " + err));
    }, []);

    return (
        <div className="order-confirmation-container">
            <div className="order-header">
                <h1>Đặt hàng thành công!</h1>
                <p style={{color:'green'}}>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi. Dưới đây là thông tin đơn hàng của bạn:</p><br />
            </div>

            <div className="order-info">
                <h2>Thông tin đơn hàng</h2>
                <div className="order-details">
                    {/* <p>Mã đơn hàng: <b>{order?.}</b></p> */}
                    <p>Ngày đặt hàng: <b>{order?.createdAt}</b></p>
                    <p>Trạng thái: <b>{order?.status}</b></p>
                </div>

                <h3>Chi tiết sản phẩm</h3>
                <div className="order-items">
                    {order?.orderDetailList.map((item) => (
                        <div className="order-item">
                            <img src={item.product.imageList[0].imageUrl} />
                            <div className="item-info">
                                <p><strong>Tên sản phẩm:</strong> {item.product.productName}</p>
                                <p><strong>Số lượng:</strong> {item.quantity}</p>
                            </div>
                            <div className="item-price">
                                <p>Giá tiền: {formatVND(item.product.productPrice)}</p>
                                <p>Tổng tiền: {formatVND(item.totalPrice)}</p>
                            </div>
                        </div>
                    ))}
                </div>


                <h3>Tổng cộng</h3>
                <div className="order-total">
                    <p>Tổng giá trị đơn hàng: <b>{order ? formatVND(order.totalPrice) : ''}</b></p>
                    <p>Phương thức thanh toán: <b>{`${order?.paymentMethod.paymentName} (${order?.paymentMethod.description})`}</b></p>
                    <p>Phương thức vận chuyển: <b>{`${order?.deliveryMethod.name} (${order?.deliveryMethod.description})`}</b></p>
                </div>
            </div>

            <div className="shipping-info">
                <h3>Thông tin vận chuyển</h3>
                <p>Người nhận: <b>{`${order?.user.lastName} ${order?.user.firstName}`}</b></p>
                <p>Địa chỉ: <b>{order?.address}</b></p>
                <p>Số điện thoại: <b>{order?.user.phoneNumber}</b></p>
            </div>

            <div className="order-footer">
                <p>Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi. Chúng tôi sẽ gửi thông tin vận chuyển sớm!</p>
            </div>
        </div>
    );
};
