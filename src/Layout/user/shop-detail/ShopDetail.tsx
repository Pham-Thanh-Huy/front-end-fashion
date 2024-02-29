import React from "react";
import BreadCrumb from "./Components/BreadCrumb";
import { useLocation } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import ProductAlsoLike from "./Components/ProductAlsoLike";


const ShopDetail = () => {
  return (
    <div id="product-compact">
      <BreadCrumb />

        <ProductDetail/>

        {/* Sản phẩm có thể bạn sẽ thích  */}
        <ProductAlsoLike/>
    </div>
  );
};

export default ShopDetail;
