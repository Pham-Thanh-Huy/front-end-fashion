import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-107  p-b-30">
                                Danh Mục
                            </h4>
                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Nữ
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Nam
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Giày
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Đồng Hồ
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-107 c0 p-b-30">
                                Hỗ Trợ
                            </h4>
                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Theo Dõi Đơn Hàng
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Đổi Trả
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Giao Hàng
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Câu Hỏi Thường Gặp
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-107  p-b-30">
                                LIÊN HỆ VỚI CHÚNG TÔI
                            </h4>
                            <p className="stext-107 cl10 size-201">
                                Có câu hỏi? Hãy liên hệ với chúng tôi tại cửa hàng tầng 8, 379 Hudson St, New York, NY 10018 hoặc gọi cho chúng tôi theo số (+1) 96 716 6879
                            </p>
                            <div className="p-t-27">
                                <a href="#" className="fs-18 cl10 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-facebook" />
                                </a>
                                <a href="#" className="fs-18 cl10 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-instagram" />
                                </a>
                                <a href="#" className="fs-18 cl10 hov-cl1 trans-04 m-r-16">
                                    <i className="fa fa-pinterest-p" />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-107  p-b-30">
                                Bản Tin
                            </h4>
                            <form>
                                <div className="wrap-input1 w-full p-b-4">
                                    <input className="input1 bg-none plh1 stext-107 cl10" type="text" name="email" placeholder="email@example.com" />
                                    <div className="focus-input1 trans-04" />
                                </div>
                                <div className="p-t-18">
                                    <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Đăng Ký
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                   

                </div>
            </footer>
        </React.Fragment>
    );
};

export default Footer;
