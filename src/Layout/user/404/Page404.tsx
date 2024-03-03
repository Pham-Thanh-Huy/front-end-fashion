import React from 'react';

const Page404 = () => {
    return (
     <React.Fragment>
        <style>
          {`
            .page-wrap {
              text-align: center;
              padding-top: 20vh;
              height: 500px;
            }
            .error-code {
              font-size: 4rem;
              display: block;
            }
            .error-message {
              margin-bottom: 1rem;
              font-size: 1.25rem;
            }
            .back-link {
                text-decoration: underline;
              }
          `}
        </style>
        <br />
        <br />
        <br />
        <div className="page-wrap">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <span className="error-code">404</span>
                <br />
                <br />
                <div className="error-message">Trang của bạn muốn vào tôi không tìm kiếm thấy được trong ứng dụng của tôi.</div>
                <a href="/" className="back-link">Quay trở lại</a>
              </div>
            </div>
          </div>
        </div>
     </React.Fragment>
    );
};

export default Page404;
