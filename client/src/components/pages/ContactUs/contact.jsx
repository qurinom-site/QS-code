import React, {useState} from 'react';
import './contact.css';
import img from '../../../img/contact-map.jpg';
import { useSelector, useDispatch, } from 'react-redux'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import { editUserEmail, removeUserQueryFormResponceStatus, UserQueryForm } from '../../../redux/reducer';


const ContactUs = () => {
  const { userQueryFormResponceStatus, userEmail } = useSelector(store => store.userContact)

  const [userQueryForm, setuserQueryForm] = useState({ firstname: null, lastname: null, email: userEmail || null, query: null, mobile:null });
  const [wait, setwait] = useState(false)


  const dispatch = useDispatch()
  let navigation = useNavigate();
  const PHONE_REGEXP = /^[6789]\d{9}$/;

  if (userQueryFormResponceStatus && wait) {
    setTimeout(() => {
      dispatch(removeUserQueryFormResponceStatus())
    }, 2000)
    setwait(false)
  }

  const handleForm = (e) => {
    e.preventDefault();
    if (!PHONE_REGEXP.test(+userQueryForm.mobile))
      return alert("Please enter a valid phone number");
    dispatch(UserQueryForm({ ...userQueryForm }));
    dispatch(editUserEmail(userQueryForm.email));
    setwait(!wait);
    // setuserQueryForm({})

    setuserQueryForm({
      firstname: null,
      lastname: null,
      mobile: null,
      email: null,
      query: null,
    });

    e.target.fname.value = "";
    e.target.lname.value = "";
    e.target.email.value = "";
    e.target.phone.value = "";
    e.target.textarea.value = "";
  };


    return (
      <>
      <section className="container-fluid">
        <div className="row justify-content-center mt-5 mb-5" id="contact">
          <div className="contact-text col-lg-6 align-items-center align-self-center">
            <div className="row justify-content-center mt-5">
              <div className="col-sm-8 col-lg-12 align-items-center align-self-center">
                <h1 className="c-h1 text-center pb-4">Contact Us</h1>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-8 col-lg-12 align-items-center align-self-center">
                <h3 className="c-h3 text-center pb-3">Lets Work Together</h3>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-sm-10 col-lg-12 align-items-center align-self-center">
                <p className="c-para text-center">
                  Does UX Design has any impact on your audience and business? Yes it does a great deal.
                </p>
              </div>
            </div>
            <div class="row">
    <div class="col-md-3 px-4 c-aec">Address:</div>
    <div class="col-md-9 text-right text-capitalize c-para pb-3">Jakarta, Indonasia, soth africa (joburg), singapore, Hyderabad</div>
    <div class="col-md-3 px-4 c-aec">Email:</div>
    <div class="col-md-9 text-right c-para pb-4">consulting@qurinomsolutions.com</div>
    <div class="col-md-3 px-4 c-aec">Contact:</div>
    <div class="col-md-9 text-right c-para pb-5">+27833848842 || +919490684932</div>
  </div>
            <div className="row justify-content-center">
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d88.04952462217592!3d22.6757520733225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: "0" }}
  allowfullscreen=""
  loading="lazy"
