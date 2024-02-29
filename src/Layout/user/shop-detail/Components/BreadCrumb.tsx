import React from "react";

const BreadCrumb = () => {
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb" className="w-100 float-left">
  <ol className="breadcrumb parallax justify-content-center" data-source-url="lib/img/banner/parallax.jpg" style={{backgroundImage: 'url("lib/img/banner/parallax.jpg")', backgroundPosition: '50% 0.809717%'}}>
    <li className="breadcrumb-item">
      <a href="#">Home</a>
    </li>
    <li className="breadcrumb-item active" aria-current="page">
      Shop
    </li>
  </ol>
</nav>

    </React.Fragment>
  );
};

export default BreadCrumb;
