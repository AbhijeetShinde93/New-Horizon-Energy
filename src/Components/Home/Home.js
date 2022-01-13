import React from "react";
import "./Home.css";

import "./Home_mediaquery.css";

import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <div className="slider_container container-fluid">
        <div className="row">
          <div className="col-12 px-0">
            <Carousel fade>
              <Carousel.Item Interval={500}>
                <div class="overlay"></div>
                <img
                  className="d-block w-100 slider_img"
                  src={process.env.PUBLIC_URL + "/images/2941174.jpg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    An integrated oil and gas company focused on emerging
                    markets of Asia, Middle East and Africa.
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item Interval={500}>
                <div class="overlay"></div>
                <img
                  className="d-block w-100 slider_img"
                  src={process.env.PUBLIC_URL + "/images/2371999.jpg"}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>
                    Engaged in a wide range of activities related to oil, gas
                    and renewable energy segments with an objective of providing
                    sustainable solutions for economic and social development.
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="who_we_are_section">
          <div className="row">
            <div className="new_heading">
              <h2 className="who_we_are_heading">Who We Are</h2>
            </div>
            <div className="text-center">
              <p className="sub_text">
                Our deep-rooted understanding of reopened and local petroleum
                and energy requirement enable us to cater to our varied
                clientele across the world.
              </p>
            </div>
          </div>
          <div className="row flex-md-column flex-xl-row flex-lg-row mt-4">
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 for-mobile my-auto">
              <img
                className="who_we_are_img"
                src={process.env.PUBLIC_URL + "/images/2941491.jpg"}
                alt="about_img"
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 my-auto right-section">
              <div>
                <p className="right_sec_para">
                  Our group also consists of an integrated logistics services
                  company with its own shipping line capable of handling over
                  100 Mn barrels every year and dedicated storage facilities
                  across the globe with overall capacity of 400,000 m³.
                </p>
                <p className="right_sec_para">
                  We are focused on enabling business partners achieve their
                  objectives through the application of knowledge, experience
                  and innovation.
                </p>
                <p className="right_sec_para">
                  Our customers are across geographies including China, Europe,
                  Middle East and North Africa, South Asia, Southeast Asia and
                  Far East Asia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
