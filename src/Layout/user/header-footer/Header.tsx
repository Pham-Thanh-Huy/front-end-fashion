import React from "react";

export const Header = () => {
  return (
    <header className="header-area header-sticky text-center header-default">
      <div className="header-main-sticky">
        <div className="header-main-head">
          <div className="header-main">
            <div className="container">
              <div className="header-left float-left d-flex d-lg-flex d-md-block d-xs-block">
                
             
                <div className="contact">
                  <i className="material-icons">phone</i>
                  <a href="tel:+1234567890">083.812.9818</a>
                </div>
              </div>
              <div className="header-middle float-lg-left float-md-left float-sm-left float-xs-none">
                <div className="logo">
                  <a href="index.html">
                    <img
                      src="lib/img/logos/logo.png"
                      alt="logo"
                      width={200}
                      height={50}
                    />
                  </a>{" "}
                </div>
              </div>
              <div className="header-right d-flex d-xs-flex d-sm-flex justify-content-end float-right">
                <div className="search-wrapper">
                  <a>
                    <i className="material-icons search">search</i>
                    <i className="material-icons close">close</i>{" "}
                  </a>
                  <form
                    autoComplete="off"
                    action="/action_page.php"
                    className="search-form"
                  >
                    <div className="autocomplete">
                      <input
                        id="myInput"
                        type="text"
                        name="myCountry"
                        placeholder="Search here"
                      />
                      <button type="button">
                        <i className="material-icons">search</i>
                      </button>
                    </div>
                  </form>
                </div>
                <div className="user-info">
                  <button type="button" className="btn">
                    <i className="material-icons">perm_identity</i>{" "}
                  </button>
                  <div id="user-dropdown" className="user-menu">
                    <ul>
                      <li>
                        <a href="my-account.html" className="text-capitalize">
                          my account
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="modal-view button"
                          data-toggle="modal"
                          data-target="#modalRegisterForm"
                        >
                          Register
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="modal-view button"
                          data-toggle="modal"
                          data-target="#modalLoginForm"
                        >
                          login
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="cart-wrapper">
                  <button type="button" className="btn">
                    <i className="material-icons">shopping_cart</i>
                    <span className="ttcount">2</span>{" "}
                  </button>
                  <div id="cart-dropdown" className="cart-menu">
                    <ul className="w-100 float-left">
                      <li>
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td className="text-center">
                                <a href="#">
                                  <img
                                    src="lib/img/products/01.jpg"
                                    height={104}
                                    width={80}
                                  />
                                </a>
                              </td>
                              <td className="text-left product-name">
                                <a href="#">aliquam quaerat voluptatem</a>
                                <div className="quantity float-left w-100">
                                  <span className="cart-qty">1 × </span>
                                  <span className="text-left price">
                                    {" "}
                                    $20.00
                                  </span>{" "}
                                </div>{" "}
                              </td>
                              <td className="text-center close">
                                <a className="close-cart">
                                  <i className="material-icons">close</i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li>
                        <table className="table price mb-30">
                          <tbody>
                            <tr>
                              <td className="text-left">
                                <strong>Total</strong>
                              </td>
                              <td className="text-right">
                                <strong>$2,122.00</strong>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </li>
                      <li className="buttons w-100 float-left">
                        <form action="cart_page.html">
                          <input
                            className="btn pull-left mt_10 btn-primary btn-rounded w-100"
                            defaultValue="View cart"
                            type="submit"
                          />
                        </form>
                        <form action="checkout_page.html">
                          <input
                            className="btn pull-right mt_10 btn-primary btn-rounded w-100"
                            defaultValue="Checkout"
                            type="submit"
                          />
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="menu">
            <div className="container">
              {/* Navbar */}
              <nav className="navbar navbar-expand-lg navbar-light d-sm-none d-xs-none d-lg-block navbar-full">
                {/* Navbar brand */}
                <a className="navbar-brand text-uppercase d-none" href="#">
                  Navbar
                </a>
                {/* Collapse button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent2"
                  aria-controls="navbarSupportedContent2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                {/* Collapsible content */}
                <div className="collapse navbar-collapse">
                  {/* Links */}
                  <ul className="navbar-nav m-auto justify-content-center">
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        href="category.html"
                      >
                        Home
                        <span className="sr-only">(current)</span>{" "}
                      </a>
                      <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                        <div className="sub-menu mb-xl-0 mb-4">
                          <ul className="list-unstyled">
                            <li>
                              <a className="menu-item pl-0" href="index.html">
                                Home 1{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index2.html">
                                Home 2{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index3.html">
                                Home 3{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index4.html">
                                Home 4{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index5.html">
                                Home 5{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown mega-dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        href="category.html"
                      >
                        Category
                      </a>
                      <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                        <div className="row">
                          <div className="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                            <h6 className="sub-title text-uppercase font-weight-bold white-text">
                              Variation 1
                            </h6>
                            {/*Featured image*/}
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="filter-toggle.html"
                                >
                                  filter toggle{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="off-canvas-left.html"
                                >
                                  off canvas left{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="off-canvas-right.html"
                                >
                                  off canvas right{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                            <h6 className="sub-title text-uppercase font-weight-bold white-text">
                              Variation 2
                            </h6>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-5-col.html"
                                >
                                  5 columns mode{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-6-col.html"
                                >
                                  6 columns mode{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-7-col.html"
                                >
                                  7 columns mode{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-8-col.html"
                                >
                                  8 columns mode{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-xl-4 sub-menu mb-0">
                            <ul className="list-unstyled">
                              <li>
                                <span className="menu-banner">
                                  <img
                                    src="lib/img/banner/menu-banner.jpg"
                                    alt="menu-banner"
                                    width={161}
                                    height={230}
                                  />
                                </span>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        href="category.html"
                      >
                        Shop
                        <span className="sr-only">(current)</span>{" "}
                      </a>
                      <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                        <div className="sub-menu mb-xl-0 mb-4">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-grid.html"
                              >
                                product grid{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-sticky-right.html"
                              >
                                sticky right{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-extended-layout.html"
                              >
                                Extended layout{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-details.html"
                              >
                                Default layout{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-compact.html"
                              >
                                compact layout{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        href="category.html"
                      >
                        Blog
                      </a>
                      <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                        <div className="sub-menu">
                          <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                            Featured
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-2-column.html"
                              >
                                blog 2 column{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-3-column.html"
                              >
                                blog 3 column{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-2-column-masonary.html"
                              >
                                blog masonary{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-list.html"
                              >
                                blog list{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-details.html"
                              >
                                blog details{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        href="category.html"
                      >
                        Pages
                      </a>
                      <div className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3">
                        <div className="sub-menu">
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="about-us.html"
                              >
                                About us{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="accordions.html"
                              >
                                Accordions{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="buttons.html">
                                Buttons{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-uppercase"
                        href="contact-us.html"
                      >
                        contact us
                      </a>{" "}
                    </li>
                  </ul>
                  {/* Links */}
                </div>
                {/* Collapsible content */}
              </nav>
              {/* Navbar */}
              <nav className="navbar navbar-expand-lg navbar-light d-lg-none navbar-responsive">
                {/* Navbar brand */}
                <a className="navbar-brand text-uppercase d-none" href="#">
                  Navbar
                </a>
                {/* Collapse button */}
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent2"
                  aria-controls="navbarSupportedContent2"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="material-icons">sort</i>
                  </span>
                </button>
                {/* Collapsible content */}
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent2"
                >
                  {/* Links */}
                  <ul className="navbar-nav m-auto justify-content-center">
                    {/* Features */}
                    <li className="nav-item dropdown active">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        data-toggle="collapse"
                        data-target="#menu1"
                        aria-controls="menu1"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="#"
                      >
                        Home
                        <span className="sr-only">(current)</span>{" "}
                      </a>
                      <div
                        className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                        id="menu1"
                      >
                        <div className="sub-menu mb-xl-0 mb-4">
                          <ul className="list-unstyled">
                            <li>
                              <a className="menu-item pl-0" href="index.html">
                                Home 1{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index2.html">
                                Home 2{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index3.html">
                                Home 3{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index4.html">
                                Home 4{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="index5.html">
                                Home 5{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown mega-dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        data-toggle="collapse"
                        data-target="#menu3"
                        aria-controls="menu3"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="#"
                      >
                        Category
                      </a>
                      <div
                        className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                        id="menu3"
                      >
                        <div className="row">
                          <div className="col-md-12 col-xl-4 sub-menu mb-xl-0 mb-4">
                            <h6 className="sub-title text-uppercase font-weight-bold white-text">
                              Variation 1
                            </h6>
                            {/*Featured image*/}
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="filter-toggle.html"
                                >
                                  filter toggle{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="off-canvas-left.html"
                                >
                                  off canvas left{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="off-canvas-right.html"
                                >
                                  off canvas right{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-xl-4 sub-menu mb-md-0 mb-4">
                            <h6 className="sub-title text-uppercase font-weight-bold white-text">
                              Variation 2
                            </h6>
                            <ul className="list-unstyled">
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-5-col.html"
                                >
                                  grid 5 column{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-6-col.html"
                                >
                                  grid 6 column{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-7-col.html"
                                >
                                  grid 7 column{" "}
                                </a>{" "}
                              </li>
                              <li>
                                <a
                                  className="menu-item pl-0"
                                  href="category-8-col.html"
                                >
                                  grid 8 column{" "}
                                </a>{" "}
                              </li>
                            </ul>
                          </div>
                          <div className="col-md-6 col-xl-4 sub-menu mb-0">
                            <ul className="list-unstyled">
                              <li>
                                <span className="menu-banner">
                                  <img
                                    src="lib/img/banner/menu-banner.jpg"
                                    alt="menu-banner"
                                    width={210}
                                    height={300}
                                  />
                                </span>{" "}
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        data-toggle="collapse"
                        data-target="#menu2"
                        aria-controls="menu2"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="#"
                      >
                        Shop
                        <span className="sr-only">(current)</span>{" "}
                      </a>
                      <div
                        className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                        id="menu2"
                      >
                        <div className="sub-menu mb-xl-0 mb-4">
                          <h6 className="sub-title text-uppercase font-weight-bold white-text">
                            Featured
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-grid.html"
                              >
                                product grid{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-sticky-right.html"
                              >
                                sticky right{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-extended-layout.html"
                              >
                                Extended layout{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-details.html"
                              >
                                Default layout{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="product-compact.html"
                              >
                                compact layout{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    {/* Technology */}
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        data-toggle="collapse"
                        data-target="#menu4"
                        aria-controls="menu4"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="#"
                      >
                        Blog
                      </a>
                      <div
                        className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                        id="menu4"
                      >
                        <div className="sub-menu">
                          <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                            Featured
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-2-column.html"
                              >
                                blog 2 column{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-3-column.html"
                              >
                                blog 3 column{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-2-column-masonary.html"
                              >
                                blog masonary{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-list.html"
                              >
                                blog list{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="blog-details.html"
                              >
                                blog details{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link text-uppercase"
                        href="contact-us.html"
                      >
                        contact us
                      </a>{" "}
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-uppercase"
                        data-toggle="collapse"
                        data-target="#menu5"
                        aria-controls="menu5"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        href="#"
                      >
                        Pages
                      </a>
                      <div
                        className="dropdown-menu mega-menu v-2 z-depth-1 special-color py-3 px-3"
                        id="menu5"
                      >
                        <div className="sub-menu">
                          <h6 className="sub-title text-uppercase font-weight-bold white-text d-none">
                            Featured
                          </h6>
                          <ul className="list-unstyled">
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="about-us.html"
                              >
                                About us{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a
                                className="menu-item pl-0"
                                href="accordions.html"
                              >
                                Accordions{" "}
                              </a>{" "}
                            </li>
                            <li>
                              <a className="menu-item pl-0" href="buttons.html">
                                Buttons{" "}
                              </a>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                  {/* Links */}
                </div>
                {/* Collapsible content */}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
