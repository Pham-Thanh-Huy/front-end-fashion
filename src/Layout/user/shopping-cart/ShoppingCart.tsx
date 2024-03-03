import React from 'react';
import BreadCrumb from './Components/BreadCrumb';
import Cart from './Components/Cart';

const ShoppingCart = () => {
    return (
        <React.Fragment>
            <BreadCrumb/>
                <Cart/>
        </React.Fragment>
    );
};

export default ShoppingCart;