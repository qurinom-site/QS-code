import React, {useState} from "react";
import "./landing.css";
// import {useNavigate } from 'react-router-dom';
import img1 from "../../../img/1c70b8c98a50c585d45bad9ea0265e2f.gif";
import img2 from "../../../img/0792d5b8b78f894dca91c1d05b528632.gif";
import img3 from "../../../img/Rectangle 4312.svg";
import img4 from "../../../img/Girl with tablet and working process on desktop.svg";
import img5 from "../../../img/snowball.svg";
import img6 from "../../../img/businesswoman in blue suit with phone looking aside.svg";
import img7 from '../../../img/Icon.svg';
import img8 from '../../../img/Saly-43.svg';
import img9 from '../../../img/Hoedi1.jpg';
import img10 from "../../../img/pavan kumar.JPG";
import img12 from "../../../img/Rectangle 4327.png";
import img13 from "../../../img/Man chatting on dating site.svg";
import img11 from '../../../img/Godfree.jpeg';
import img14 from '../../../img/Rectangle 4328.png';
import img15 from '../../../img/Ellipse 3 (1).png';
import img16 from '../../../img/Ellipse 5.png';
import video from '../../pages/Video/qs video.mp4';
import { useSelector, useDispatch, } from 'react-redux'
import { editUserEmail, removeUserContactResponceStatus, userContactPost } from "../../../redux/reducer";
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';

