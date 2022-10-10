import React from "react";
import "./cloud.css";
import Img1 from "../../../img/business-employee-working-on-laptop-4388424-3662704.png";

export const Cloudcomputing = () => {
  return (
    <>
      <section id="features" className="section-padding">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title wow fadeInDown pb-4 mt-5">Cloud Computing</h2>
            <p className="cl-para pb-5">
            By evaluating and moving your data to a dependable Cloud platform, Qurinom Solutions ensures that your company's assets are moved to Clouds. 
            We make living and the relocation process easier
            </p>
            <div className="shape wow fadeInDown"></div>
          </div>
          <div className="row pb-5">
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-left">
                <div className="box-item animated wow fadeInLeft">
                  <span className="icon">
                    <i className="fas fa-rocket"></i>
                  </span>
                  <div className="text">
                    <h4>Strategy for the Cloud</h4>
                    <p className="text-justify">
                    We describe the best-suited Cloud strategies based on your company's demands to meet the expectations.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.6s"
                >
                  <span className="icon">
                    <i className="fas fa-tablet-alt"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud Administration</h4>
                    <p>We organise and administer the Clouds while simplifying data management.</p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInLeft"
                  data-wow-delay="0.9s"
                >
                  <span className="icon">
                    <i className="fas fa-cog"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud Safety</h4>
                    <p className="text-xl-justify">
                    Our cloud security guarantees a safe cloud environment since we prioritise a secure workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="show-box animated wow fadeInUp">
                <img src={Img1} alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
              <div className="content-right">
                <div className="box-item animated wow fadeInRight">
                  <span className="icon">
                    <i className="fas fa-pen-nib"></i>
                  </span>
                  <div className="text">
                    <h4>Migration to the Cloud</h4>
                    <p className="text-xl-centre">
                    In a coordinated manner, all of your company's operations are compiled as digital data on Clouds.
                    </p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <span className="icon">
                    <i className="fas fa-layer-group"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud computing data</h4>
                    <p>We examine your business carefully and advise you on which data must be migrated to the Clouds.</p>
                  </div>
                </div>
                <div
                  className="box-item animated wow fadeInRight"
                  data-wow-delay="0.9s"
                >
                  <span className="icon">
                    <i className="fas fa-feather-alt"></i>
                  </span>
                  <div className="text">
                    <h4>Cloud Evaluation</h4>
                    <p>
                    Our preliminary evaluation will discover application candidates that are suited for cloud migration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

