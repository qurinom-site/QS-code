import React from "react";
import "./ui.css";
import Img1 from "../../../img/u-img-1.gif";
import Img2 from "../../../img/u-img-2.gif";
import Img3 from "../../../img/u-img-3.gif";
import Img4 from "../../../img/ui-arrow.svg";
import Img5 from "../../../img/u-m-img-1.gif";
import Img6 from "../../../img/u-img-4.gif";
import Img7 from "../../../img/u-m-img-2.gif";
import Img8 from "../../../img/u-img-5.gif";
import Img9 from "../../../img/u-m-img-3.gif";
import Img10 from "../../../img/u-img-6.jpeg";
import Img11 from "../../../img/u-img-7.jpeg";
import Img12 from "../../../img/u-img-8.jpeg";
import Img13 from "../../../img/u-img-9.jpeg";
import Img15 from "../../../img/u-img-11.gif";
import Img16 from "../../../img/u-img-12.gif";
import Img17 from "../../../img/u-img-13.gif";
import Img19 from "../../../img/u-img-15.png";

const ui = () => {
  return (
    <>
      <div class="main-wrapper">
        <div class="container-fluid">
          <div class="row justify-content-around mt-5">
            <div class="col-md-6 align-self-center align-items-center">
              <div class="row justify-content-start">
                <div class="col-md-3 align-items-start align-self-start">
                  <img src={Img1} alt="img-1" class="u-img-1" />
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-10 align-items-center align-self-center text-center">
                  <h1 class="u-heading text-capitalize">UX/UI design</h1>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12 align-items-center align-self-center text-center">
                  <p class="u-para">
                    Business and customer interactions begins with business
                    website begin the customer’s first point of contact. And
                    those first impressions matter very much so we can provide
                    long lasting and positive impression with our UI and can
                    provide a enthralling first impression. Qurinom solutions
                    excelled at transforming the kit and client requirements
                    into a bespoke design
                  </p>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12 align-items-center align-self-center text-center">
                  <h3 class="u-sm-head text-capitalize">how we do it?</h3>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-12 align-items-center align-self-center text-center">
                  <p class="u-sm-para">
                    UX (user experience) design is the process of designing
                    products and experiences that are efficient, effective, and
                    even delightful for users. So for this we focus on three
                    specific areas, they are:
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 align-self-center align-items-center">
              <img src={Img2} alt="img2" class="u-img-2" />
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-2 g-5 justify-content-around mt-5 align-baseline">
            <div class="col">
              <div class="card u-card">
                <div class="card-body text-center">
                  <h3 class="card-title text-capitalize u-aes">aesthetics</h3>
                </div>
                <img src={Img3} alt="img3" class="u-img-3" />
                <div class="card-footer">
                  <button
                    type="button"
                    class="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay"
                  >
                    <img src={Img4} alt="arrow" class="u-arrow" />
                  </button>
                  <div
                    class="modal fade"
                    id="overlay"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            aesthetics
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img src={Img5} alt="m-img1" class="u-m-img-1" />
                          <p class="overlay-para text-center mt-5">
                            We want to appeal the viewe of artistic sense to
                            grab their attention by using the concepts of theme,
                            style, color scheme, content presentation, and
                            visual elements. We use both static and dynamic
                            design elements like optimized images and
                            multimedia. Not only we make it appealing but also
                            compatabile across different screen size with
                            responsive web design.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <div class="card-body text-center">
                  <h3 class="card-title text-capitalize u-nav">navigation</h3>
                </div>
                <img src={Img6} alt="img4" class="u-img-4" />
                <div class="card-footer">
                  <button
                    type="button"
                    class="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay1"
                  >
                    <img src={Img4} alt="arrow" class="u-arrow" />
                  </button>

                  <div
                    class="modal fade"
                    id="overlay1"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            navigation
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img src={Img7} alt="m-img2" class="u-m-img-2" />
                          <p class="overlay-para text-center mt-5">
                            It can make the website easily accessible & helps to
                            go through the contents in a easy manner. If the
                            navigation is even a bit troublesome then the users
                            may feel it cumbersome to look thorough the website
                            and miss important details. So we provide every
                            possible way to make navigation easy and as per the
                            requirements of the user.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <div class="card-body text-center">
                  <h3 class="card-title text-capitalize u-vis">visuals</h3>
                </div>
                <img src={Img8} alt="img5" class="u-img-5" />
                <div class="card-footer">
                  <button
                    type="button"
                    id="btn-modal"
                    class="btn btn-outline-light float-end"
                    data-bs-toggle="modal"
                    data-bs-target="#overlay2"
                  >
                    <img src={Img4} alt="arrow" class="u-arrow" />
                  </button>
                  <div
                    class="modal fade"
                    id="overlay2"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5
                            class="modal-title text-capitalize"
                            id="exampleModalLabel"
                          >
                            visuals
                          </h5>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <img src={Img9} alt="m-img3" class="u-m-img-3" />
                          <p class="overlay-para text-center mt-5">
                            We engage the user with the required visual
                            appealand intuitive directional cues without losing
                            attention.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-start pb-3">
            <div class="align-items-center align-self-center">
              <h3 class="u-boouus text-capitalize">
              The Advantages of Our UX & UI Services
              </h3>
            </div>
          </div>
          <div class="row justify-content-center pb-5">
            <div class="col-md-11 align-items-center align-self-center">
              <p class="u-boouus-para text-start">
              We produce visually pleasing designs that focus on establishing your brand's identity in the market by utilising iconic images,
               cutting-edge tools, and technology that enable you to do more than you could have imagined.
              </p>
            </div>
          </div>
          <div class="row row-cols-2 row-cols-md-2 justify-content-around g-5">
            <div class="col">
              <div class="card u-card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={Img10} alt="img6" class="u-img-6" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-center">
                      <h4 class="card-title u-bs text-capitalize">
                      	Increases Sales
                      </h4>
                      <p class="card-text u-bs-para">
                      When done well, user experience design improves revenue by about one-third.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={Img11} alt="img7" class="u-img-7" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-center">
                      <h4 class="card-title u-au text-capitalize">
                        Enhances User Satisfaction
                      </h4>
                      <p class="card-text u-au-para">
                      Modern customers want everything to be not just easy and quick, but also visually appealing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={Img12} alt="img8" class="u-img-8" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-center">
                      <h4 class="card-title u-ius text-capitalize">
                      	  User Attraction
                      </h4>
                      <p class="card-text u-ius-para">
                      The excellent user interface results in increased user attractiveness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={Img13} alt="img9" class="u-img-9" />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body text-center">
                      <h4 class="card-title u-cl text-capitalize">
                      Customer Satisfaction
                      </h4>
                      <p class="card-text u-cl-para">
                      A great user experience design attracts new people and keeps them.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row justify-content-center mt-5">
            <div class="col-md-8 align-items-center align-self-center text-center">
              <h2 class="u-uum text-capitalize">UI / UX modernisation</h2>
            </div>
          </div>
          <div class="row row-cols-1 row-cols-md-3 g-5 justify-content-center pb-3">
            <div class="col">
              <div class="card u-card">
                <img src={Img15} alt="img11" class="u-img-11" />
                <div class="card-body text-center">
                  <h4 class="card-title text-capitalize u-ma">
                    mobile application
                  </h4>
                  <p class="card-text u-ma-para">
                  Our skilled designers create an interface that captures the attention of the audience, resulting in maximum ROI.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <img src={Img16} alt="img12" class="u-img-12" />

                <div class="card-body text-center">
                  <h4 class="card-title text-capitalize u-wd">web designs</h4>
                  <p class="card-text u-wd-para">
                  We provide a strong user experience by creating designs that are simple to use, user-friendly, and responsive.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card u-card">
                <img src={Img17} alt="img13" class="u-img-13" />
                <div class="card-body text-center">
                  <h4 class="card-title text-capitalize u-wa">
                    web application
                  </h4>
                  <p class="card-text u-wa-para">
                  Our skilled designers create an interface that captures the attention of the audience, resulting in maximum ROI.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-5 justify-content-center pb-5">
              <img src={Img19} alt="img15" class="u-img-15" />
          </div>
          </div>
            </div>
      </div>
    </>
  );
};

export default ui;
