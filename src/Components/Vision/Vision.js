import React from "react";
import "./Vision.css";

const Vision = () => {
  return (
    <section className="vision_section">
      <div className="container-fluid bg-heading-imag main-vision">
        <div className="elementor-background-overlay"></div>
        <div className="d-flex flex-column header-content">
          <h1>Our Vision</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p> */}
        </div>
      </div>

      <section className="vison_sec">
        <div className="container">
          <div className="row three-section">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card v-card">
                <img
                  className="card-img-top image_size"
                  src={process.env.PUBLIC_URL + "/images/vision-1.png"}
                  alt="about_img"
                />
                <div className="card-body">
                  <h4 className="card-title">Our Vision</h4>
                  <p className="card-text">
                    Our Vision is to become a reliable global energy and
                    innovative infrastructure solutions provider consistently
                    delivering excellence.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="card v-card">
                <img
                  className="card-img-top image_size"
                  src={process.env.PUBLIC_URL + "/images/card-2.png"}
                  alt="about_img"
                />
                <div className="card-body">
                  <h4 className="card-title">Our Mission</h4>
                  <p className="card-text">
                    Our Mission is to deliver excellence in quality and
                    reliability for global energy and infrastructure, while
                    keeping innovation, integrity, safety and sustainability as
                    our core priority in everything we do.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4  col-md-6 col-sm-12 col-12">
              <div className="card v-card">
                <img
                  className="card-img-top image_size"
                  src={process.env.PUBLIC_URL + "/images/card-3.png"}
                  alt="about_img"
                />
                <div className="card-body">
                  <h4 className="card-title">Our Value</h4>
                  <p className="card-text">
                    Our Corporate Values are Quality, Reliability,
                    Sustainability, Innovation, Team Work & Long-term client
                    relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="container-fluid teams">
          <div className="container">
            <div className="row">
              <div className="team_div">
                <div className="row">
                  <div className="new_heading">
                    <h2 className="ourteam_heading">Our Team</h2>
                  </div>
                </div>
                <div className="text-center">
                  <p className="sub_text">
                    Our ability to mobilize human and financial resources for
                    the management of diversified operations makes us preferred
                    contractor for critical projects. We recognize the
                    adaptability of our multinational and multicultural
                    workforce as the key success factor for successful project
                    completions.
                  </p>

                  <p className="sub_text">
                    Our people are our most valuable assets and they have a
                    crucial role to play in enabling the “New Horizon Energy” to
                    achieve its vision to become global oil & gas premier
                    facilities and infrastructure provider. We therefore place
                    the highest priority on attracting, developing and retaining
                    the best professionals in the business. In return, we are
                    committed to provide our staff with an inspiring work
                    environment, challenging roles and responsibilities,
                    promising career opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </section>
  );
};

export default Vision;
