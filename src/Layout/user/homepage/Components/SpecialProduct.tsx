import React from "react";

const SpecialProduct = () => {
  return (
    <React.Fragment>
      <div>
        <div
          id="ttspecial"
          className="ttspecial my-40 bottom-to-top hb-animate-element"
        >
          <div className="container">
            <div className="row">
              <div className="tt-title d-inline-block float-none w-100 text-center">
                special products
              </div>
              <div className="ttspecial-content products grid owl-carousel">
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/01.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/02.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />{" "}
                      </a>
                      <ul className="countdown3 countdown">
                        <li>
                          <span className="days">00</span>
                          <p className="days_text">Days</p>
                        </li>
                        <li>
                          <span className="hours">00</span>
                          <p className="hours_text">Hours</p>
                        </li>
                        <li>
                          <span className="minutes">00</span>
                          <p className="minutes_text">Minutes</p>
                        </li>
                        <li>
                          <span className="seconds">00</span>
                          <p className="seconds_text">Seconds</p>
                        </li>
                      </ul>
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Checked Polo Collar T-shirt
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/02.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/03.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />
                      </a>
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Crochet Detail Lightweight Top
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/03.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/04.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />
                      </a>
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Girls Floral Print Jumpsuit
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/04.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/05.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />
                      </a>
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Girls Striped Fit and Flare Dress
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>{" "}
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/05.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/06.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />{" "}
                      </a>{" "}
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Juventus Henley Neck Jersey
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-layouts">
                  <div className="product-thumb">
                    <div className="image zoom">
                      <a href="#">
                        <img
                          src="lib/img/products/06.jpg"
                          height={501}
                          width={385}
                        />
                        <img
                          src="lib/img/products/07.jpg"
                          className="second_image img-responsive"
                          height={501}
                          width={385}
                        />
                      </a>
                    </div>
                    <div className="thumb-description">
                      <div className="caption">
                        <h4 className="product-title text-capitalize">
                          <a href="product-details.html">
                            Printed Dugaree with T-Shirt
                          </a>
                        </h4>
                      </div>
                      <div className="rating">
                        <div className="product-ratings d-inline-block align-middle">
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>
                          <span className="fa fa-stack">
                            <i className="material-icons off">star</i>
                          </span>{" "}
                        </div>
                      </div>
                      <div className="price">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="button-wrapper">
                        <div className="button-group text-center">
                          <button
                            type="button"
                            className="btn btn-primary btn-cart"
                            data-target="#cart-pop"
                            data-toggle="modal"
                          >
                            <i className="material-icons">shopping_cart</i>
                            <span>Add to cart</span>
                          </button>
                          <a
                            href="wishlist.html"
                            className="btn btn-primary btn-wishlist"
                          >
                            <i className="material-icons">favorite</i>
                            <span>wishlist</span>
                          </a>
                          <button
                            type="button"
                            className="btn btn-primary btn-compare"
                          >
                            <i className="material-icons">equalizer</i>
                            <span>Compare</span>
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-quickview"
                            data-toggle="modal"
                            data-target="#product_view"
                          >
                            <i className="material-icons">visibility</i>
                            <span>Quick View</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="ttsmartblog"
          className="my-40 my-sm-25 bottom-to-top hb-animate-element"
        >
        </div>
        <div
          id="ttbrandlogo"
          className="my-40 my-sm-25 bottom-to-top hb-animate-element"
        >
          <div className="container">
            <div className="tt-brand owl-carousel">
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-01.png"
                    alt="brand-logo-01"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-02.png"
                    alt="brand-logo-02"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-03.png"
                    alt="brand-logo-03"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-04.png"
                    alt="brand-logo-04"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-05.png"
                    alt="brand-logo-05"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
              <div className="item">
                <a href="#">
                  <img
                    src="lib/img/logos/brand-logo-06.png"
                    alt="brand-logo-06"
                    width={140}
                    height={100}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SpecialProduct;
