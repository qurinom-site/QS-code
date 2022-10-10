import React from 'react';
import './company.css';
import img1 from '../../../img/Group171.svg';
import img2 from '../../../img/Group12.svg';
import img3 from '../../../img/Group7.svg';
import img4 from '../../../img/Group5.svg';
import img5 from '../../../img/Group5.svg';
import img6 from '../../../img/Group1.png';
import img7 from '../../../img/Group2.png';
import img8 from '../../../img/Group95.svg';
import img9 from '../../../img/Group108.svg';
import img10 from '../../../img/Group126.svg';
import img11 from '../../../img/Group115.svg';


export const Company = () => {
  return (
    <>
    <div className="banner">
         <div className="container">
             <div className="row justify-content-between align-items-center align-self-center text-center">
                            <h1 className="co-heading text-capitalize">
                            Our Organization
                            </h1>
                        <div className="row justify-content-center">
                            <p className="co-para text-muted">
                            Qurinom Solutions is a global product and service-based IT start-up that specialises in innovative R&D, implementation, and rapid delivery.     
We specialise in Artificial Intelligence, IoT and Embedded Systems based Android & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services, Structural & Interior Design, and we also provide hedge clients with Digital Marketing & Consultancy in cross-functional Domains.

                            </p>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-4 align-items-center align-self-center pb-3">
                                <a href="/contactus" className="btn btn-lg btn-warning">
                                    <span className="text-capitalize">get started</span>
                                </a>
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 offset-md-3">
                            <img src={img1} alt="" />
                            </div>
                        </div>
                </div>
    </div>
</div>
<div className="content-wrapper">
    <div className="container">
        <section className="row justify-content-between align-items-center align-self-center text-center pb-5">
            <div className="co-header co-left">
                <h2>A Digital Startup</h2>
                <p className="section-subtitle text-muted">We are a digital startup that focuses on solving complicated business challenges.</p>
            </div>
            <div className="row pb-5">
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img2} alt="" className="img-icons" />
                        <h5 className="py-3">245<br />
                            Happy Customers</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                            <p className="readmore-link"></p>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img3} alt="" className="img-icons" />
                        <h5 className="py-3">10+<br />
                            Winning Awards</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                            <p className="readmore-link"></p>
                        </a>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="features-width">
                        <img src={img4} alt="" className="img-icons" />
                        <h5 className="py-3">15<br />
                            Industries Served</h5>
                        <p className="text-muted"></p>
                        <a href="#">
                        </a>
                    </div>
                </div> <div className="col-md-3">
                    <div className="features-width">
                        <img src={img5} alt="" className="img-icons" />
                        <h5 className="py-3">155<br />
                            Projects Delivered
                            </h5>
                        <p className="text-muted"></p>
                        <a href="#">
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <div className="row pb-5" style={{paddingLeft: "30px"}}>
                <div className="col-md-7 co-left" data-aos="fade-right" style={{paddingTop: "120px"}}>
                    <h3>Talent Can Be Found Anywhere</h3>
                    <div className="p-0">
                        <p className="pt-3 text-muted">
                        All of our services are based on our commitment to providing brand exposure, traffic, and leads by combining content, marketing, and sales. Each of our Business Hubs connects to any digital marketing solution you want.</p>
                        <p className="font-weight-medium text-muted"></p>
                    </div>
                </div>
                <div className="col-md-5 p-0 img-digital grid-margin grid-margin-lg-0" data-aos="fade-left">
                    <img src={img6} alt="" className="img-fluid" />
                </div>
        </div>
            <div className="row align-items-center pb-5">
                <div className="col-md-5" data-aos="fade-right">
                    <img src={img7} alt="" className="img-fluid" /> 
                </div>
                <div className="col-md-7 co-left" data-aos="fade-left" style={{paddongTop: 0}}>
                    <h3>Why Should You Pick Us?</h3>
                    <div className="p-0">
                        <p className="pt-3 text-muted">'QS' is dedicated to assisting its clients in achieving their objectives, personalising their experiences, offering an innovative atmosphere, and making a difference. We are continuously working to deliver solutions due to our strong connection with customer projects.</p>
                    </div>
                </div>
            </div>
        
        <section className="case-studies pb-5" id="case-studies-section">
            <div className="row grid-margin">
            <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap bg-primary">
                   < div className="co-card-image">
                      <img src={img8} className="case-studies-card-img" alt="" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap">Our comprehensive portfolio of UI/UX Solutions is dedicated to offering a distinct digital experience through captivating designs for both websites and mobile applications.</div>
                </div>
            </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">Designing a Website</h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap1 bg-warning">
                   < div className="co-card-image">
                      <img src={img9} className="case-studies-card-img" alt="" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap1">We are transforming your company concept into a user-friendly, high-end mobile app for both Android and iOS.</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">Website Development</h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap2"style={{backgroundColor: "violet"}}>
                   < div className="co-card-image">
                      <img src={img10} className="case-studies-card-img" alt="" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap2">We build and promote brands with superior ROI-driven online marketing solutions encompassing a wide variety of digital disciplines in the era of viral trends, allowing your business to take off with a flight!</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">Marketing on the Internet</h5>
             </div>
           </div>
           <div className="col-12 col-md-6 col-lg-3 stretch-card mb-3 mb-lg-0" data-aos="zoom-in">
            <div className="card color-cards">
            <div className="card-body p-0">
            <div class="hoverwrap3 bg-success">
                   < div className="co-card-image">
                      <img src={img11} className="case-studies-card-img" alt="" />
                   </div>
                <div className="card-desc-box d-flex align-items-center justify-content-around">
                     <div class="hovercap3">Qurinom Solution is a one-stop shop for all of your challenging company IT Consultancy concerns.</div>
                </div>
               </div>
             </div>
           </div>
             <div className="card-details text-center pt-4">
                 <h5 className="m-0 pb-1">IT Consultation</h5>
             </div>
           </div>
            </div>
        </section>
                </div>
                </div>
                </>

  )
}

