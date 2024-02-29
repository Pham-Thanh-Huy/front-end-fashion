
import React from 'react';

const Slide = () => {
    return (
        <React.Fragment>
            <div className="slider-wrapper my-40 my-sm-25 float-left w-100">
  <div className="container">
    <div className="ttloading-bg" />
    <div className="slider slider-for owl-carousel">
      <div>
        <a href="#">
          <img src="lib/img/slider/sample-01.jpg"  height={800} width={1600} />
        </a>
        <div className="slider-content-wrap center effect_top">
          <div className="slider-title mb-20 text-capitalize float-left w-100">Sản phẩm đặc biệt</div>
          <div className="slider-subtitle mb-50 text-capitalize float-left w-100">fashion trend</div>
          <div className="slider-button text-uppercase float-left w-100"><a href=" #">Shop Now</a></div>
        </div>
      </div>
      <div>
        <a href="#">
          <img src="lib/img/slider/sample-02.jpg"  height={800} width={1600} />
        </a>
        <div className="slider-content-wrap center effect_bottom">
          <div className="slider-title mb-20 text-capitalize float-left w-100">Về chúng tôi</div>
          <div className="slider-subtitle mb-50 text-capitalize float-left w-100">fashion style</div>
          <div className="slider-button text-uppercase float-left w-100"><a href=" #">Mua sắm ngay</a></div>
        </div>
      </div>
    </div>
  </div>
</div>
        </React.Fragment>
    );
};

export default Slide;