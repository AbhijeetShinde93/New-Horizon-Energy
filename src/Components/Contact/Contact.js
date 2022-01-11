import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contactus_header">
      <div className="container-fluid bg-heading-imag main-contactus">
        <div className="elementor-background-overlay"></div>
        <div className="d-flex flex-column header-content">
          <h1>Contact Us</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p> */}
        </div>
      </div>

      <section className="getintouch">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-12 text-center get_heading">
              <img
                src={process.env.PUBLIC_URL + "/icons/communicate.png"}
                alt="icons"
                className="head_icons"
              />
              <h2>Get In Touch</h2>
              <p className="text-center sub_headng">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="card contact_card">
                <div className="text-center box-con">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/location.png"}
                    alt="icons"
                    className="touch_icons"
                  />
                  <h3 className="mt-2">Office Location</h3>
                  <p className="text_infom">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="card contact_card">
                <div className="text-center box-con">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/phone-call.png"}
                    alt="icons"
                    className="touch_icons"
                  />
                  <h3 className="mt-2">Give us a call</h3>
                  <p className="text_infom">
                    Lorem ipsum dolor sit amet, consectet adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 col-12">
              <div className="card contact_card">
                <div className="text-center box-con">
                  <img
                    src={process.env.PUBLIC_URL + "/icons/mail.png"}
                    alt="icons"
                    className="touch_icons"
                  />
                  <h3 className="mt-2">Send us a Message</h3>
                  <p className="text_infom">Info@newhorizon-energy.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
