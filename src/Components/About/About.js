import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about_header">
      <div className="container-fluid bg-heading-imag main-about">
        <div className="elementor-background-overlay"></div>
        <div className="d-flex flex-column header-content">
          <h1>About Us</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p> */}
        </div>
      </div>
      <div className="container">
        <section className="about_content">
          <div className="row flex-xl-row flex-lg-row flex-column">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
              <div className="abt_left_content my-auto">
                <p className="right_sec_para">
                  New Horizon is well-reputed in the field of oil and gas
                  exploration, development, shipping, hedging, trading of
                  commodities (such as Crude oil, Gasoil, Gasoline, Fuel oil,
                  Heavy End, and Naphtha), importing, exporting, and marketing
                  of oil and gas products. New Horizon and its group companies
                  have major businesses across Africa, Asia and Middle East.
                </p>
                <p className="right_sec_para">
                  We provide integrated services with our own shipping lines
                  including a strategic partnership for oil supply with a proven
                  capability of handling over 100 million barrels year-on-year.
                </p>

                <p className="right_sec_para">
                  As an established enterprise in the supply of petroleum
                  products, over the years we have emerged as a premier single
                  source solutions provider for mid-size onshore & off-shore
                  projects tailored bespoke as per customer’s complete needs. We
                  also have strong partnerships with reliable suppliers so that
                  we can guarantee the highest standards in products and
                  services in whichever region we operate.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
              <img
                className="abt_ussec_img"
                src={process.env.PUBLIC_URL + "/images/abt-1.png"}
                alt="about_img"
              />
            </div>

            <div className="row flex-xl-row flex-lg-row flex-column flex-column-reverse top_space">
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
                <img
                  className="abt_ussec_img"
                  src={process.env.PUBLIC_URL + "/images/abt-2.png"}
                  alt="about_img"
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
                <div className="after_img_content ">
                  <p className="right_sec_para">
                    We are focused on enabling business partners to achieve
                    their objectives through the application of knowledge,
                    experience and innovation.
                  </p>
                  <p className="right_sec_para">
                    Our core trading business is sourcing, supplying and trading
                    refined petroleum products from origins, we plan to expand
                    our portfolio to encompass petrochemicals, tar coal, and oil
                    field machinery and equipment.
                  </p>

                  <p className="right_sec_para">
                    Our customers are across geographies including China,
                    Europe, Middle East and North Africa, South Asia, Southeast
                    Asia and Far East Asia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <div className="container-fluid artical_bg">
        <div className="elementor-background-overlay">
          <div className="container artical_for_contact">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-12"></div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex flex-column ">
                <p className="artical_para">
                  Our core trading business is sourcing, supplying and trading
                  refined petroleum products from origins, we plan to expand our
                  portfolio to encompass petrochemicals, tar coal, and oil field
                  machinery and equipment.
                </p>

                <p className="artical_para">
                  Our customers are across geographies including China, Europe,
                  Middle East and North Africa, South Asia, Southeast Asia and
                  Far East Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default About;
