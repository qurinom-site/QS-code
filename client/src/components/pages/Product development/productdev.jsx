import React from "react";
import "./productdev.css";
import img2 from '../../../img/room.png';

const product = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-self-center">
            <div className="col-md-6 align-self-center">
            <div className="align-items-center text-center align-self-center">
              <h1 className="p-heading text-capitalize text-center pt-5 pb-3">
                product development
              </h1>
            </div>
              <p className="p-para text-center">
              We'll guide you through the process of developing your idea into a commercial product. Our team of Business Analysts, Technical Architects, 
              and Developers transform your concept into an innovative solution with exceptional design and a flawless interface.
              </p>
            </div>
            <div className="col-md-6 align-items-center align-self-center">
          <img src={img2} alt="img2" className="p-img-2" />
        </div>
        </div>
          <div className="row justify-content-start">
            {/* <div className="col-2 align-items-center align-self-center">
              <img src={img1} alt="img1" className="p-img-1" />
            </div> */}
              <div className="row">
              <h3 className="p-wwd text-center text-capitalize">
                what we do?
              </h3>
              </div>
              <div className="row justify-content-center pb-5">
              <p className="p-wwd-para text-center">
                Our team of Business Analysts, Technical Architects, and
                Developers shape your idea into an out of the box product with
                exemplary design & seamless interface with following
                principles.
              </p>
          </div>
          </div>
    <div className="row pb-5">
    <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_one"><i class="fa fa-globe"></i></span>
            <p> Your target market is the consumer profile you’re building your product for. These are your potential customers. </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_two"><i class="fa fa-anchor"></i></span>
            <p>When you have a new product concept, it’s a good idea to evaluate your existing product portfolio. Are there existing products that solve. </p>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6">
          <div class="item"> <span class="icon feature_box_col_three"><i class="fa fa-hourglass-half"></i></span>
            <p>While you don’t need a detailed report of the product functionality just yet, you should have a general idea of what functions it will serve. </p>
          </div>
        </div>
    </div>
  </div>
  );
};

export default product;
