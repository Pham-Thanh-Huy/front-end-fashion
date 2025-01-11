import React from 'react';

const Header = () => {
  return (
    <React.Fragment>
      {/* Header */}
      <header style={{marginBottom : '100px'}}>
        {/* Header desktop */}
        <div className="container-menu-desktop">

          <div className="wrap-menu-desktop">
            <nav className="limiter-menu-desktop container">
              {/* Logo desktop */}
              <a href="/" className="logo">
                <img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO" />
              </a>
              {/* Menu desktop */}
              <div className="menu-desktop">
                <ul className="main-menu">
                  <li className="active-menu">
                    <a href="/">Trang chủ</a>
                    <ul className="sub-menu">
                      <li><a href="/">Homepage 1</a></li>
                      <li><a href="/">Homepage 2</a></li>
                      <li><a href="/">Homepage 3</a></li>
                    </ul>
                  </li>
                  <li>
                    <a href="shop">Sản phẩm</a>
                  </li>
                  <li>
                    <a href="blog">Tin tức</a>
                  </li>
                  <li>
                    <a href="about">Về chúng tôi</a>
                  </li>
                  <li>
                    <a href="contact">Liên hệ</a>
                  </li>
                </ul>
              </div>
              {/* Icon header */}
              <div className="wrap-icon-header flex-w flex-r-m">
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                  <i className="zmdi zmdi-search" />
                </div>
                <div className="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart" data-notify={2}>
                  <i className="zmdi zmdi-shopping-cart" />
                </div>
                <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti" data-notify={0}>
                  <i className="zmdi zmdi-favorite-outline" />
                </a>
              </div>
            </nav>
          </div>
        </div>
        {/* Header Mobile */}
        <div className="wrap-header-mobile">
          {/* Logo moblie */}
          <div className="logo-mobile">
            <a href="index.html"><img src="/assets/images/icons/logo-01.png" alt="IMG-LOGO" /></a>
          </div>
          {/* Icon header */}
          <div className="wrap-icon-header flex-w flex-r-m m-r-15">
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
              <i className="zmdi zmdi-search" />
            </div>
            <div className="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart" data-notify={2}>
              <i className="zmdi zmdi-shopping-cart" />
            </div>
            <a href="#" className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti" data-notify={0}>
              <i className="zmdi zmdi-favorite-outline" />
            </a>
          </div>
          {/* Button show menu */}
          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
        {/* Menu Mobile */}
        <div className="menu-mobile">

          <ul className="main-menu-m">
            <li>
              <a href="/">Home</a>
              <ul className="sub-menu-m">
                <li><a href="/">Homepage 1</a></li>
                <li><a href="/">Homepage 2</a></li>
                <li><a href="/">Homepage 3</a></li>
              </ul>
              <span className="arrow-main-menu-m">
                <i className="fa fa-angle-right" aria-hidden="true" />
              </span>
            </li>
            <li>
              <a href="shop">Shop</a>
            </li>
            <li>
              <a href="cart" className="label1 rs1" data-label1="hot">Features</a>
            </li>
            <li>
              <a href="blog">Blog</a>
            </li>
            <li>
              <a href="about">About</a>
            </li>
            <li>
              <a href="contact">Contact</a>
            </li>
          </ul>
        </div>
        {/* Modal Search */}
        <div className="modal-search-header flex-c-m trans-04 js-hide-modal-search">
          <div className="container-search-header">
            <button className="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
              <img src="images/icons/icon-close2.png" alt="CLOSE" />
            </button>
            <form className="wrap-search-header flex-w p-l-15">
              <button className="flex-c-m trans-04">
                <i className="zmdi zmdi-search" />
              </button>
              <input className="plh3" type="text" name="search" placeholder="Search..." />
            </form>
          </div>
        </div>
      </header>

    </React.Fragment>
  );
};

export default Header;