import React from 'react';

const Banner = () => {
    return (
       <React.Fragment>
      <div className="block-category mb-30 w-100 float-left">
  <div className="category-cover text-center">
    <img src="lib/img/banner/category-banner.png" alt="category-banner" />
  </div>
  <div className="title-category text-capitalize">women</div>
  <div className="category-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
    sagittis, magna et euismod auctor, mauris ipsum interdum risus, a varius augue lacus id
    diam. Mauris maximus, ipsum at gravida sodales, purus tellus tempor eros, a feugiat elit
    odio in nunc.</div>
</div>

       </React.Fragment>
    );
};

export default Banner;