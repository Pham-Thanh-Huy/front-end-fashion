import React from 'react';

const Banner2 = () => {
    return (
        <React.Fragment>
 
<div id="ttcmssubbanner" className="ttcmssubbanner my-40 my-sm-25 bottom-to-top hb-animate-element">
  <div className="ttbannerblock container">
    <div className="row">
      <div className="ttbanner1 ttbanner col-sm-6 col-xs-6">
        <div className="ttbanner-img"><a href="#"><img src="lib/img/banner/cms-03.jpg" alt="cms-03" height={600} width={400} /></a></div>
        <div className="ttbanner-inner">
          <div className="ttbanner-desc text-center">
            <span className="title text-uppercase">summer shop</span> 
            <span className="subtitle text-uppercase py-20">up to 70% off</span> 
            <span className="shop-now text-capitalize"><a href="#" className="btn-primary">shop now</a></span>        </div>
        </div>
      </div>
      <div className="ttbanner2 ttbanner col-sm-6">
        <div className="ttbanner-img"><a href="#"><img src="lib/img/banner/cms-04.jpg" alt="cms-04" height={600} width={400} /></a></div>
        <div className="ttbanner-inner">
          <div className="ttbanner-desc text-center">
            <span className="title text-uppercase">winter shop</span> 
            <span className="subtitle text-uppercase py-20">up to 70% off</span> 
            <span className="shop-now text-capitalize"><a href="#" className="btn-primary">shop now</a></span>        </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </React.Fragment>
    );
};

export default Banner2;