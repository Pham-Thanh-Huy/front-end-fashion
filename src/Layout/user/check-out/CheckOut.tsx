import React from 'react';
import BreadCrumb from '../shop-detail/Components/BreadCrumb';
import CartAndFromCheckOut from './Components/CartAndFromCheckOut';

const CheckOut = () => {
    return (
      <React.Fragment>
        <BreadCrumb/>
        <CartAndFromCheckOut/>
      </React.Fragment>
    );
};

export default CheckOut;