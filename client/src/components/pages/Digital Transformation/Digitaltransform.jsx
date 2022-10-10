import React from "react";
import "./digitaltransform.css";
import Img3 from "../../../img/webdev.png";
import Img4 from "../../../img/drawn.png";
import Img5 from "../../../img/dt-img-5.png";
import Img6 from "../../../img/marketing.png";
import Img7 from "../../../img/create.png";
import Img8 from "../../../img/concept.png";
import Img9 from "../../../img/cloud-hosting.png";

const Digitaltransformation = () => {
  return (
    <>
      <div className="dt-main-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h1 className="dt-heading text-capitalize">
                    digital transformation
                  </h1>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-para">
                  We enable your enterprise-wide business transformation to use technology and digital assets.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center py-5">
              <img src={Img3} alt="img3" className="dt-img-3" />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-self-center align-items-center">
              <img src={Img4} alt="img4" className="dt-img-4" />
            </div>
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center">
                  <h2 className="text-capitalize">
                  	AI & ML
                  </h2>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <h5 className="text-capitalize">
                  AI, Machine Learning, and Deep Learning-enabled apps
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-8 align-items-center align-self-center">
                  <p className="dt-aiml-para">
                  We employ cutting-edge technology to ensure that your apps are equipped with AI, Machine Learning, or Deep Learning as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize">re - engineering</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <h5 className="text-capitalize">
                  Re-engineering monolithic systems to the microservices architecture
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-re-para">
                  We re-engineer your architecture to ensure that you are using the most advanced technologies available.
                  </p>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-md-5 align-items-center align-self-center">
                  <img src={Img5} alt="img5" className="dt-img-5" />
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
              <img src={Img6} alt="img6" className="dt-img-6" />
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center">
              <img src={Img7} alt="img7" className="dt-img-7" />
            </div>
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center">
                  <h2 className="text-capitalize">embedded systems</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <h5 className="text-capitalize">
                  Embedded System Support
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-es-para">
                  Our technocrats will help you select the best software framework and then redefine your embedded system.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-md-6 align-items-center align-self-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-10 align-items-center align-self-center">
                  <h2 className="text-capitalize">digital strategy</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-3">
                <div className="col-md-10 align-items-center align-self-center">
                  <h5 className="text-capitalize">
                  Creating a Digital Strategy
                  </h5>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-ds-para">
                  A Digital Strategy is required to create a brand, and we are here to alter your Digital Capabilities.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
              <img src={Img8} alt="img8" className="dt-img-8" />
            </div>
          </div>
          <div className="row justify-content-between mb-5">
            <div className="col-md-6 align-items-center align-self-center">
              <img src={Img9} alt="img9" className="dt-img-9" />
            </div>
            <div className="col-md-6 align-self-center align-items-center text-center">
              <div className="row justify-content-center">
                <div className="col-md-12 align-items-center align-self-center">
                  <h2 className="text-capitalize">cloud compluting</h2>
                </div>
              </div>
              <div className="row justify-content-center mt-4">
                <div className="col-md-10 align-items-center align-self-center">
                  <p className="dt-cc-para">
                  We extensively examine the company's processes and shift resources to dependable Cloud platforms, simplifying data administration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Digitaltransformation;
