import React from 'react';

const Header = () => {
    return (<React.Fragment>
            <header id="header" className="header style-04 header-transparent header-sticky">
                <div className="header-middle">
                    <div className="header-middle-inner">
                        <div className="header-search-mid">
                            <div className="header-search">
                                <div className="block-search">
                                    <form role="search" method="get"
                                          className="form-search block-search-form lynessa-live-search-form">
                                        <div className="form-content search-box results-search">
                                            <div className="inner">
                                                <input autoComplete="off" className="searchfield txt-livesearch input"
                                                       name="s" placeholder="Search here..." type="text"/>
                                            </div>
                                        </div>
                                        <input name="post_type" defaultValue="product" type="hidden"/>
                                        <input name="taxonomy" defaultValue="product_cat" type="hidden"/>
                                        <div className="category">
                                            <select title="product_cat" name="product_cat"
                                                    className="category-search-option" tabIndex={-1}
                                                    style={{display: 'none'}}>
                                                <option value={0}>All Categories</option>
                                                <option className="level-0" value="light">Just In</option>
                                                <option className="level-0" value="chair">Restock</option>
                                                <option className="level-0" value="table">Dresses</option>
                                                <option className="level-0" value="bed">Shirts</option>
                                                <option className="level-0" value="new-arrivals">New arrivals</option>
                                                <option className="level-0" value="lamp">Leggings</option>
                                                <option className="level-0" value="specials">Knit Tops</option>
                                                <option className="level-0" value="sofas">Bodysuits</option>
                                            </select>
                                        </div>
                                        <button type="submit" className="btn-submit">
                                            <span className="pe-7s-search"/>
                                        </button>
                                    </form>
                                    {/* block search */}
                                </div>
                            </div>
                        </div>
                        <div className="header-logo-menu">
                            <div className="block-menu-bar">
                                <a className="menu-bar menu-toggle" href="#">
                                    <span/>
                                    <span/>
                                    <span/>
                                </a>
                            </div>
                            <div className="header-logo">
                                <a href="index-2.html"><img alt="Lynessa" src="assets/images/logo.png"
                                                            className="logo"/></a></div>
                        </div>
                        <div className="header-control">
                            <div className="header-control-inner">
                                <div className="meta-dreaming">
                                    <div className="menu-item block-user block-dreaming lynessa-dropdown">
                                        <a className="block-link" href="my-account.html">
                                            <span className="pe-7s-user"/>
                                        </a>
                                        <ul className="sub-menu">
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--dashboard is-active">
                                                <a href="#">Dashboard</a>
                                            </li>
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--orders">
                                                <a href="#">Orders</a>
                                            </li>
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--downloads">
                                                <a href="#">Downloads</a>
                                            </li>
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--edit-address">
                                                <a href="#">Addresses</a>
                                            </li>
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--edit-account">
                                                <a href="#">Account details</a>
                                            </li>
                                            <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--customer-logout">
                                                <a href="#">Logout</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="block-minicart block-dreaming lynessa-mini-cart lynessa-dropdown">
                                        <div className="shopcart-dropdown block-cart-link"
                                             data-lynessa="lynessa-dropdown">
                                            <a className="block-link link-dropdown" href="cart.html">
                                                <span className="pe-7s-shopbag"/>
                                                <span className="count">3</span>
                                            </a>
                                        </div>
                                        <div className="widget lynessa widget_shopping_cart">
                                            <div className="widget_shopping_cart_content">
                                                <h3 className="minicart-title">Your Cart<span
                                                    className="minicart-number-items">3</span></h3>
                                                <ul className="lynessa-mini-cart cart_list product_list_widget">
                                                    <li className="lynessa-mini-cart-item mini_cart_item">
                                                        <a href="#" className="remove remove_from_cart_button">×</a>
                                                        <a href="#">
                                                            <img src="assets/images/apro134-1-600x778.jpg"
                                                                 className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                                 alt="img" width={600} height={778}/>T-shirt with skirt
                                                            –
                                                            Pink&nbsp;
                                                        </a>
                                                        <span className="quantity">1 × <span
                                                            className="lynessa-Price-amount amount"><span
                                                            className="lynessa-Price-currencySymbol">$</span>150.00</span></span>
                                                    </li>
                                                    <li className="lynessa-mini-cart-item mini_cart_item">
                                                        <a href="#" className="remove remove_from_cart_button">×</a>
                                                        <a href="#">
                                                            <img src="assets/images/apro1113-600x778.jpg"
                                                                 className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                                 alt="img" width={600} height={778}/>Abstract
                                                            Sweatshirt&nbsp;
                                                        </a>
                                                        <span className="quantity">1 × <span
                                                            className="lynessa-Price-amount amount"><span
                                                            className="lynessa-Price-currencySymbol">$</span>129.00</span></span>
                                                    </li>
                                                    <li className="lynessa-mini-cart-item mini_cart_item">
                                                        <a href="#" className="remove remove_from_cart_button">×</a>
                                                        <a href="#">
                                                            <img src="assets/images/apro201-1-600x778.jpg"
                                                                 className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                                 alt="img" width={600} height={778}/>ELOISE
                                                            SHIRRED&nbsp;
                                                        </a>
                                                        <span className="quantity">1 × <span
                                                            className="lynessa-Price-amount amount"><span
                                                            className="lynessa-Price-currencySymbol">$</span>139.00</span></span>
                                                    </li>
                                                </ul>
                                                <p className="lynessa-mini-cart__total total"><strong>Subtotal:</strong>
                                                    <span className="lynessa-Price-amount amount"><span
                                                        className="lynessa-Price-currencySymbol">$</span>418.00</span>
                                                </p>
                                                <p className="lynessa-mini-cart__buttons buttons">
                                                    <a href="cart.html" className="button lynessa-forward">Viewcart</a>
                                                    <a href="checkout.html"
                                                       className="button checkout lynessa-forward">Checkout</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-wrap-stick">
                    <div className="header-position">
                        <div className="header-nav">
                            <div className="container">
                                <div className="lynessa-menu-wapper"/>
                                <div className="header-nav-inner">
                                    <div className="box-header-nav menu-nocenter">
                                        <ul id="menu-primary-menu"
                                            className="clone-main-menu lynessa-clone-mobile-menu lynessa-nav main-menu">
                                            <li id="menu-item-230"
                                                className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu menu-item-has-children">
                                                <a className="lynessa-menu-item-title" title="Home"
                                                   href="index-2.html">Home</a>
                                                <span className="toggle-submenu"/>
                                                <div className="submenu megamenu megamenu-home">
                                                    <div className="demo-item">
                                                        <div className="row">
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="index-2.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg">
                                                                            <img src="assets/images/demo001.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/>
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="index-2.html">Home 01</a>
                                                                </h5>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="home-02.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg ">
                                                                            <img src="assets/images/demo002.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/></a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="home-02.html">Home 02</a>
                                                                </h5>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="home-03.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg">
                                                                            <img src="assets/images/demo003.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/>
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="home-03.html">Home 03</a>
                                                                </h5>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="home-04.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg ">
                                                                            <img src="assets/images/demo004.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/>
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="home-04.html">Home 04</a></h5>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="home-05.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg">
                                                                            <img src="assets/images/demo005.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/>
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="home-05.html">Home 05</a>
                                                                </h5>
                                                            </div>
                                                            <div className="col-md-6 col-lg-4 col-sm-6">
                                                                <div
                                                                    className="dreaming_single_image dreaming_content_element az_align_left shadow-img">
                                                                    <figure className="dreaming_wrapper az_figure">
                                                                        <a href="home-06.html" target="_self"
                                                                           className="az_single_image-wrapper az_box_border_grey effect normal-effect dark-bg ">
                                                                            <img src="assets/images/demo006.jpg"
                                                                                 className="az_single_image-img attachment-full"
                                                                                 alt="img"/>
                                                                        </a>
                                                                    </figure>
                                                                </div>
                                                                <h5 className="az_custom_heading">
                                                                    <a href="home-06.html">Home 06</a>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="menu-item-228"
                                                className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-228 parent parent-megamenu item-megamenu menu-item-has-children">
                                                <a className="lynessa-menu-item-title" title="Shop"
                                                   href="shop.html">Shop</a>
                                                <span className="toggle-submenu"/>
                                                <div className="submenu megamenu megamenu-shop">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">Shop Layouts </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="shop.html" target="_self">Shop
                                                                                Grid </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-list.html" target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-new.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Shop List
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop.html" target="_self">No
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-leftsidebar.html"
                                                                               target="_self">Left
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="shop-rightsidebar.html"
                                                                               target="_self">Right
                                                                                Sidebar </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">Product Layouts </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="single-product.html"
                                                                               target="_self">Vertical
                                                                                Thumbnails </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-policy.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-new.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Extra Sidebar
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-rightsidebar.html"
                                                                               target="_self">
                                                                                Right Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-leftsidebar.html"
                                                                               target="_self">
                                                                                Left Sidebar </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Product Extends </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="single-product-bundle.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-new.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Product Bundle
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-360deg.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-hot.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Product 360 Deg </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-video.html"
                                                                               target="_self">
                                                                                Video </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Other Pages </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="cart.html">Cart </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="wishlist.html"
                                                                               target="_self">Wishlist </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="checkout.html"
                                                                               target="_self">Checkout </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="order-tracking.html"
                                                                               target="_self">Order
                                                                                Tracking </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="my-account.html" target="_self">My
                                                                                Account </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="compare.html"
                                                                               target="_self">Compare</a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Product Types </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="single-product-simple.html"
                                                                               target="_self">
                                                                                Simple </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product.html"
                                                                               target="_self">
                                                                                <span className="image"><img
                                                                                    src="assets/images/label-hot.jpg"
                                                                                    className="attachment-full size-full"
                                                                                    alt="img"/></span>
                                                                                Variable </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-external.html"
                                                                               target="_self">
                                                                                External / Affiliate </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-group.html"
                                                                               target="_self">
                                                                                Grouped </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-outofstock.html"
                                                                               target="_self">
                                                                                Out Of Stock </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-product-onsale.html"
                                                                               target="_self">
                                                                                On Sale </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Other Account Page</h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="dashboard.html" target="_self">
                                                                                Dashboard
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="orders.html" target="_self">
                                                                                Orders</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="downloads.html" target="_self">
                                                                                Downloads </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-address.html" target="_self">
                                                                                Addresses</a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="edit-account.html" target="_self">
                                                                                Account details </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="menu-item-229"
                                                className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
                                                <a className="lynessa-menu-item-title" title="Elements"
                                                   href="#">Elements</a>
                                                <span className="toggle-submenu"/>
                                                <div className="submenu megamenu megamenu-elements">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">Element 1 </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="banner.html"
                                                                               target="_self">Banner </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog-element.html" target="_self">Blog
                                                                                Element </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="categories-element.html"
                                                                               target="_self">
                                                                                Categories Element </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="product-element.html"
                                                                               target="_self">
                                                                                Product Element </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Element 2 </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="client.html" target="_self">
                                                                                Client </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="product-layout.html"
                                                                               target="_self">
                                                                                Product Layout </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="google-map.html" target="_self">
                                                                                Google map </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="iconbox.html" target="_self">
                                                                                Icon Box </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="team.html" target="_self">
                                                                                Team </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Element 3 </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="instagram-feed.html"
                                                                               target="_self">
                                                                                Instagram Feed </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="newsletter.html" target="_self">
                                                                                Newsletter </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="testimonials.html" target="_self">
                                                                                Testimonials </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="menu-item-996"
                                                className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-996 parent parent-megamenu item-megamenu menu-item-has-children">
                                                <a className="lynessa-menu-item-title" title="Blog"
                                                   href="blog.html">Blog</a>
                                                <span className="toggle-submenu"/>
                                                <div className="submenu megamenu megamenu-blog">
                                                    <div className="row">
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Blog Layout </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="blog.html" target="_self">No
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog-leftsidebar.html"
                                                                               target="_self">Left
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog-rightsidebar.html"
                                                                               target="_self">Right
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog.html" target="_self">Blog
                                                                                Standard </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="blog-grid.html" target="_self">Blog
                                                                                Grid </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Post Layout </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="single-post.html" target="_self">No
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-leftsidebar.html"
                                                                               target="_self">Left
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-rightsidebar.html"
                                                                               target="_self">Right
                                                                                Sidebar </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-instagram.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-hot.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Instagram In Post
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-product.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-new.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Product In Post
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="lynessa-listitem style-01">
                                                                <div className="listitem-inner">
                                                                    <h4 className="title">
                                                                        Post Format </h4>
                                                                    <ul className="listitem-list">
                                                                        <li>
                                                                            <a href="single-post.html"
                                                                               target="_self">Standard </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-gallery.html"
                                                                               target="_self">Gallery </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="single-post-video.html"
                                                                               target="_self">
                                                                                <span className="image">
                                                                                    <img
                                                                                        src="assets/images/label-hot.jpg"
                                                                                        className="attachment-full size-full"
                                                                                        alt="img"/>
                                                                                </span>
                                                                                Video
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li id="menu-item-237"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-237 parent">
                                                <a className="lynessa-menu-item-title" title="Pages" href="#">Pages</a>
                                                <span className="toggle-submenu"/>
                                                <ul role="menu" className="submenu">
                                                    <li id="menu-item-987"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-987">
                                                        <a className="lynessa-menu-item-title" title="About"
                                                           href="about.html">About</a></li>
                                                    <li id="menu-item-988"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-988">
                                                        <a className="lynessa-menu-item-title" title="Contact"
                                                           href="contact.html">Contact</a></li>
                                                    <li id="menu-item-990"
                                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-990">
                                                        <a className="lynessa-menu-item-title" title="Page 404"
                                                           href="404.html">Page 404</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-mobile">
                    <div className="header-mobile-left">
                        <div className="block-menu-bar">
                            <a className="menu-bar menu-toggle" href="#">
                                <span/>
                                <span/>
                                <span/>
                            </a>
                        </div>
                        <div className="header-search lynessa-dropdown">
                            <div className="header-search-inner" data-lynessa="lynessa-dropdown">
                                <a href="#" className="link-dropdown block-link">
                                    <span className="pe-7s-search"/>
                                </a>
                            </div>
                            <div className="block-search">
                                <form role="search" method="get"
                                      className="form-search block-search-form lynessa-live-search-form">
                                    <div className="form-content search-box results-search">
                                        <div className="inner">
                                            <input autoComplete="off" className="searchfield txt-livesearch input"
                                                   name="s" placeholder="Search here..." type="text"/>
                                        </div>
                                    </div>
                                    <input name="post_type" defaultValue="product" type="hidden"/>
                                    <input name="taxonomy" defaultValue="product_cat" type="hidden"/>
                                    <div className="category">
                                        <select title="product_cat" name="product_cat"
                                                className="category-search-option" tabIndex={-1}
                                                style={{display: 'none'}}>
                                            <option value={0}>All Categories</option>
                                            <option className="level-0" value="light">Just In</option>
                                            <option className="level-0" value="chair">Restock</option>
                                            <option className="level-0" value="table">Dresses</option>
                                            <option className="level-0" value="bed">Shirts</option>
                                            <option className="level-0" value="new-arrivals">New arrivals</option>
                                            <option className="level-0" value="lamp">Leggings</option>
                                            <option className="level-0" value="specials">Knit Tops</option>
                                            <option className="level-0" value="sofas">Bodysuits</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn-submit">
                                        <span className="pe-7s-search"/>
                                    </button>
                                </form>
                                {/* block search */}
                            </div>
                        </div>
                        <ul className="wpml-menu">
                            <li className="menu-item lynessa-dropdown block-language">
                                <a href="#" data-lynessa="lynessa-dropdown">
                                    <img src="assets/images/en.png" alt="en" width={18} height={12}/>
                                    English
                                </a>
                                <span className="toggle-submenu"/>
                                <ul className="sub-menu">
                                    <li className="menu-item">
                                        <a href="#">
                                            <img src="assets/images/it.png" alt="it" width={18} height={12}/>
                                            Italiano
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="menu-item">
                                <div className="wcml-dropdown product wcml_currency_switcher">
                                    <ul>
                                        <li className="wcml-cs-active-currency">
                                            <a className="wcml-cs-item-toggle">USD</a>
                                            <ul className="wcml-cs-submenu">
                                                <li>
                                                    <a>EUR</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="header-mobile-mid">
                        <div className="header-logo">
                            <a href="index-2.html"><img alt="Lynessa" src="assets/images/logo.png"
                                                        className="logo"/></a></div>
                    </div>
                    <div className="header-mobile-right">
                        <div className="header-control-inner">
                            <div className="meta-dreaming">
                                <div className="menu-item block-user block-dreaming lynessa-dropdown">
                                    <a className="block-link" href="my-account.html">
                                        <span className="pe-7s-user"/>
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--dashboard is-active">
                                            <a href="#">Dashboard</a>
                                        </li>
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--orders">
                                            <a href="#">Orders</a>
                                        </li>
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--downloads">
                                            <a href="#">Downloads</a>
                                        </li>
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--edit-address">
                                            <a href="#">Addresses</a>
                                        </li>
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--edit-account">
                                            <a href="#">Account details</a>
                                        </li>
                                        <li className="menu-item lynessa-MyAccount-navigation-link lynessa-MyAccount-navigation-link--customer-logout">
                                            <a href="#">Logout</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="block-minicart block-dreaming lynessa-mini-cart lynessa-dropdown">
                                    <div className="shopcart-dropdown block-cart-link" data-lynessa="lynessa-dropdown">
                                        <a className="block-link link-dropdown" href="cart.html">
                                            <span className="pe-7s-shopbag"/>
                                            <span className="count">3</span>
                                        </a>
                                    </div>
                                    <div className="widget lynessa widget_shopping_cart">
                                        <div className="widget_shopping_cart_content">
                                            <h3 className="minicart-title">Your Cart<span
                                                className="minicart-number-items">3</span></h3>
                                            <ul className="lynessa-mini-cart cart_list product_list_widget">
                                                <li className="lynessa-mini-cart-item mini_cart_item">
                                                    <a href="#" className="remove remove_from_cart_button">×</a>
                                                    <a href="#">
                                                        <img src="assets/images/apro134-1-600x778.jpg"
                                                             className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                             alt="img" width={600} height={778}/>T-shirt with skirt –
                                                        Pink&nbsp;
                                                    </a>
                                                    <span className="quantity">1 × <span
                                                        className="lynessa-Price-amount amount"><span
                                                        className="lynessa-Price-currencySymbol">$</span>150.00</span></span>
                                                </li>
                                                <li className="lynessa-mini-cart-item mini_cart_item">
                                                    <a href="#" className="remove remove_from_cart_button">×</a>
                                                    <a href="#">
                                                        <img src="assets/images/apro1113-600x778.jpg"
                                                             className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                             alt="img" width={600} height={778}/>Abstract
                                                        Sweatshirt&nbsp;
                                                    </a>
                                                    <span className="quantity">1 × <span
                                                        className="lynessa-Price-amount amount"><span
                                                        className="lynessa-Price-currencySymbol">$</span>129.00</span></span>
                                                </li>
                                                <li className="lynessa-mini-cart-item mini_cart_item">
                                                    <a href="#" className="remove remove_from_cart_button">×</a>
                                                    <a href="#">
                                                        <img src="assets/images/apro201-1-600x778.jpg"
                                                             className="attachment-lynessa_thumbnail size-lynessa_thumbnail"
                                                             alt="img" width={600} height={778}/>ELOISE SHIRRED&nbsp;
                                                    </a>
                                                    <span className="quantity">1 × <span
                                                        className="lynessa-Price-amount amount"><span
                                                        className="lynessa-Price-currencySymbol">$</span>139.00</span></span>
                                                </li>
                                            </ul>
                                            <p className="lynessa-mini-cart__total total"><strong>Subtotal:</strong>
                                                <span className="lynessa-Price-amount amount"><span
                                                    className="lynessa-Price-currencySymbol">$</span>418.00</span>
                                            </p>
                                            <p className="lynessa-mini-cart__buttons buttons">
                                                <a href="cart.html" className="button lynessa-forward">Viewcart</a>
                                                <a href="checkout.html"
                                                   className="button checkout lynessa-forward">Checkout</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </React.Fragment>);
};

export default Header;