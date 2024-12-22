import React from 'react';

const Contact = () => {
    return (
        <React.Fragment>
            <section className="bg0 p-t-104 p-b-116">
                <div className="container">
                    <div className="flex-w flex-tr">
                        <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                            <form>
                                <h4 className="mtext-105 cl2 txt-center p-b-30">
                                    Gửi Tin Nhắn Cho Chúng Tôi
                                </h4>
                                <div className="bor8 m-b-20 how-pos4-parent">
                                    <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Địa Chỉ Email Của Bạn" />
                                    <img className="how-pos4 pointer-none" src="../../../../../public/assets/images/icons/icon-email.png" alt="ICON" />
                                </div>
                                <div className="bor8 m-b-30">
                                    <textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="Chúng Tôi Có Thể Giúp Gì Cho Bạn?" defaultValue={""} />
                                </div>
                                <button className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer">
                                    Gửi
                                </button>
                            </form>
                        </div>
                        <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                            <div className="flex-w w-full p-b-42">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-map-marker" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Địa Chỉ
                                    </span>
                                    <p className="stext-115 cl6 size-213 p-t-18">
                                        Coza Store Center, Tầng 8, 379 Hudson St, New York, NY 10018, Mỹ
                                    </p>
                                </div>
                            </div>
                            <div className="flex-w w-full p-b-42">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-phone-handset" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Liên Hệ
                                    </span>
                                    <p className="stext-115 cl1 size-213 p-t-18">
                                        +1 800 1236879
                                    </p>
                                </div>
                            </div>
                            <div className="flex-w w-full">
                                <span className="fs-18 cl5 txt-center size-211">
                                    <span className="lnr lnr-envelope" />
                                </span>
                                <div className="size-212 p-t-2">
                                    <span className="mtext-110 cl2">
                                        Hỗ Trợ Bán Hàng
                                    </span>
                                    <p className="stext-115 cl1 size-213 p-t-18">
                                        contact@example.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Contact;
