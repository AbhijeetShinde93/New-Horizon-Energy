import React from "react";
import "./Team.css";

const Team = () => {
  return (
    <div className="team_Section">
      <div className="container-fluid bg-heading-imag main-about">
        <div className="elementor-background-overlay"></div>
        <div className="d-flex flex-column header-content">
          <h1>Our Team</h1>
        </div>
      </div>
      <div className="container">
        <div className="team_content">
          <div className="row">
            <div className="text-center">
              <p className="sub_text">
                Our ability to mobilize human and financial resources for the
                management of diversified operations makes us preferred
                contractor for critical projects. We recognize the adaptability
                of our multinational and multicultural workforce as the key
                success factor for successful project completions.
              </p>
              <p className="sub_text">
                Our people are our most valuable assets and they have a crucial
                role to play in enabling the “New Horizon Energy” to achieve its
                vision to become a global oil & gas major. We therefore place
                the highest priority on attracting, developing and retaining the
                best professionals in the business. In return, we are committed
                to provide our staff with an inspiring work environment,
                challenging roles and responsibilities, promising career
                opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner-fluid teams">
        <div className="row">
          <div className="text-center">
            <p className="sub_text">
              Our people are our most valuable assets and they have a crucial
              role to play in enabling us achieve our vision to become a premier
              global oil & gas company.
            </p>
          </div>
          <div className="col-12-lg col-12-md col-sm-12 col-12 pad_2">
            <div className="show_team">
              {/* <div>
                <img
                  className="team_member_img"
                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                  alt="team_member_img"
                />
              </div> */}
              <div className="member_details">
                <h5 className="member_name">William Gregory Coleman</h5>
                <p className="member_info">
                  William Coleman is a seasoned international executive with
                  over 40 years’ experience in energy & oil & gas sector. He has
                  held leadership roles across several companies including BP,
                  driving the companies’ business strategy, investment, mergers
                  & acquisition functions amongst many others. He is an
                  international business leader and advisor with strong
                  strategic, commercial and leadership qualities. Greg excelled
                  in leading international operations in Canada, Norway and
                  Venezuela. Beginning as a technical engineer, he advanced to
                  become Group Vice President for BP plc. He comes with immense
                  experience in setting global strategies; overseeing health,
                  safety, security and environment (HSSE) functions; and
                  implementing risk management initiatives. A holistic
                  understanding of the energy & oil & gas landscape positions
                  enables Greg to engage efficiently across stakeholder groups
                  in commercial and technical contexts. In the past, Greg has
                  held various positions including those of Group VP at BP
                  Group, Managing Director at BP Normay and Head of E&P Planning
                  and Strategy at BP Exploration Inc.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12-lg col-12-md col-sm-12 col-12 pad_2">
            <div className="show_team_2">
              <div className="member_details">
                <h5 className="member_name">David Bamford</h5>
                <p className="member_info">
                  David Bamford is well known around the oil & gas industry both
                  as an explorer and a geophysicist. He holds a Physics degree
                  from the University of Bristol and a Ph.D in Geological
                  Sciences from the University of Birmingham. From 2004 to 2014,
                  he has served as a non-executive director at Tullow Oil plc.
                  He retired from BP plc in 2003, his last four positions being
                  Chief Geophysicist (1990-1995), Business Unit Leader (General
                  Manager) for first West Africa and then Norway (1995-1999),
                  and finally Head of Exploration until 2003. He has also been
                  on the board of ASX-quoted Australia Oriental Energy as a
                  non-executive director. Over the last several years he has
                  written extensively on the oil & gas sector and founded/taken
                  equity interest in several media companies (Finding Petroleum,
                  Digital Energy Journal, Carbon Capture Journal, Tanker
                  Operator Magazine – all now owned by Future Energy Publishing
                  Ltd, and also Geoexpro) that focus on the sector. He pays
                  special attention to technology innovation and knowledge
                  transfer, and has founded Next Bigger, Better Ltd for
                  identifying and funding technology innovations by young
                  people. He is an adviser to Siccar Point Energy & Blackstone,
                  on the Advisory Board for Kimmeridge Energy LLC (focused on
                  shale oil/gas plays in the USA) and most recently, he has
                  joined the board of Terrabotics Ltd, a UK-based satellite
                  remote sensing company.
                </p>
              </div>
              {/* <div>
                <img
                  className="team_member_img"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="team_member_img"
                />
              </div> */}
            </div>
          </div>

          <div className="col-12-lg col-12-md col-sm-12 col-12 pad_2">
            <div className="show_team">
              {/* <div>
                <img
                  className="team_member_img"
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="team_member_img"
                />
              </div> */}
              <div className="member_details">
                <h5 className="member_name">Richard Ndem</h5>
                <p className="member_info">
                  With 15+ years of experience in the finance industry,
                  including ten years covering sub-Saharan Africa, Richard Ndem
                  brings on board strong skills in financial advisory, cash flow
                  modelling, debt structuring, banking execution and
                  relationship management. Richard benefits from having worked
                  for diversified financial institutions - such as a
                  microfinance NGO; American, Japanese and Nigerian commercial
                  banks and a prominent UK infrastructure development finance
                  institution. This broad cultural and technical experience
                  provides him with an unmatched flexibility, adaptability and
                  understanding of the finance sphere in emerging markets. He
                  has held senior roles across institutions like PlanetFinance
                  (NGO, Microfinance advisory, Paris), Ernst & Young (Project
                  Finance advisory, Paris), GMAC (UK) (Credit Sanctioning, UK),
                  Mizuho Corporate Bank (Project Finance portfolio and credit
                  management, UK), FBN Bank (UK) (Project & Structured Finance
                  structuring, UK) and PIDG Group (DFI, GuarantCo Project
                  Finance portfolio management, UK). He has completed several
                  fund raise initiatives for private and parastatal entities in
                  Africa across sectors – infrastructure, hospitality, oil and
                  gas (upstream to midstream), and shipping.
                </p>
              </div>
            </div>
          </div>

          <div className="col-12-lg col-12-md col-sm-12 col-12 pad_2">
            <div className="show_team_2">
              <div className="member_details">
                <h5 className="member_name">Anil Kumar</h5>
                <p className="member_info">
                  As the former Executive Director of ONGC, Anil Kumar has over
                  37 years of specialized hands on experience in reservoir
                  engineering, subsurface management analysis and preparation
                  and execution of field development plan for onshore and
                  offshore fields. He is one of the most experienced
                  professionals in sub-surface management of Onshore and
                  Offshore fields; reservoir management including preparation of
                  FDP, Water injection and water control of the Assets under
                  production; and screening of field for best suited IOR/EOR
                  techniques. His has also served other large oil companies in
                  the capacity of Area Manager, Subsurface Manager, Field
                  Development & EOR amongst many others.
                </p>
              </div>
              {/* <div>
                <img
                  className="team_member_img"
                  src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/115490361/original/24750cc89e79244d350f49cac7097b68ba1215e4/create-a-cartoon-avatar-profile-pic.png"
                  alt="team_member_img"
                />
              </div> */}
            </div>
          </div>

          <div className="col-12-lg col-12-md col-sm-12 col-12 pad_2">
            <div className="show_team">
              {/* <div>
                <img
                  className="team_member_img"
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  alt="team_member_imgss"
                />
              </div> */}
              <div className="member_details">
                <h5 className="member_name">Arvind Jayasing Morbale</h5>
                <p className="member_info">
                  Arvind brings over 39 years’ experience in Oil & Gas producing
                  Assets – spanning across operations, production optimization,
                  production & processing facilities (deep water, shallow water,
                  High temperature-High pressure (HPHT) & onshore terminals). He
                  was the Executive Director & Asset Manager of Oil & Natural
                  Gas Corporation’s (ONGC’s) Eastern Offshore Asset (EOA) and
                  HPHT Asset at Kakinada (AP). He was responsible for tendering,
                  award and execution of ONGC’s single largest project -
                  development of Cluster II fields of deep-water block
                  KG-DWN-98/2 with a capex of around USD 5 Billion. He ahs also
                  served as the Executive Director & Asset Manager of ONGC’s
                  Neelam & Heera Asset (NH Asset) at Mumbai Offshore which had a
                  peak production of 3 plus MMSCD of gas & 54,000 BOPD of oil.
                  In the past, he has served as Project Manager of ONGC’s first
                  deep-water project in the Eastern Offshore Asset, Kakinada
                  which commenced production from its deep water from November
                  2013. His career highlights include several “Firsts in ONGC”
                  like: first Deep water Project of ONGC, first In situ Revamp
                  of offshore Process Complex, first overseas EPC project by
                  ONGC group of companies-Sudan Pipeline Project and first
                  subsea repair of well platform jacket bracings (HC platform of
                  Heera Field in western offshore).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
