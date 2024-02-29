import React from "react";
import BreadCrumps from "./Components/BreadCrumps";
import Banner from "./Components/Banner";
import SortProductTemplate from "./Components/SortProductTemplate";
import Product from "./Components/Product";

const Shop = () => {
  return (
    <React.Fragment>
      <BreadCrumps />

      <div className="main-content w-100 float-left">
        <div className="container">
          <div className="row">
            <div className="content-wrapper col-xl-12 col-lg-12 order-lg-2">
                    <Banner/>
                    <SortProductTemplate/>
                    <Product/>
            </div>
          </div>
        </div>
      </div>
      
    </React.Fragment>
  );
};

export default Shop;
