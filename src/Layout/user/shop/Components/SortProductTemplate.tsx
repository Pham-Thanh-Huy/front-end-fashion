import React from 'react';

const SortProductTemplate = () => {
    return (
        <React.Fragment>
           <header className="product-grid-header d-flex d-xs-block d-sm-flex d-lg-flex w-100 float-left">
  <div className="hidden-sm-down total-products d-flex d-xs-block d-lg-flex col-md-3 col-sm-3 col-xs-12 align-items-center">
    <div className="row">
    </div>
  </div>
  <div className="shop-results-wrapper d-flex d-sm-flex d-xs-block d-lg-flex justify-content-end col-md-9 col-sm-9 col-xs-12">
   
    <div className="shop-results d-flex align-items-center"><span>Sort By</span>
      <div className="shop-select">
        <select name="sort" id="sort">
          <option value="position">Default sorting</option>
          <option value="p-name">Sort Popularity</option>
          <option value="p-price">Sort Price</option>
        </select>
      </div>
    </div>
  </div>
</header>

        </React.Fragment>
    );
};

export default SortProductTemplate;