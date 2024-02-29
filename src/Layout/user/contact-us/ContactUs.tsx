import React from "react";
import BreadCrumb from "./Components/BreadCrumb";

const ContactUs = () => {
  return (
    <React.Fragment>
      <BreadCrumb />
      <div className="main-content w-100 float-left">
        <div className="container">
          <div className="row">
            <div className="contact-form-area col-sm-7">
              <div className="contact-form-inner">
                <h4 className="text-capitalize">tell us your project</h4>
                <form id="contact-form" method="post">
                  <div className="row">
                    <div className="col-md-12">
                      <label htmlFor="name" className="float-left">
                        First Name<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="float-right"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="last_name" className="float-left">
                        Last Name<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        id="last_name"
                        className="float-right"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="email" className="float-left">
                        Email<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="float-right"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="subject" className="float-left">
                        Subject<span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        id="subject"
                        className="float-right"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <label htmlFor="message" className="float-left">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="float-right"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <input
                    type="submit"
                    className="submit-btn default-btn btn-primary btn"
                    defaultValue="Send Email"
                  />
                  <p className="form-messege" />
                </form>
              </div>
            </div>
            <div className="contact-address col-sm-5">
              <div className="contact-inner float-left w-100">
                <div className="contact-information">
                  <h4 className="text-capitalize">contact us</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque eu vehicula turpis. Donec semper, nunc a
                    imperdiet sollicitudin, lacus arcu semper nibh, non
                    fermentum risus est quis augue.
                  </p>
                  <div className="contact-wrapper">
                    <div className="contact-list">
                      <i className="material-icons">place</i>
                      <span>
                        Address : 4030, Central Bazzar, opp. Varachha Police
                        Station, Varachha Main Road, Surat, Gujarat 395006,
                        India
                      </span>
                    </div>
                    <div className="contact-list">
                      <i className="material-icons">call</i>
                      <span>demo@store.com</span>
                    </div>
                    <div className="contact-list">
                      <i className="material-icons">email</i>
                      <span>0(1234) 567 890</span>
                    </div>
                  </div>
                </div>
                <div className="working-time">
                  <h5>Working hours</h5>
                  <div>
                    <div>Monday – Saturday</div>
                    <div>09AM – 07PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactUs;
