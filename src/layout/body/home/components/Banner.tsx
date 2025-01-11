import React from 'react';

const Banner = () => {
    return (
        <React.Fragment>
            {/* Banner */}
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="../../../../../public/assets/images/Fashion Fusion.png" alt="IMG-BANNER" />
                                <a href="shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Bộ sưu tập nữ
                                        </span>
                                        <span className="block1-info stext-104 trans-04">
                                            Giảm giá lên tới 50 %
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Mua Ngay
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="../../../../../public/assets/images/ManBanner.png" alt="IMG-BANNER" />
                                <a href="shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                           Bộ sưu tập nam
                                        </span>
                                        <span className="block1-info stext-104 trans-04">
                                            Bộ sưu tập tháng mới
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Mua Ngay
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4 p-b-30 m-lr-auto">
                            {/* Block1 */}
                            <div className="block1 wrap-pic-w">
                                <img src="../../../../../public/assets/images/banner-03.jpg" alt="IMG-BANNER" />
                                <a href="shop" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                    <div className="block1-txt-child1 flex-col-l">
                                        <span className="block1-name ltext-102 trans-04 p-b-8">
                                            Trẻ em
                                        </span>
                                        <span className="block1-info stext-104 trans-04">
                                           Mẫu mới nhất
                                        </span>
                                    </div>
                                    <div className="block1-txt-child2 p-b-4 trans-05">
                                        <div className="block1-link stext-101 cl0 trans-09">
                                            Mua Ngay
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
};

export default Banner;
