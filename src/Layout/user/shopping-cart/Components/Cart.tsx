import React from 'react';

const Cart = () => {
    return (
        <React.Fragment>
            <div className="cart-area table-area pt-110 pb-95 float-left w-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12 col-sm-12 float-left cart-wrapper">
        <div className="table-responsive">
          <table className="table product-table text-center">
            <thead>
              <tr>
                <th className="table-remove text-capitalize">remove</th>
                <th className="table-image text-capitalize">image</th>
                <th className="table-p-name text-capitalize">product</th>
                <th className="table-p-price text-capitalize">price</th>
                <th className="table-p-qty text-capitalize">quantity</th>
                <th className="table-total text-capitalize">total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-remove"><button><i className="material-icons">delete</i></button></td>
                <td className="table-image"><a href="product-details.html"><img src="lib/img/products/02.jpg"  /></a></td>
                <td className="table-p-name text-capitalize"><a href="product-details.html">aspetur
                    autodit autfugit</a></td>
                <td className="table-p-price">
                  <p>$100.00</p>
                </td>
                <td className="table-p-qty"><input defaultValue={1} name="cart-qty" type="number" /></td>
                <td className="table-total">
                  <p>$100.00</p>
                </td>
              </tr>
              <tr>
                <td className="table-remove"><button><i className="material-icons">delete</i></button></td>
                <td className="table-image"><a href="product-details.html"><img src="lib/img/products/03.jpg"  /></a></td>
                <td className="table-p-name text-capitalize"><a href="product-details.html">magni
                    dolores eosquies</a></td>
                <td className="table-p-price">
                  <p>$100.00</p>
                </td>
                <td className="table-p-qty"><input defaultValue={1} name="cart-qty" type="number" /></td>
                <td className="table-total">
                  <p>$100.00</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-bottom-wrapper">
          <div className="table-coupon d-flex d-xs-block d-lg-flex d-sm-flex fix justify-content-start float-left">
            <input type="text" placeholder="Coupon code" />
            <button type="submit" className="btn-primary btn">Apply coupon</button>
          </div>
          <div className="table-update d-flex d-xs-block d-lg-flex d-sm-flex justify-content-end">
            <button type="button" className="btn-primary btn">Update cart</button>
          </div>
        </div>
      </div>
      <div className="table-total-wrapper d-flex justify-content-end pt-60 col-md-12 col-sm-12 col-lg-4 float-left  align-items-center">
        <div className="table-total-content">
          <h2 className="pb-20">Cart totals</h2>
          <div className="table-total-amount">
            <div className="single-total-content d-flex justify-content-between float-left w-100">
              <strong>Subtotal</strong>
              <span className="c-total-price">$160.00</span>
            </div>
            <div className="single-total-content d-flex justify-content-between float-left w-100">
              <strong>Shipping</strong>
              <span className="c-total-price"><span>Flat Rate:</span> $5.00</span>
            </div>
            <div className="single-total-content d-flex justify-content-end float-left w-100">
              <a href="#">Calculate shipping</a>
            </div>
            <div className="single-total-content tt-total d-flex justify-content-between float-left w-100">
              <strong>Total</strong>
              <span className="c-total-price">$165.00</span>
            </div>
            <a href="checkout_page.html" className="btn btn-primary float-left w-100 text-center">Proceed to
              checkout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    );
};

export default Cart;