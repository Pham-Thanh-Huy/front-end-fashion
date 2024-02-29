import React from "react";
import Slide from "./Components/Slide";
import TrendingProduct from "./Components/TrendingProduct";
import Banner1 from "./Components/Banner1";
import Banner2 from "./Components/Banner2";
import SpecialProduct from "./Components/SpecialProduct";


export const HomePage = () => {
    return(
        <React.Fragment>
              <Slide/>

              <div className="main-content ">
                    <Banner1/>
                {/* //trending product */}
                <TrendingProduct/>
              </div>


                <Banner2/>

                <SpecialProduct/>

    </React.Fragment>
    );
};