></iframe>
              {/* <img src={img} alt="img" className="c-img"/> */}
            </div>
          </div>
          <div className="col-lg-6 align-items-center align-self-start">
            <div className="contact-form mt-5">
            <form onSubmit={handleForm}>
                <div className="row" style={{ lineHeight: "36px" }}>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputFirstName" className="mt-3">
                        First Name
                      </label>
                      <input
                        value={userQueryForm.firstname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            firstname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputFirstName"
                        required
                        name="fname"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label for="inputLastName" className="mt-3">
                        Last Name
                      </label>
                      <input
                        value={userQueryForm.lastname}
                        onChange={(e) => {
                          setuserQueryForm({
                            ...userQueryForm,
                            lastname: e.target.value,
                          });
                        }}
                        type="text"
                        className="form-control c-form-control"
                        id="inputLastName"
                        required
                        name="lname"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Email Address
                    </label>
                    <input
                      value={userQueryForm.email}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          email: e.target.value,
                        });
                      }}
                      type="email"
                      className="form-control c-form-control mt-2"
                      id="inputEmail"
                      required
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputEmail" className="mt-3">
                      Phone Number
                    </label>
                    <input
                      value={userQueryForm.mobile}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          mobile: e.target.value,
                        });
                      }}
                      type="number"
                      className="form-control c-form-control mt-2"
                      id="inputNumber"
                      required
                      name="phone"
                    />
                  </div>
                  <div className="form-group">
                    <label for="inputMessage" className="mt-3 text-capitalize">
                    What can we help you with?
                    </label>
                    <textarea
                      value={userQueryForm.query}
                      onChange={(e) => {
                        setuserQueryForm({
                          ...userQueryForm,
                          query: e.target.value,
                        });
                      }}
                      className="form-control c-form-control mt-2"
                      style={{ height: "112px" }}
                      placeholder="Type here..."
                      id="inputMessage"
                      rows="1"
                      required
                      name="textarea"
                    />
                  </div>
                  <div className="col-sm-6 offset-3 form-group mt-5 px-5">
                    <input
                      type="submit"
                      className="btn btn-primary px-5 py-3"
                      value="Submit"
                    />
                  </div>
                  {userQueryFormResponceStatus &&
                    (userQueryFormResponceStatus === "success" ? (
                      <Alert style={{ marginTop: "2%" }} severity="success">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ) : (
                      <Alert style={{ marginTop: "2%" }} severity="error">
                        {userQueryFormResponceStatus}!
                      </Alert>
                    ))}
                </div>
              </form>
              {/* <form onSubmit={handleForm}>
                <div className="row justify-content-center">
                  <div className="col-sm-6 align-items-center align-self-center">
                    <div className="form-group">
                        <label for="inputFirstName" className="mt-3">
                          First Name*
                        </label>
                        <input  
                        value={userQueryForm.firstname}
                      onChange={(e) => {
                        setuserQueryForm({ 
                          ...userQueryForm, 
                          firstname: e.target.value })
                      }} 
                      type="text" 
                      className="form-control c-form-control mt-2" 
                      id="inputFirstName" 
                      required 
                      />
                    </div>
                  </div>
                  <div className="col-sm-6 align-items-center align-self-center">
                    <div className="form-group">
                      <label for="inputLastName" className="mt-3">
                        Last Name*
                      </label>
                      <input 
                      value={userQueryForm.lastname}
                      onChange={(e) => {
                        setuserQueryForm({
                           ...userQueryForm, 
                           lastname: e.target.value })
                          }} 
                      type="text" 
                      className="form-control c-form-control mt-2" 
                      id="inputLastName" 
                      required 
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputEmail" className="mt-3">
                    Email Address*
                    </label>
                  <input
                   value={userQueryForm.email}
                    onChange={(e) => {
                      setuserQueryForm({ 
                        ...userQueryForm, 
                        email: e.target.value })
                    }} 
                    type="email" 
                    className="form-control c-form-control mt-2" 
                    id="inputEmail" 
                    required 
                    />
                </div>
                <div className="form-group">
                  <label for="inputEmail" className="mt-3">
                    Phone Number*
                    </label>

                  <input 
                   value={userQueryForm.mobile}
                   onChange={(e) => {
                      setuserQueryForm({ 
                        ...userQueryForm, 
                        mobile: e.target.value })
                    }} 
                    type="number" 
                    className="form-control c-form-control mt-2" 
                    id="inputNumber" 
                    required 
                    />
                </div>
                <div className="form-group">
                  <label for="inputMessage" className="mt-3">
                    What can we help you with?
                  </label>
                  <textarea 
                   value={userQueryForm.query}
                    onChange={(e) => {
                      setuserQueryForm({ 
                        ...userQueryForm, 
                        query: e.target.value })
                    }} 
                    className="form-control mt-2" 
                    placeholder="Type here..." 
                    id="inputMessage" 
                    rows="1" 
                    required 
                    />
                </div>
                <div className="offset-3 form-group mt-5 px-5">
                <input type="submit" className="btn btn-primary px-5 py-3" value="Submit" />
                </div>
                {userQueryFormResponceStatus && (userQueryFormResponceStatus == 'success' ?
                    <Alert style={{ marginTop: '2%' }} severity="success">{userQueryFormResponceStatus}!</Alert> :
                    <Alert style={{ marginTop: '2%' }} severity="error">{userQueryFormResponceStatus}!</Alert>)}
              </form> */}
            </div>
          </div>
        </div>
      </section>
    </>
    );
};

export default ContactUs;