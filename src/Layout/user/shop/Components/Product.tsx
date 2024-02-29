import React from 'react';

const Product = () => {
    return (
        <React.Fragment>
            		<div className="tab-content text-center products w-100 float-left category-col-5">
  <div className="tab-pane grid fade active" id="grid" role="tabpanel">
    <div className="row">
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/01.jpg"  />
              <img src="lib/img/products/02.jpg"  className="second_image img-responsive" /> </a>
            <ul className="countdown countdown1">
              <li><span className="days">00</span>
                <p className="days_text">Days</p>
              </li>
              <li><span className="hours">00</span>
                <p className="hours_text">Hours</p>
              </li>
              <li><span className="minutes">00</span>
                <p className="minutes_text">Minutes</p>
              </li>
              <li><span className="seconds">00</span>
                <p className="seconds_text">Seconds</p>
              </li>
            </ul>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">aliquam quaerat voluptatem</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal" disabled><i className="material-icons">shopping_cart</i><span>Out of
                    stock</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/02.jpg"  />
              <img src="lib/img/products/03.jpg"  className="second_image img-responsive" /> </a>
            <ul className="countdown countdown2">
              <li><span className="days">00</span>
                <p className="days_text">Days</p>
              </li>
              <li><span className="hours">00</span>
                <p className="hours_text">Hours</p>
              </li>
              <li><span className="minutes">00</span>
                <p className="minutes_text">Minutes</p>
              </li>
              <li><span className="seconds">00</span>
                <p className="seconds_text">Seconds</p>
              </li>
            </ul>
            <div className="flags">
              <div className="sale">sale</div>
              <div className="new">new</div>
            </div>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize w-100 float-left"><a href="product-details.html">aspetur autodit autfugit</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/03.jpg" />
              <img src="lib/img/products/04.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">magni dolores eosquies</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/04.jpg"  />
              <img src="lib/img/products/05.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize w-100 float-left"><a href="product-details.html">voluptas nulla pariatur</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/05.jpg"  />
              <img src="lib/img/products/06.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">aliquam quat voluptatem</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/06.jpg"  />
              <img src="lib/img/products/07.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">voluptas sit aspernatur</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/07.jpg"  />
              <img src="lib/img/products/08.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">similique suntin culpaqui</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>out of
                    stock</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-layouts col-lg-3 col-md-3 col-sm-6 col-xs-6">
        <div className="product-thumb">
          <div className="image zoom">
            <a href="product-details.html">
              <img src="lib/img/products/08.jpg"  />
              <img src="lib/img/products/09.jpg"  className="second_image img-responsive" /> </a>
          </div>
          <div className="thumb-description">
            <div className="caption">
              <h4 className="product-title text-capitalize"><a href="product-details.html">suscipit laboriosam nisi</a></h4>
            </div>
            <div className="rating">
              <div className="product-ratings d-inline-block align-middle">
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
                <span className="fa fa-stack"><i className="material-icons off">star</i></span>
              </div>
            </div>
            <div className="price">
              <div className="regular-price">$100.00</div>
              <div className="old-price">$150.00</div>
            </div>
            <div className="button-wrapper">
              <div className="button-group text-center">
                <button type="button" className="btn btn-primary btn-cart" data-target="#cart-pop" data-toggle="modal"><i className="material-icons">shopping_cart</i><span>Add to
                    cart</span></button>
                <a href="wishlist.html" className="btn btn-primary btn-wishlist"><i className="material-icons">favorite</i><span>wishlist</span></a>
                <button type="button" className="btn btn-primary btn-compare"><i className="material-icons">equalizer</i><span>Compare</span></button>
                <button type="button" className="btn btn-primary btn-quickview" data-toggle="modal" data-target="#product_view"><i className="material-icons">visibility</i><span>Quick
                    View</span></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>


        {/* // Phần phân trang */}
        <div className="pagination-wrapper float-left w-100">
  <p>Showing 1 to 9 of 11 (2 Pages)</p>
  <nav aria-label="Page navigation example">
    <ul className="pagination">
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">«</span>
          <span className="sr-only">Previous</span>
        </a>
      </li>
      <li className="page-item active"><a className="page-link" href="#">1</a></li>
      <li className="page-item"><a className="page-link" href="#">2</a></li>
      <li className="page-item"><a className="page-link" href="#">3</a></li>
      <li className="page-item">
        <a className="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">»</span>
          <span className="sr-only">Next</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

        </React.Fragment>
    );
};

export default Product;