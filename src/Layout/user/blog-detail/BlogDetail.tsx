import React from "react";
import BreadCrumb from "./Components/BreadCrumb";
import Blog from "./Components/Blog";
import BlogDetailSideBar from "./Components/BlogDetailSideBar";

const BlogDetail = () => {
  return (
    <React.Fragment>
      <BreadCrumb />
      <div className="main-content w-100 float-left blog-detail">
        <div className="container">
          <div className="row">
            <Blog/>
                <BlogDetailSideBar />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BlogDetail;
