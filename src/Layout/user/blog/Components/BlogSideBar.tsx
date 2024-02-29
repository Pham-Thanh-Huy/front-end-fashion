import React from 'react';

const BlogSidebar = () => {
    return (
        <React.Fragment>
            	<div className="sidebar col-xl-3 col-lg-3 order-lg-1">
  <div className="sidebar-blog left-sidebar w-100 float-left">
    <div className="title">
      <a data-toggle="collapse" href="#sidebar-blog" aria-expanded="false" aria-controls="sidebar-blog" className="d-lg-none block-toggler">Recent Posts</a>
    </div>
    <h3 className="widget-title text-capitalize">recent posts</h3>
    <div id="sidebar-blog">
      <div className="ttblog w-100 float-left">
        <div className="item">
          <div className="ttblog_image_holder col-sm-4 float-left">
            <a href="#">
              <img src="lib/img/banner/blog-01.jpg" alt="blog-01" /> </a>
          </div>
          <div className="blog-content-wrap col-sm-8 float-right">
            <div className="blog_inner">
              <h4 className="blog-title">Share the Love</h4>
              <div className="post-info d-flex">
                <span className="date d-flex"><i className="material-icons">date_range</i><span>12 june
                    2019</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ttblog w-100 float-left">
        <div className="item">
          <div className="ttblog_image_holder col-sm-4 float-left">
            <a href="#">
              <img src="lib/img/banner/blog-02.jpg" alt="blog-02" /> </a>
          </div>
          <div className="blog-content-wrap col-sm-8 float-right">
            <div className="blog_inner">
              <h4 className="blog-title">Upon of seasons earth</h4>
              <div className="post-info d-flex">
                <span className="date d-flex"><i className="material-icons">date_range</i><span>12 june
                    2019</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="sidebar-categories left-sidebar w-100 float-left">
    <div className="title">
      <a data-toggle="collapse" href="#sidebar-categories" aria-expanded="false" aria-controls="sidebar-categories" className="d-lg-none block-toggler">Recent Posts</a>
    </div>
    <h3 className="widget-title text-capitalize">blog categories</h3>
    <div id="sidebar-categories" >
      <ul className="list">
        <li><a href="#">fashion trends</a></li>
        <li><a href="#">features</a></li>
        <li><a href="#">latest style</a></li>
        <li><a href="#">beauty &amp; makeup</a></li>
      </ul>
    </div>
  </div>
  <div className="sidebar-tags left-sidebar w-100 float-left">
    <div className="title">
      <a data-toggle="collapse" href="#sidebar-tags" aria-expanded="false" aria-controls="sidebar-tags" className="d-lg-none block-toggler">Recent Posts</a>
    </div>
    <h3 className="widget-title text-capitalize">blog tags</h3>
    <div id="sidebar-tags" >
      <ul className="list">
        <li><a href="#">fashion</a></li>
        <li><a href="#">cosmetic</a></li>
        <li><a href="#">shoes</a></li>
        <li><a href="#">beauty</a></li>
        <li><a href="#">makeup</a></li>
        <li><a href="#">accessories</a></li>
      </ul>
    </div>
  </div>
  <div className="sidebar-archive left-sidebar w-100 float-left">
    <div className="title">
      <a data-toggle="collapse" href="#sidebar-archive" aria-expanded="false" aria-controls="sidebar-archive" className="d-lg-none block-toggler">Recent Posts</a>
    </div>
    <h3 className="widget-title text-capitalize">archive</h3>
    <div id="sidebar-archive" >
      <ul className="list">
        <li><a href="#">june 2019</a></li>
        <li><a href="#">january 2019</a></li>
        <li><a href="#">february 2018</a></li>
      </ul>
    </div>
  </div>
</div>

        </React.Fragment>
    );
};

export default BlogSidebar;