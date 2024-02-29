import React from "react";

const Banner1 = () => {
  return (
    <React.Fragment>
      <div id="ttcmsbanner" className="ttcmsbanner my-40 my-sm-25">
        <div className="ttbannerblock container text-center">
          <div className="row">
            <div className="ttbanner1 ttbanner col-sm-6 col-xs-6 left-to-right hb-animate-element">
              <div className="ttbanner-img">
                <a href="#">
                  <img
                    src="lib/img/banner/cms-01.jpg"
                    alt="cms-01"
                    height={600}
                    width={630}
                  />
                </a>
              </div>
              <div className="ttbanner-inner d-inline-block align-top float-none">
                <div className="ttbanner-desc float-left w-100">
                  <h2 className="ttbanner-heading text-uppercase float-left w-100">
                    Womens
                  </h2>
                  <span className="title text-uppercase float-left w-100 pb-3">
                    collection
                  </span>
                  <span className="subtitle float-left w-100 py-20">
                    Et harum quidem rerum facilis est et expedita m libero
                    tempore, cum solut
                  </span>
                  <span className="shop-now float-left w-100">
                    <a
                      href="#"
                      className="d-inline-block align-top float-none btn-primary"
                    >
                      Shop Now
                    </a>
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="ttbanner2 ttbanner col-sm-6 col-xs-6 right-to-left hb-animate-element">
              <div className="ttbanner-img">
                <a href="#">
                  <img
                    src="lib/img/banner/cms-02.jpg"
                    alt="cms-02"
                    height={600}
                    width={630}
                  />
                </a>
              </div>
              <div className="ttbanner-inner d-inline-block align-top float-none">
                <div className="ttbanner-desc">
                  <h2 className="ttbanner-heading text-uppercase">Men's</h2>
                  <span className="title text-uppercase float-left w-100 pb-3">
                    collection
                  </span>
                  <span className="subtitle float-left w-100 py-20">
                    Et harum quidem rerum facilis est et expedita m libero
                    tempore, cum solut
                  </span>
                  <span className="shop-now float-left w-100">
                    <a
                      href="#"
                      className="d-inline-block align-top float-none btn-primary"
                    >
                      Shop Now
                    </a>
                  </span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner1;