const Landing = () => {
    const { userContactResponceStatus,userEmail } = useSelector(store => store.userContact)

        const [userContact, setUserContact] = useState({
            name: null,
            mobile: null,
            email: userEmail || null
           
        });
    
        const [wait, setwait] = useState(false)
    
        const dispatch = useDispatch()
        let navigation = useNavigate();

        const PHONE_REGEXP = /^[6789]\d{9}$/;
    
        if (userContactResponceStatus && wait) {
            setTimeout(() => {
                dispatch(removeUserContactResponceStatus())
            }, 3000)
            setwait(false)
        }
    const handleForm = (e) => {
        console.log(userContactPost(userContact));
          e.preventDefault();
         if (!PHONE_REGEXP.test(+userContact.mobile))
             return alert("Please enter a valid phone number");
           dispatch(userContactPost(userContact))
           dispatch(editUserEmail(userContact.email))
           setwait(!wait)
           setUserContact({
               name: null,
               mobile: null,
               email: null
              
      });
  
      e.target.name.value = "";
      e.target.mobile.value = "";
      e.target.email.value = "";
      
}

  return (
    <>
      <div className="main-wrapper">
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="row justify-content-center mt-5">
                    <div className="col align-items-center align-self-center">
                        <img src={img3} alt="img3" className="l-img-3" />        
                    </div>
                </div>
                <div className="row justify-content-center l-tr">
                    <div className="col-md-6 align-items-center align-self-center l-content-para">
                        <div className="row justify-content-center">
                            <h1 className="l-heading text-capitalize">
                                digital transformation with <span style={{color: "#FDA055"}}> qurinom solutions</span>
                            </h1>
                        </div>
                        <div className="row justify-content-center mt-3 mt-md-0">
                            <p className="la-para">
                            Qurinom Solutions is a worldwide product and service-based IT start-up armed with innovative R&D, implementation, and rapid delivery. We specialise in Artificial Intelligence, IoT and Embedded Systems based Android 
                            & IOS Mobile Applications, UX/UI Modernisation, Cloud & Digital Transformation, Healthcare Services, Structural & Interior Design, and we also provide hedge clients with Digital Marketing & Consultancy in cross-functional Domains.
                            </p>
                        </div>
                        <div className="row justify-content-center mt-5">
                            <div className="col-sm-6 align-items-center align-self-center text-center">
                                <a href="/contactus" className="btn btn-lg btn-warning l-btn-1">
                                    <span className="l-gs text-capitalize">get started</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 align-items-center align-self-center">
                        <img src={img4} alt="img4" className="l-img-4 mt-5 mt-md-0" />
                    </div>
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-sm-2 align-items-start align-self-start">
                    <img src={img5} alt="img5" className="l-img-5 mt-5 mt-sm-0" />
                </div>
                <div className="col-sm-6 align-items-center text-center wqs-col">
                    <h1 className="l-wqs text-capitalize">
                        why qurinom solutions?
                    </h1>
                    <div>
                        <img src={img1} alt="img1" className="l-img-1"/>
                    </div>
                    <p className="l-wqs-para">
                        We will help a client's problems to develop the products they have with high quality
                    </p>
                    <a href="/products" className="l-wqs-link text-decoration-underline">
                        Learn more about our plans
                    </a>
                </div>
                <div className="col-sm-4 align-items-center align-self-center">
                    <img src={img6} alt="img6" className="l-img-6 offset-9 offset-sm-4 offset-lg-6" />
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-0 mt-2 l-cards-gap">
                <div className="col">
                    <div class="card h-100 l-cards">
                        <div className="row g-3">
                            <div className="col-3 align-items-start align-self-start mt-4">
                                <p className="l-num">01</p>
                            </div>
                            <div className="col-9 align-items-center align-self-center">
                                <h5 className="card-title l-dcc text-capitalize">
                                	Digital Core Capabilities
                                </h5>
                            </div>
                        </div>  
                        <div class="card-body" style={{backgroundColor: "#E6F0F3"}}>
                            <p className="card-text l-t1">
                            we creatively organize and provide best services with our optimal capabilities.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100 l-cards">
                        <div className="row g-0">
                            <div className="col-3 align-items-start align-self-start mt-4">
                                <p className="l-num">02</p>
                            </div>
                            <div className="col-9 align-items-center align-self-center">
                                <h5 className="card-title l-dcc text-capitalize">
                                	Customer Centric
                                </h5>
                            </div>
                        </div>  
                        <div class="card-body" style={{backgroundColor: "#E8FFFB"}}>
                            <p className="card-text l-t1">
                            we go to great lengths to meet the expectations of our clients and improve them accordingly.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100 l-cards">
                        <div className="row g-0">
                            <div className="col-3 align-items-start align-self-start mt-4">
                                <p className="l-num">03</p>
                            </div>
                            <div className="col-9 align-items-center align-self-center">
                                <h5 className="card-title l-dcc text-capitalize">
                                	Integrity
                                </h5>
                            </div>
                        </div>  
                        <div class="card-body" style={{backgroundColor: "#EDFBF3"}}>
                            <p className="card-text l-t1">
                             we believe in honesty with our clients and we uphold our integrity as per industrial standards and global principles.
                            </p> 
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card h-100 l-cards">
                        <div className="row g-0">
                            <div className="col-3 align-items-start align-self-start mt-4">
                                <p className="l-num">04</p>
                            </div>
                            <div className="col-9 align-items-center align-self-center">
                                <h5 className="card-title l-dcc text-capitalize">
                                	Keeping ahead
                                </h5>
                            </div>
                        </div>  
                        <div class="card-body" style={{backgroundColor: "#FBEFEE"}}>
                            <p className="card-text l-t1">
                            we help our clients to keep moving forward in this fast changing world.
                            </p> 
                        </div>
                    </div>
                </div>                
            </div>
            <div className="row justify-content-start">
                <div className="col-sm-6 align-items-center align-self-center">
                    <img src={img2} alt="img2" className="l-img-2 mt-5" />
                </div>
            </div>
            <div className="row justify-content-center mt-5 mt-lg-0">
                <div className="col-sm-8 align-items-center align-self-center">
                    <h3 className="l-os text-capitalize text-center">our services</h3>
                </div>
            </div>
            {/* <div className="row justify-content-center g-5 mt-3">
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize text-decoration-underline text-primary">all</p>
                </div>
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">brand</p>
                </div>
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">UI/UX design</p>
                </div>
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">logo</p>
                </div>
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">illustration</p>
                </div>
                <div className="col-1 col-sm-1 align-items-center align-self-center text-center">
                    <p className="l-smt text-capitalize">marketing strategy</p>
                </div>
                <div className="col-1 align-items-start align-self-start">
                    <img src={img8} alt="img8" className="l-img-8" />
                </div>
            </div> */}
            <div className="row g-5 mt-1 justify-content-center pb-5">
                <div className="col-md-3">
                    <div className="card l-card l-bg-1 text-center">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-fc card-title text-capitalize">
                                free consultation
                            </h3>
                            <p className="card-text l-t2">
                                we are here to help you with free consultations and to help you understand the concepts as well.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card l-card l-bg-2 text-center">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-ep card-title text-capitalize">
                            	Quick estimates
                            </h3>
                            <p className="card-text l-t2">
                            we help our clients to estimate their budgets and help them with all our resources.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card l-card l-bg-1 text-center">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-qe card-title text-capitalize">
                            	Easy payments 
                            </h3>
                            <p className="card-text l-t2">
                            we make easy payments and there are no long waits for money transfer.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card l-card l-bg-2 text-center">
                        <img src={img7} alt="img7" className="l-img-7" />
                        <div className="card-body">
                            <h3 className="l-ep card-title text-capitalize">
                            	No more long waits
                            </h3>
                            <p className="card-text l-t2">
                            we provide our service with utmost speed and perfection.
                            </p>
                        </div>
                    </div>
                </div>
             </div>
 
            <div className="row justify-content-center mt-5 mt-sm-0 mt-lg-5">
                <div className="col-sm-8 align-items-center align-self-center text-center">
                    <h4 className="l-oct text-capitalize">
                        our creative team
                    </h4>
                </div>
            </div>
            <div className="row justify-content-center mt-sm-5 mt-md-0">
            <div className="col-sm-2 align-items-start align-self-start">
                    <img src={img12} alt="img12" className="l-img-12" />
                </div>
                <div className="col-sm-10 align-items-center align-self-center text-center">
                    <p className="l-para-1">
                        From bad websites that aren’t representative of your business. Its time to stop wasting money on stinky marketing. Our Creative Team will help you look good, connect better with your clients, and up your sales game.
                    </p>
                </div>
            </div>
            <div className="row g-5 mt-5 mt-lg-0 container">
                <div className="col-md-4" >
                    <div className="card l-cards text-center">
                        <img src={img10} alt="img10" className="l-img-10 card-img-top" />
                        <div className="card-body align-self-center">
                            <h5 className="card-title text-capitalize l-pk">pavan kumar</h5>
                            <p className="card-text l-t3">Founder & CEO</p>
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card l-cards text-center">
                        <img src={img9} alt="img9" className="l-img-9 card-img-top" />
                        <div className="card-body align-self-center">
                            <h5 className="card-title text-capitalize l-hpw">hoedi p. wijono</h5>
                            <p className="card-text l-t3">Executive Partner</p>
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card l-cards text-center">
                        <img src={img11} alt="img11" className="l-img-11 card-img-top" />
                        <div className="card-body align-self-center">
                            <h5 className="card-title text-capitalize l-gd">godfree dzebu</h5>
                            <p className="card-text l-t3">CTO (Technology Director)</p>
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-3">
                    <div className="card l-cards text-center">
                        <img src={img9} alt="img9" className="l-img-9 card-img-top" />
                        <div className="card-body align-self-center">
                            <h5 className="card-title text-capitalize l-hpw">hoedi p. wijono</h5>
                            <p className="card-text l-t3">Executive Partner</p>
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div> */}
                 {/* <div className="col">
                    <div className="card h-100 l-cards text-center">
                        <img src={img9} alt="img9" className="l-img-9 card-img-top" />
                        <div className="card-body align-self-center">
                            <h5 className="card-title text-capitalize l-djs">dr. jitendra singh</h5>
                            <p className="card-text l-t3">CHO (Chief Healthcare Officer)</p>
                        </div>
                        <div className="card-footer align-self-center">
                            <a href="https://www.facebook.com/qurinomsolutions/" className="card-link"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/" className="card-link"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://twitter.com/qurinom?s=08" className="card-link"><i className="fa-brands fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/company/qurinomsolutions" className="card-link"><i className="fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>  */}
            </div>
            <div className="row justify-content-center g-2 align-baseline mt-lg-5">
                <video src={video} width="750" height="500" className="l-video" controls autoPlay muted>
                </video>
                {/* <ReactPlayer className="l-video"
                    url="https://www.youtube.com/watch?v=N3AkSS5hXMA" type="video/mp4"
                /> */}
            </div>
            <div className="row bg-soft-info justify-content-around mt-5 mb-5">
                <div className="col-md-7 align-items-center align-self-center text-center py-md-3">
                    <div className="row justify-content-center mt-5 mt-md-2 pb-3">
                        <div className="col-sm-8 col-md-10 align-items-center align-self-center">
                            <h2 className="l-sysst text-capitalize">
                                start your success story today
                            </h2>
                        </div>
                    </div>
                    {/* <div className="row justify-content-center">
                        <div className="col-sm-8 align-items-center align-self-center">
                            <p className="l-para-2">
                                Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit
                            </p>
                        </div>
                    </div> */}
                    <form onSubmit={handleForm}>
                <div className="row justify-content-center">
                <div className="form-group col-md-8">
                             <input 
                                            value={userContact.name} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    name: e.target.value })
                                            }} 
                                            type="text" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your Name" 
                                            name="name"
                                            required 
                                            />
                             </div>
                                 <div className="form-group col-md-8">
                                       <input
                                             value={userContact.mobile} 
                                             onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    mobile: e.target.value })
                                            }} 
                                            type="number" 
                                            className="form-control l-form-control mt-2" 
                                            placeholder="Mobile Number" 
                                            name="mobile"
                                            required 
                                            />
                             </div>
                             <div className="form-group col-md-8">
                             <input 
                                            value={userContact.email} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    email: e.target.value })
                                            }} 
                                            type="email" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your @mail Address" 
                                            name="email"
                                            required 
                                            />
                             </div>
                 
                  {userContactResponceStatus && (userContactResponceStatus == 'success' ?
                            <Alert style={{ marginTop: '2%' }} severity="success">{userContactResponceStatus}!</Alert> :
                            <Alert style={{ marginTop: '2%' }} severity="error">{userContactResponceStatus}!</Alert>)}
                </div>
                <div className="col-sm-6 offset-3 form-group mt-5">
                    <input
                      type="submit"
                      className="btn btn-primary px-3 py-2 l-submitbtn"
                      value="Submit"
                    />
                  </div>
              </form>
                    {/* <div className="row justify-content-center">
                        <div className="col-sm-8 align-items-center align-self-center">
                        <div className="form-group">
                                            <input 
                                            value={userContact.name} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    name: e.target.value })
                                            }} 
                                            type="text" 
                                            className="form-control l-form-control" 
                                            placeholder="Enter Your Full Name" 
                                            name="name"
                                            />
                                            <input
                                             value={userContact.mobile} 
                                             onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    mobile: e.target.value })
                                            }} 
                                            type="number" 
                                            className="form-control l-form-control mt-2" 
                                            placeholder="Mobile Number" 
                                            name="mobile"
                                            />
                                            <input 
                                            value={userContact.email} 
                                            onChange={(e) => {
                                                setUserContact({ 
                                                    ...userContact, 
                                                    email: e.target.value })
                                            }} 
                                            type="email" 
                                            className="form-control l-form-control mt-2"
                                            placeholder="Enter Your @mail Address" 
                                            name="email"
                                            />
                                        </div>
                        </div>
                    </div>

                    <div className="row justify-content-center text-center mt-3">
                            <div className="col-4 align-items-center align-self-center" onClick={(e) => handleForm(e)}>
                             <a type="submit" className="btn btn-primary btn-lg l-btn-2">
                                <span className="l-contact text-capitalize">contact</span>
                             </a>
                            </div>
                    </div>

                        {userContactResponceStatus && (userContactResponceStatus == 'success' ?
                            <Alert style={{ marginTop: '2%' }} severity="success">{userContactResponceStatus}!</Alert> :
                            <Alert style={{ marginTop: '2%' }} severity="error">{userContactResponceStatus}!</Alert>)} */}
                </div>
                <div className="col-md-5 align-items-center align-self-center">
                    <img src={img13} alt="img13" className="l-img-13" />
                </div>
            </div>
            </div>
        </div>
    </>
  );
};

export default Landing;