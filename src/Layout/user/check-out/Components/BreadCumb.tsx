import React from "react";

const BreadCumb = () => {
  return (
    <React.Fragment>
      <nav aria-label="breadcrumb" className="w-100 float-left">
        <ol
          className="breadcrumb parallax justify-content-center"
          data-source-url="img/banner/parallax.jpg"
          style={{
            backgroundImage: 'url("img/banner/parallax.jpg")',
            backgroundPosition: "50% 0.809717%",
          }}
        >
          <li className="breadcrumb-item active">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            checkout
          </li>
        </ol>
      </nav>
    </React.Fragment>
  );
};

export default BreadCumb;
