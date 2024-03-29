import React from 'react';

const ProductDetail = () => {
    return (
        <React.Fragment>
           <div className="product-deatils-section float-left w-100">
        <div className="container">
          <div className="row">
            <div className="product-deatils-section float-left w-100">
              <div className="container">
                <div className="row">
                  <div className="left-columm col-lg-5 col-md-5">
                    <div className="product-large-image tab-content">
                      <div
                        className="tab-pane active"
                        id="product-01"
                        role="tabpanel"
                        aria-labelledby="product-tab-01"
                      >
                        <div className="single-img img-full">
                          <a href="lib/img/products/01.jpg">
                            <img
                              src="lib/img/products/01.jpg"
                              className="img-fluid zoomImg"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="product-02"
                        role="tabpanel"
                        aria-labelledby="product-tab-02"
                      >
                        <div className="single-img">
                          <a href="lib/img/products/02.jpg">
                            <img
                              src="lib/img/products/02.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="product-03"
                        role="tabpanel"
                        aria-labelledby="product-tab-03"
                      >
                        <div className="single-img">
                          <a href="lib/img/products/03.jpg">
                            <img
                              src="lib/img/products/03.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="product-04"
                        role="tabpanel"
                        aria-labelledby="product-tab-04"
                      >
                        <div className="single-img">
                          <a href="lib/img/products/04.jpg">
                            <img
                              src="lib/img/products/04.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane"
                        id="product-05"
                        role="tabpanel"
                        aria-labelledby="product-tab-05"
                      >
                        <div className="single-img">
                          <a href="lib/img/products/05.jpg">
                            <img
                              src="lib/img/products/05.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="default small-image-list float-left w-100">
                      <div
                        className="nav-add small-image-slider-single-product-tabstyle-3 owl-carousel"
                        role="tablist"
                      >
                        <div className="single-small-image img-full">
                          <a
                            data-toggle="tab"
                            id="product-tab-01"
                            href="#product-01"
                            className="img active"
                          >
                            <img
                              src="lib/img/products/01.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="single-small-image img-full">
                          <a
                            data-toggle="tab"
                            id="product-tab-02"
                            href="#product-02"
                            className="img"
                          >
                            <img
                              src="lib/img/products/02.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="single-small-image img-full">
                          <a
                            data-toggle="tab"
                            id="product-tab-03"
                            href="#product-03"
                            className="img"
                          >
                            <img
                              src="lib/img/products/03.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="single-small-image img-full">
                          <a
                            data-toggle="tab"
                            id="product-tab-04"
                            href="#product-04"
                            className="img"
                          >
                            <img
                              src="lib/img/products/04.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                        <div className="single-small-image img-full">
                          <a
                            data-toggle="tab"
                            id="product-tab-05"
                            href="#product-05"
                            className="img"
                          >
                            <img
                              src="lib/img/products/05.jpg"
                              className="img-fluid"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Phần bên phải để mua */}
                  <div className="right-columm col-lg-7 col-md-7">
                    <div className="product-information">
                      <h4 className="product-title text-capitalize float-left w-100">
                        <a
                          href="product-details.html"
                          className="float-left w-100"
                        >
                          aliquam quaerat voluptatem
                        </a>
                      </h4>
                      <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec quis viverra purus, non viverra nulla. Sed
                        vehicula libero eu lectus eleifend volutpat. Sed et
                        placerat arcu. Proin mi leo, interdum eu tortor at,
                        euismod gravida velit. Fusce non enim lectus. Duis
                        euismod, lorem vitae pharetra rhoncus, ligula risus
                        elementum nunc, at interdum eros nunc eget augue. Donec
                        dapibus nec diam ut tempor. Duis malesuada neque turpis,
                        ut congue ipsum euismod eget. Sed egestas ipsum enim,
                        sed semper magna auctor non.
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
                          </span>
                        </div>
                        <a href="#" className="review-down">
                          (customer reviews)
                        </a>
                      </div>
                      <div className="price float-left w-100 d-flex">
                        <div className="regular-price">$100.00</div>
                        <div className="old-price">$150.00</div>
                      </div>
                      <div className="product-variants float-left w-100">
                        <div className="col-md-3 col-sm-6 col-xs-12 size-options d-flex align-items-center">
                          <h5>Size:</h5>
                          <select className="form-control" name="select">
                            <option value="none" selected>
                              Size
                            </option>
                            <option value="black">Medium</option>
                            <option value="white">Large</option>
                            <option value="gold">Small</option>
                            <option value="rose gold">Extra large</option>
                          </select>
                        </div>
                        <div className="color-option d-flex align-items-center">
                          <h5>color :</h5>
                          <ul className="color-categories">
                            <li className="active">
                              <a className="tt-pink" href="#" title="Pink" />
                            </li>
                            <li>
                              <a className="tt-blue" href="#" title="Blue" />
                            </li>
                            <li>
                              <a
                                className="tt-yellow"
                                href="#"
                                title="Yellow"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="btn-cart d-flex align-items-center float-left w-100">
                        <h5>qty:</h5>
                        <input defaultValue={1} type="number" />
                        <button
                          type="button"
                          className="btn btn-primary btn-cart m-0"
                          data-target="#cart-pop"
                          data-toggle="modal"
                        >
                          <i className="material-icons">shopping_cart</i> Add To
                          Cart
                        </button>
                      </div>
                      <div className="tt-links d-flex align-items-center float-left w-100 mb-15">
                        <a className="link btn-compare">
                          <i className="material-icons">equalizer</i>
                          <span>Compare</span>
                        </a>
                        <a href="wishlist.html" className="link btn-wishlist">
                          <i className="material-icons">favorite</i>
                          <span>wishlist</span>
                        </a>
                      </div>
                      <div className="social-sharing float-left w-100">
                        <ul className="d-flex">
                          <li className="facebook">
                            <a
                              href="#"
                              target="_blank"
                              className="facebook_link"
                            >
                              <svg
                                className="svg-icon"
                                viewBox="0 0 20 20"
                                width="30px"
                                height="30px"
                              >
                                <path
                                  fill="#666"
                                  d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li className="twitter">
                            <a
                              href="#"
                              target="_blank"
                              className="twitter_link"
                            >
                              <svg
                                className="svg-icon"
                                viewBox="0 0 20 20"
                                width="30px"
                                height="30px"
                              >
                                <path
                                  fill="#666"
                                  d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"
                                />
                              </svg>
                            </a>
                          </li>
                          <li className="google">
                            <a href="#" target="_blank" className="google_link">
                              <svg
                                className="svg-icon"
                                viewBox="0 0 20 20"
                                width="30px"
                                height="30px"
                              >
                                <path
                                  fill="#666"
                                  d="M8.937,10.603c-0.383-0.284-0.741-0.706-0.754-0.837c0-0.223,0-0.326,0.526-0.758c0.684-0.56,1.062-1.297,1.062-2.076c0-0.672-0.188-1.273-0.512-1.71h0.286l1.58-1.196h-4.28c-1.717,0-3.222,1.348-3.222,2.885c0,1.587,1.162,2.794,2.726,2.858c-0.024,0.113-0.037,0.225-0.037,0.334c0,0.229,0.052,0.448,0.157,0.659c-1.938,0.013-3.569,1.309-3.569,2.84c0,1.375,1.571,2.373,3.735,2.373c2.338,0,3.599-1.463,3.599-2.84C10.233,11.99,9.882,11.303,8.937,10.603 M5.443,6.864C5.371,6.291,5.491,5.761,5.766,5.444c0.167-0.192,0.383-0.293,0.623-0.293l0,0h0.028c0.717,0.022,1.405,0.871,1.532,1.89c0.073,0.583-0.052,1.127-0.333,1.451c-0.167,0.192-0.378,0.293-0.64,0.292h0C6.273,8.765,5.571,7.883,5.443,6.864 M6.628,14.786c-1.066,0-1.902-0.687-1.902-1.562c0-0.803,0.978-1.508,2.093-1.508l0,0l0,0h0.029c0.241,0.003,0.474,0.04,0.695,0.109l0.221,0.158c0.567,0.405,0.866,0.634,0.956,1.003c0.022,0.097,0.033,0.194,0.033,0.291C8.752,14.278,8.038,14.786,6.628,14.786 M14.85,4.765h-1.493v2.242h-2.249v1.495h2.249v2.233h1.493V8.502h2.252V7.007H14.85V4.765z"
                                />
                              </svg>
                            </a>
                          </li>
                          <li className="pinterest">
                            <a
                              href="#"
                              target="_blank"
                              className="pinterest_link"
                            >
                              <svg
                                className="svg-icon"
                                viewBox="0 0 20 20"
                                width="30px"
                                height="30px"
                              >
                                <path
                                  fill="#666"
                                  d="M9.797,2.214C9.466,2.256,9.134,2.297,8.802,2.338C8.178,2.493,7.498,2.64,6.993,2.935C5.646,3.723,4.712,4.643,4.087,6.139C3.985,6.381,3.982,6.615,3.909,6.884c-0.48,1.744,0.37,3.548,1.402,4.173c0.198,0.119,0.649,0.332,0.815,0.049c0.092-0.156,0.071-0.364,0.128-0.546c0.037-0.12,0.154-0.347,0.127-0.496c-0.046-0.255-0.319-0.416-0.434-0.62C5.715,9.027,5.703,8.658,5.59,8.101c0.009-0.075,0.017-0.149,0.026-0.224C5.65,7.254,5.755,6.805,5.948,6.362c0.564-1.301,1.47-2.025,2.931-2.458c0.327-0.097,1.25-0.252,1.734-0.149c0.289,0.05,0.577,0.099,0.866,0.149c1.048,0.33,1.811,0.938,2.218,1.888c0.256,0.591,0.33,1.725,0.154,2.483c-0.085,0.36-0.072,0.667-0.179,0.993c-0.397,1.206-0.979,2.323-2.295,2.633c-0.868,0.205-1.519-0.324-1.733-0.869c-0.06-0.151-0.161-0.418-0.101-0.671c0.229-0.978,0.56-1.854,0.815-2.831c0.243-0.931-0.218-1.665-0.943-1.837C8.513,5.478,7.816,6.312,7.579,6.858C7.39,7.292,7.276,8.093,7.426,8.672c0.047,0.183,0.269,0.674,0.23,0.844c-0.174,0.755-0.372,1.568-0.587,2.31c-0.223,0.771-0.344,1.562-0.56,2.311c-0.1,0.342-0.096,0.709-0.179,1.066v0.521c-0.075,0.33-0.019,0.916,0.051,1.242c0.045,0.209-0.027,0.467,0.076,0.621c0.002,0.111,0.017,0.135,0.052,0.199c0.319-0.01,0.758-0.848,0.917-1.094c0.304-0.467,0.584-0.967,0.816-1.514c0.208-0.494,0.241-1.039,0.408-1.566c0.12-0.379,0.292-0.824,0.331-1.24h0.025c0.066,0.229,0.306,0.395,0.485,0.52c0.56,0.4,1.525,0.77,2.573,0.523c1.188-0.281,2.133-0.838,2.755-1.664c0.457-0.609,0.804-1.313,1.07-2.112c0.131-0.392,0.158-0.826,0.256-1.241c0.241-1.043-0.082-2.298-0.384-2.981C14.847,3.35,12.902,2.17,9.797,2.214"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phần giới thiệu sản phẩm và comment */}
      <div className="product-tab-area float-left w-100">
  <div className="container">
    <div className="tabs">
      <ul className="nav nav-tabs justify-content-start">
        <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#product-tab1" id="tab1">
            <div className="tab-title">Description</div>
          </a></li>
        <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#product-tab2" id="tab2">
            <div className="tab-title">Reviews (2)</div>
          </a></li>
      </ul>
    </div>
    <div className="tab-content float-left w-100">
      <div className="tab-pane active" id="product-tab1" role="tabpanel" aria-labelledby="tab1">
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis viverra purus, non viverra
          nulla. Sed vehicula libero eu lectus eleifend volutpat. Sed et placerat arcu. Proin mi leo,
          interdum eu tortor at, euismod gravida velit. Fusce non enim lectus. Duis euismod, lorem vitae
          pharetra rhoncus, ligula risus elementum nunc, at interdum eros nunc eget augue. Donec dapibus
          nec diam ut tempor. Duis malesuada neque turpis, ut congue ipsum euismod eget. Sed egestas ipsum
          enim, sed semper magna auctor non. Praesent risus nunc, ultricies vel velit nec, fringilla
          venenatis sem. Nunc condimentum, elit sed posuere accumsan, mauris nisl ornare metus, nec
          hendrerit quam velit ut nibh. Vivamus sodales neque vel sodales porta. Mauris hendrerit felis in
          mi auctor posuere. Mauris a consequat sapien, eget condimentum risus. Curabitur iaculis lorem
          non pretium varius. In hac habitasse platea dictumst.
        </div>
      </div>
      <div className="tab-pane" id="product-tab2" role="tabpanel" aria-labelledby="tab2">
        <div className="reviews-tab  float-left w-100">
          <div className="ttreview-tab float-left w-100 p-30">
            <h2>Customer Reviews</h2>
            <div className="rating float-left w-100">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="review-title float-left w-100"><span className="user">admin</span> <span className="date">– February 14, 2019</span></div>
            <div className="review-desc  float-left w-100">Aliquam at ipsum tellus. Donec arcu est, posuere
              quis orci vel, commodo cursus augue. </div>
          </div>
          <form action="#" className="rating-form float-left w-100">
            <h5>Add your rating</h5>
            <div className="rating">
              <div className="rating-stars text-left">
                <ul id="stars">
                  <li className="star" title="Poor" data-value={1}>
                    <i className="material-icons">star</i>
                  </li>
                  <li className="star" title="Fair" data-value={2}>
                    <i className="material-icons">star</i>
                  </li>
                  <li className="star" title="Good" data-value={3}>
                    <i className="material-icons">star</i>
                  </li>
                  <li className="star" title="Excellent" data-value={4}>
                    <i className="material-icons">star</i>
                  </li>
                  <li className="star" title="WOW!!!" data-value={5}>
                    <i className="material-icons">star</i>
                  </li>
                </ul>
              </div>
              <div className="success-box">
                <div className="clearfix" />
                <div className="text-message text-success" />
                <div className="clearfix" />
              </div>
            </div>
            <div className="row d-block">
              <div className="col-sm-6 float-left form-group">
                <label>Name <span className="required">*</span></label>
                <input type="text"  required />
              </div>
              <div className="col-sm-6 float-left form-group">
                <label>Email <span className="required">*</span></label>
                <input type="email"  id="r-email" required />
              </div>
              <div className="col-sm-12 float-left form-group">
                <label htmlFor="r-textarea">Your Review</label>
                <textarea name="review" id="r-textarea" cols={30} rows={10} className="w-100" defaultValue={""} />
              </div>
            </div>
            <input type="submit" className="btn btn-primary submit" defaultValue="Submit Review" />
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
      </React.Fragment>
    );
};

export default ProductDetail;