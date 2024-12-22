import React from 'react';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Categories
                            </h4>
                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Women
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Men
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Shoes
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Watches
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Help
                            </h4>
                            <ul>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Track Order
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Returns
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        Shipping
                                    </a>
                                </li>
                                <li className="p-b-10">
                                    <a href="#" className="stext-107 cl10 hov-cl1 trans-04">
                                        FAQs
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                GET IN TOUCH
                            </h4>
                            <p className="stext-107 cl10 size-201">
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
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
                            <h4 className="stext-301 cl0 p-b-30">
                                Newsletter
                            </h4>
                            <form>
                                <div className="wrap-input1 w-full p-b-4">
                                    <input className="input1 bg-none plh1 stext-107 cl10" type="text" name="email" placeholder="email@example.com" />
                                    <div className="focus-input1 trans-04" />
                                </div>
                                <div className="p-t-18">
                                    <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
                                        Subscribe
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        {/* Back to top */}
                        <div className="btn-back-to-top" id="myBtn">
                            <span className="symbol-btn-back-to-top">
                                <i className="zmdi zmdi-chevron-up" />
                            </span>
                        </div>
                        {/* Modal1 */}
                        <div className="wrap-modal1 js-modal1 p-t-60 p-b-20">
                            <div className="overlay-modal1 js-hide-modal1" />
                            <div className="container">
                                <div className="bg0 p-t-60 p-b-30 p-lr-15-lg how-pos3-parent">
                                    <button className="how-pos3 hov3 trans-04 js-hide-modal1">
                                        <img src="../../../../../public/assets/images/icons/icon-close.png" alt="CLOSE" />
                                    </button>
                                    <div className="row">
                                        <div className="col-md-6 col-lg-7 p-b-30">
                                            <div className="p-l-25 p-r-30 p-lr-0-lg">
                                                <div className="wrap-slick3 flex-sb flex-w">
                                                    <div className="wrap-slick3-dots" />
                                                    <div className="wrap-slick3-arrows flex-sb-m flex-w" />
                                                    <div className="slick3 gallery-lb">
                                                        <div className="item-slick3" data-thumb="../../../../../public/assets/images/product-detail-01.jpg">
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img src="../../../../../public/assets/images/product-detail-01.jpg" alt="IMG-PRODUCT" />
                                                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="../../../../../public/assets/images/product-detail-01.jpg">
                                                                    <i className="fa fa-expand" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="item-slick3" data-thumb="../../../../../public/assets/images/product-detail-02.jpg">
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img src="../../../../../public/assets/images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                                                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="../../../../../public/assets/images/product-detail-02.jpg">
                                                                    <i className="fa fa-expand" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="item-slick3" data-thumb="../../../../../public/assets/images/product-detail-03.jpg">
                                                            <div className="wrap-pic-w pos-relative">
                                                                <img src="../../../../../public/assets/images/product-detail-03.jpg" alt="IMG-PRODUCT" />
                                                                <a className="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="../../../../../public/assets/images/product-detail-03.jpg">
                                                                    <i className="fa fa-expand" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-5 p-b-30">
                                            <div className="p-r-50 p-t-5 p-lr-0-lg">
                                                <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                                    Lightweight Jacket
                                                </h4>
                                                <span className="mtext-106 cl2">
                                                    $58.79
                                                </span>
                                                <p className="stext-102 cl3 p-t-23">
                                                    Nulla eget sem vitae eros pharetra viverra. Nam vitae luctus ligula. Mauris consequat ornare feugiat.
                                                </p>
                                                {/*  */}
                                                <div className="p-t-33">
                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-203 flex-c-m respon6">
                                                            Size
                                                        </div>
                                                        <div className="size-204 respon6-next">
                                                            <div className="rs1-select2 bor8 bg0">
                                                                <select className="js-select2" name="time">
                                                                    <option>Choose an option</option>
                                                                    <option>Size S</option>
                                                                    <option>Size M</option>
                                                                    <option>Size L</option>
                                                                    <option>Size XL</option>
                                                                </select>
                                                                <div className="dropDownSelect2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-203 flex-c-m respon6">
                                                            Color
                                                        </div>
                                                        <div className="size-204 respon6-next">
                                                            <div className="rs1-select2 bor8 bg0">
                                                                <select className="js-select2" name="time">
                                                                    <option>Choose an option</option>
                                                                    <option>Red</option>
                                                                    <option>Blue</option>
                                                                    <option>White</option>
                                                                    <option>Grey</option>
                                                                </select>
                                                                <div className="dropDownSelect2" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-w flex-r-m p-b-10">
                                                        <div className="size-204 flex-w flex-m respon6-next">
                                                            <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                                <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-minus" />
                                                                </div>
                                                                <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue={1} />
                                                                <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                    <i className="fs-16 zmdi zmdi-plus" />
                                                                </div>
                                                            </div>
                                                            <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*  */}
                                                <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                                    <div className="flex-m bor9 p-r-10 m-r-11">
                                                        <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                                            <i className="zmdi zmdi-favorite" />
                                                        </a>
                                                    </div>
                                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                                        <i className="fa fa-facebook" />
                                                    </a>
                                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                                        <i className="fa fa-twitter" />
                                                    </a>
                                                    <a href="#" className="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                                        <i className="fa fa-google-plus" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>

        </React.Fragment>
    );
};

export default Footer;