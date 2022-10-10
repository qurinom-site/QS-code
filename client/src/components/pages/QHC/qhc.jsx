import React from "react";
import "./qhc.css";
import Img1 from "../../../img/image-320.jpg";
import Img2 from "../../../img/arrow.svg";

const QHR = () => {
  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="row text-center">
          <div className="col-md-6 col-sm-6 align-self-center q-left">
            <h1 className="qh-heading text-capitalize mt-3 pb-3">q health care</h1>
            <p className="qh-para mt-3">
            We provide customised short-term courses to all mentioned members at a subsidised rate to improve hospital management abilities, clinical skills, patient care skills, and personality/communications skills.
             Professional and financial stability, as well as the enjoyment of our members, are our main priorities.
            </p>
          </div>
          <div className="col-md-6 col-sm-6 align-self-center hea1">
            <img src={Img1} alt="img1" className="qh-img-1" />
          </div>
        </div>
        <div className="row justify-content-start">
          <div className="col-6 align-self-center">
            <h3 className="qh-key text-center text-capitalize pb-4">
            ADDITIONAL LINE OF BUSINESS FOR QHC :-
            </h3>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8 align-self-center">
            <ul className="list ">
              <li className="qh-list">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                Consultation for the establishment of the small, medium, and large-scale hospitals.
              </li>
              <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                	Due diligence services for hospital sales and purchases are provided by our skilled teams of lawyers, accountants, real estate specialists, doctors, and business consultants.
              </li>
              <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                	We let manufacturers of medical devices and consumables utilise our platform to promote their products.
              </li>
              <li className="qh-list mb-3">
                <span>
                  <img src={Img2} alt="img2" className="q-arrow mt-2 px-2" />
                </span>
                We provide medical instruments and consumables manufacturers to
                use our platform for the promotion of their businesses.
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-5 mb-5 justify-content-end">
        <div className="align-items-center align-self-center text-center">
                                <a href="/contactus" className="btn btn-lg btn-warning q-btn-1">
                                    <span className="l-gs text-capitalize">Query</span>
                                </a>
                            </div>
        </div>
      </div>
    </div>
  );
};

export default QHR;
