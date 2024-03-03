import React from "react";

const CartAndFromCheckOut = () => {
  return (
    <React.Fragment>
      <div className="checkout-inner float-left w-100">
        <div className="container">
          <div className="row">
            <div className="cart-block-left col-md-4 order-md-2 mb-4">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span>Your cart</span>
              </h4>
              <div className="list-group mb-3">
                <div className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">aliquam quaerat voluptatem</h6>
                  </div>
                  <span className="text-muted">$20</span>
                </div>
                <div className="list-group-item d-flex justify-content-between lh-condensed">
                  <div>
                    <h6 className="my-0">voluptas sit aspernatur</h6>
                  </div>
                  <span className="text-muted">$20</span>
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">-$5</span>
                </div>
                <div className="list-group-item d-flex justify-content-between">
                  <strong>Total (USD)</strong>
                  <strong>$35</strong>
                </div>
                <div className="list-group-item  justify-content-between">
                  <div
                    className="custom-control custom-radio"
                    id="checkbox-card"
                  >
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div
                    className="custom-control custom-radio"
                    id="checkbox-card-debit"
                  >
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div
                    className="custom-control custom-radio"
                    id="checkbox-card-paypal"
                  >
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="custom-control-input"
                      required
                    />
                    <label className="custom-control-label" htmlFor="paypal">
                      Paypal
                    </label>
                  </div>
                </div>
                <div id="card-dropdown">
                  <div className="list-group-item  justify-content-between">
                    <div className="col-md-12 mb-3 p-0">
                      <label htmlFor="cc-name">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-12 p-0">
                      <label htmlFor="cc-number">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-expiration">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="card-dropdown-debit">
                  <div className="list-group-item  justify-content-between">
                    <div className="col-md-12 mb-3 p-0">
                      <label htmlFor="cc-name">Name on card</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-name"
                        
                        required
                      />
                      <small className="text-muted">
                        Full name as displayed on card
                      </small>
                      <div className="invalid-feedback">
                        Name on card is required
                      </div>
                    </div>
                    <div className="col-md-12 p-0">
                      <label htmlFor="cc-number">Credit card number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="cc-number"
                        
                        required
                      />
                      <div className="invalid-feedback">
                        Credit card number is required
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item d-flex justify-content-between">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-expiration"
                          
                          required
                        />
                        <div className="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-expiration">CVV</label>
                        <input
                          type="text"
                          className="form-control"
                          id="cc-cvv"
                          
                          required
                        />
                        <div className="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="card-dropdown-paypal">
                  <div className="list-group-item  justify-content-between">
                    <div className="image">
                      <img src="img/logos/paypal.png" />
                    </div>
                  </div>
                </div>
                <a
                  href="order-confirmation.html"
                  className="btn btn-primary btn-lg btn-primary"
                >
                  Place an order
                </a>
         {/* <form className="card p-2">
  <div className="input-group">
    <input type="text" className="form-control" placeholder="Promo code" />
    <div className="input-group-append">
      <button type="submit" className="btn btn-secondary btn-primary">Redeem</button>
    </div>
  </div>
</form> */}

              </div>
            </div>
            <div className="cart-block-right col-md-8 order-md-1">
              <h4 className="mb-3">Billing address</h4>
              <form className="needs-validation" noValidate>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="firstName">
                      First name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="lastName">
                      Last name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="username">
                    Username <span className="required">*</span>
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      placeholder="Username"
                      required
                    />
                    <div className="invalid-feedback" style={{ width: "100%" }}>
                      Your username is required.
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">
                    Email <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="you@example.com"
                  />
                  <div className="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address">
                    Address<span className="required">*</span>{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="1234 Main St"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your shipping address.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="address2">
                    Address 2 <span className="text-muted">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address2"
                    placeholder="Apartment or suite"
                  />
                </div>
                <div className="row">
                  <div className="col-md-5 mb-3">
                    <label htmlFor="country">
                      Country <span className="required">*</span>
                    </label>
                    <select
                      className="custom-select d-block w-100"
                      id="country"
                      required
                    >
                      <option >Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label htmlFor="state">
                      State <span className="required">*</span>
                    </label>
                    <select
                      className="custom-select d-block w-100"
                      id="state"
                      required
                    >
                      <option >Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3 mb-3">
                    <label htmlFor="zip">
                      Zip <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="mb-4" />
                <div
                  className="custom-control custom-checkbox"
                  id="same-address-main"
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="same-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="same-address"
                  >
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div id="checkout-shipping-address">
                  <address>
                    John duff <br />
                    ABCD Street Name, City, vancouver <br />
                    canada <br />
                    (123) 456-7890
                  </address>
                </div>
                <div
                  className="custom-control custom-checkbox"
                  id="different-address-main"
                >
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="different-address"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="different-address"
                  >
                    ship to a different address?
                  </label>
                </div>
                <div id="checkout-shipping-address-diff">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstName">
                        First name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid first name is required.
                      </div>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="lastName">
                        Last name <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        required
                      />
                      <div className="invalid-feedback">
                        Valid last name is required.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="username">
                      Username <span className="required">*</span>
                    </label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />
                      <div
                        className="invalid-feedback"
                        style={{ width: "100%" }}
                      >
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address">
                      Address<span className="required">*</span>{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address2">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-5 mb-3">
                      <label htmlFor="country">
                        Country <span className="required">*</span>
                      </label>
                      <select
                        className="custom-select d-block w-100"
                        id="country"
                        required
                      >
                        <option >Choose...</option>
                        <option>United States</option>
                      </select>
                      <div className="invalid-feedback">
                        Please select a valid country.
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <label htmlFor="state">
                        State <span className="required">*</span>
                      </label>
                      <select
                        className="custom-select d-block w-100"
                        id="state"
                        required
                      >
                        <option >Choose...</option>
                        <option>California</option>
                      </select>
                      <div className="invalid-feedback">
                        Please provide a valid state.
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <label htmlFor="zip">
                        Zip <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="zip"
                        required
                      />
                      <div className="invalid-feedback">Zip code required.</div>
                    </div>
                  </div>
                </div>
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="save-info"
                  />
                  <label className="custom-control-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="mb-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CartAndFromCheckOut;
