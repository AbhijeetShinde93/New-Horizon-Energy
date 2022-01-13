import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section className="services_section">
      <div className="container-fluid bg-heading-imag main-about">
        <div className="elementor-background-overlay"></div>
        <div className="d-flex flex-column header-content">
          <h1>Services</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p> */}
        </div>
      </div>
      <div className="container">
        <section className="service_content">
          <div className="row">
            <div className="new_heading">
              <h2 className="what_we_do_heading">What We Do</h2>
            </div>
            <div className="sub_content">
              <p className="sub_para">
                New Horizon Energy is one of the regional oil and gas
                enterprises in Middle East and Asia and engages in various
                activities involving oil, gas and new energy, including:
              </p>
            </div>

            <ul>
              <li>
                Exploration, development and production of crude oil and natural
                gas
              </li>
              <li>Refining of crude oil and petroleum products</li>
              <li>Marketing and trading of oil & gas products</li>
              <li>
                Transportation and storage of natural gas, crude oil and refined
                products
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className="container-fluid points_for_whtwedo">
        <div className="row pad_tb">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 my-auto">
            <img
              className="points_images"
              src={process.env.PUBLIC_URL + "/images/service-1.png"}
              alt="about_img"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
            <div className="whtwedo_sec">
              <h3 className="points_heading">Oil and Gas Exploration</h3>
              <p className="points_text">
                We at New Horizon Energy work with a vision to become the market
                leaders in helping meet the world’s growing demand for energy
              </p>
              <p className="points_text">
                Our Upstream business combines innovation and the effective use
                of technology to maximize mature fields, discover new resources
                and meet the world’s growing demand for energy. Through targeted
                investments and a consistent focus on operational excellence, we
                focus on developing sustainable oil & gas assets.
              </p>
              <p className="points_text">
                Exploring and investing in strategic assets offer exciting
                opportunities to meet tomorrow’s complex energy challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="row pad_tb flex-lg-row flex-md-row flex-column-reverse">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
            <div className="whtwedo_sec">
              <h3 className="points_heading">
                <h3 className="points_heading">Storage</h3>
                <p className="points_text">
                  New Horizon Energy and its partners has been active in tank
                  storage logistics and is one of the largest independent
                  operators of tank terminals for oils, gases and chemicals
                  worldwide. We provide global clients with oil & gas onshore
                  storage construction services in the field of crude oil,
                  product oil, LPG, and underground oil and gas storage cavern,
                  with the capability to construct 10 million m³ storage per
                  year.
                </p>

                <p className="points_text">
                  The company owns and operates 400 000 m³ storage tanks
                  facilities for clean products dirty products facility in UAE
                  and Malaysia, 40 000 m³ clean and dirty petroleum products
                  facility in UAE, and 400 000 m³ in Malaysia. Our clients
                  include private and state oil companies, refiners,
                  petrochemical companies, and traders in petroleum products and
                  chemicals.
                </p>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 my-auto">
            <img
              className="points_images"
              src={process.env.PUBLIC_URL + "/images/service-5.png"}
              alt="about_img"
            />
          </div>
        </div>

        <div className="row pad_tb">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 my-auto">
            <img
              className="points_images"
              src={process.env.PUBLIC_URL + "/images/service-3.png"}
              alt="about_img"
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
            <div className="whtwedo_sec">
              <h3 className="points_heading">Oil and Gas Trading</h3>
              <p className="points_text">
                Oil is one of the world's most traded commodities and presents
                many challenges, not least the close association between the oil
                price and global geo-political policies. This instability
                continues to contribute to the high level of market speculation
                in relation to pricing and future availability.
              </p>
              <p className="points_text">
                Our core business is sourcing, supplying and trading refined
                petroleum products from origins. We have expanded our portfolio
                to encompass petrochemicals, tar coal, and oil field machinery
                and equipment.
              </p>
              <p className="points_text">
                Our oil & gas trading arm has decades of experience working with
                government owned producers, leading oil traders and energy
                multinationals. This has given us critical insight into project
                development, risk management and financial structuring.
              </p>
            </div>
          </div>
        </div>

        <div className="row pad_tb flex-lg-row flex-md-row flex-column-reverse">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
            <div className="whtwedo_sec">
              <h3 className="points_heading">
                <h3 className="points_heading">Shipping Lines</h3>
                <p className="points_text">
                  Our group also consists of an integrated logistics services
                  company with its own shipping line capable of handling over
                  100 Mn barrels every year
                </p>
                <h5>Key values</h5>
                <ul>
                  <li>Transparency and ready access to vessel information</li>
                  <li>
                    Tankers Proven capability to support clients for Oil Major
                    and CDI Vetting inspection and acceptance support
                  </li>
                  <li>
                    KPI based monitoring of ship management activities to
                    deliver the set objective
                  </li>
                  <li>
                    Effective Cost Management to operate vessels at 5% of
                    budgetary allocations
                  </li>
                  <li>
                    Strong and thorough Crew Selection Process to ensure
                    competence and quality
                  </li>
                  <li>
                    A commitment to train for enhancing competence and
                    performance level of seafarers
                  </li>
                  <li>
                    Dry dock Support to provide clients with experience backed
                    solutions that are both time and cost competitive
                  </li>
                </ul>
              </h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 px-0 my-auto">
            <img
              className="points_images"
              src={process.env.PUBLIC_URL + "/images/service-4.png"}
              alt="about_img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
