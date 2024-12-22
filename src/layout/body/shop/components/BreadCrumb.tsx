import React from 'react';

const BreadCrumb = () => {
    return (
        <React.Fragment>
               {/* breadcrumb */}
               <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <a href="index.html" className="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
                        </a>
                        <a href="product.html" className="stext-109 cl8 hov-cl1 trans-04">
                            Men
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true" />
                        </a>
                        <span className="stext-109 cl4">
                            Lightweight Jacket
                        </span>
                    </div>
                </div>
        </React.Fragment>
    );
};

export default BreadCrumb;