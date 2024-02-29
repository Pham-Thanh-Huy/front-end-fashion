import React from 'react';

const Blog = () => {
    return (
        <React.Fragment>
       <div className="products-grid col-xl-9 col-lg-9 order-lg-2 blog-details">
  <div className="row">
    <div className="ttblog col-sm-12 col-xs-12 float-left">
      <div className="item">
        <div className="ttblog_image_holder">
          <a href="#">
            <img src="lib/img/banner/blog-01.jpg" alt="blog-01" /> </a>
        </div>
        <div className="blog-content-wrap">
          <div className="blog_inner">
            <h4 className="blog-title">Share the Love</h4>
            <div className="post-info d-flex">
              <span className="author d-flex"><i className="material-icons">perm_identity</i><span>admin</span></span>
              <span className="date d-flex"><i className="material-icons">date_range</i><span>12
                  june 2019</span></span>
              <span className="article d-flex"><i className="material-icons">folder</i><span>categories</span></span>
            </div>
            <div className="blog-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aliquam accumsan tristique erat et fermentum. Nulla facilisi. Proin
              tristique vitae dui nec sodales. Maecenas cursus odio sed erat varius, in
              ultricies purus blandit. Nam finibus lectus mi, eget molestie est lacinia
              molestie. Curabitur eget fermentum ipsum. Aliquam venenatis maximus ante, et
              volutpat enim congue non. Cras at rutrum metus. Praesent in accumsan sapien,
              eu posuere sem. Integer rutrum libero eget sollicitudin porttitor. Duis
              porttitor felis sit amet neque tincidunt pharetra. Curabitur eget urna
              dignissim, faucibus tortor sed, iaculis nunc.
              <blockquote>consectetur adipiscing elit. In rutrum odio urna, vitae ultrices
                mi malesuada ut. Praesent lacus erat, ultricies ut risus nec,
                pellentesque interdum purus. In mi justo, consectetur tincidunt sapien
                eget, venenatis volutpat risus. Maecenas eget pretium eros. Integer
                tincidunt aliquet ligula in vulputate. Ut ut justo facilisis, vulputate
                augue vel, vestibulum tortor. Nullam varius lacus non porttitor sodales.
                Vivamus ultricies est vitae pharetra convallis. Sed suscipit, nisi sit
                amet tempus mollis, mauris ante tempor risu</blockquote>
              Curabitur sit amet mauris auctor, tempor lacus ut, pretium turpis. Nulla
              dapibus, orci vel malesuada porta, augue justo interdum felis, sit amet
              molestie tellus lorem vitae mauris. Quisque metus turpis, suscipit mattis
              enim vitae, iaculis feugiat tellus. Nullam tempor tortor neque, eu
              vestibulum turpis tempor tempus. Phasellus tempus, tortor vitae pellentesque
              pellentesque, orci ipsum eleifend turpis, in aliquam magna augue non neque.
              Praesent elementum mollis metus at maximus. Nulla eu lacus sollicitudin,
              auctor odio vel, ornare ligula. Proin a dictum metus. In viverra, ipsum ut
              vehicula tincidunt, sapien justo tristique massa, eu lobortis neque nulla
              sit amet nisi. Proin vitae nunc ut ligula sodales dignissim a quis enim. Sed
              condimentum metus et dignissim efficitur. Cras nec sapien eget est rhoncus
              euismod.
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="post-comment-area pt-90 scroll-area col-sm-12 col-xs-12">
      <h4 className="post-title">3 comments</h4>
      <div className="post-comment-container">
        <div className="single-post-comment float-left w-100">
          <div className="single-post-image float-left">
            <img src="lib/img/logos/author.jpg"  />
          </div>
          <div className="single-post-content">
            <div className="single-post-info float-left">
              <a href="#">admin</a>
              <span>October 6, 2018 at 1:38 am</span>
              <p>just a nice post</p>
            </div>
            <button type="button" className="float-right btn-primary btn">reply</button>
          </div>
        </div>
        <div className="single-post-comment float-left w-100">
          <div className="single-post-image float-left">
            <img src="lib/img/logos/author.jpg"  />
          </div>
          <div className="single-post-content">
            <div className="single-post-info float-left">
              <a href="#">demo</a>
              <span>October 6, 2018 at 1:38 am</span>
              <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur
              </p>
            </div>
            <button type="button" className="float-right btn-primary btn">reply</button>
          </div>
        </div>
        <div className="single-post-comment float-left w-100">
          <div className="single-post-image float-left">
            <img src="lib/img/logos/author.jpg"  />
          </div>
          <div className="single-post-content">
            <div className="single-post-info float-left">
              <a href="#">admin</a>
              <span>October 6, 2018 at 1:38 am</span>
              <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris.
                Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec
              </p>
            </div>
            <button type="button" className="float-right btn-primary btn">reply</button>
          </div>
        </div>
      </div>
    </div>
    <form action="#" className="post-comment-form col-sm-12">
      <h4 className="post-title">Leave a Reply</h4>
      <p>Your email address will not be published. Required fields are marked *</p>
      <div className="row">
        <div className="col-lg-4">
          <label htmlFor="post-name">Name <span className="required">*</span></label>
          <input type="text" id="post-name" className="w-100" required />
        </div>
        <div className="col-lg-4">
          <label htmlFor="post-email">Email <span className="required">*</span></label>
          <input type="email" id="post-email" className="w-100" required />
        </div>
        <div className="col-lg-4">
          <label htmlFor="post-website">Website</label>
          <input type="text" id="post-website" className="w-100" required />
        </div>
      </div>
      <label htmlFor="post-text">Comment</label>
      <textarea name="post-comment" id="post-text" cols={30} rows={10} className="w-100" defaultValue={""} />
      <button type="submit" className="default-btn btn-primary btn">post comment</button>
    </form>
  </div>
</div>

        </React.Fragment>
    );
};

export default Blog;