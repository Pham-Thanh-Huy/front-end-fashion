import React from "react";
import BreadCrumb from "./Components/BreadCrumb";
import BlogList from "./Components/BlogList";
import BlogSidebar from "./Components/BlogSideBar";

const Blog = () => {
  return (
    <React.Fragment>
      <BreadCrumb />

      <div className="main-content w-100 float-left blog-list">
        <div className="container">
          <div className="row">
            <BlogList/>
          <BlogSidebar/>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
