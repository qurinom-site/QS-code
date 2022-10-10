import React from "react";
import {useNavigate} from 'react-router-dom';
import Logo from "../../img/logo.png";
// import img from '../../img/Rectangle 4310.png';
// import img1 from '../../img/Rectangle 4311.png';
import "./navbar.css";


const Navbar = () => {

  const navigation= useNavigate();

  return (
    <nav className="navbar navbar-expand-lg n-bag">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="" width="100%" height="35" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="nav-content">
        <div className="d-flex justify-content-end">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/services"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/services')
                  }}
                >
                  Services                
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/uidesign">UX/UI Modernisation</a></li>
                  <li><a className="dropdown-item" href="/productdevelopment">Product Development</a></li>
                  <li><a className="dropdown-item" href="/digitalmarketing">Digital Marketing</a></li>
                  <li><a className="dropdown-item" href="/digitaltransformation">Digital Transformation</a></li>
                  <li><a className="dropdown-item" href="/healthcare">Health Care</a></li>
                  <li><a className="dropdown-item" href="/itconsulting">IT Consulting</a></li>
                  <li><a className="dropdown-item" href="/cloudcomputing">Cloud Migration</a></li>                   
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/products"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/products')
                  }}
                >
                  Products
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/qdisplay">Q Display</a></li>
                  <li><a className="dropdown-item" href="/qhc">QHC</a></li>
                  <li><a className="dropdown-item" href="/biscuit">Biscuit</a></li>
                  <li><a className="dropdown-item" href="/showcase">Showcase</a></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle active"
                  href="/company"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={()=>{
                    navigation('/company')
                  }}
                >
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/aboutus">About Us</a></li>
                  <li><a className="dropdown-item" href="/leadership">Leadership</a></li>
                  <li>
                    <a className="dropdown-item" href="/contactus">Contact Us</a>
                  </li>
                </ul>
                </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/careers">Career</a>
              </li>
              <li className="nav-item active">
                {/* <img className="nav-link" src={img} alt="img" id="google_translate_element"/> */}
                <a className="nav-link" id="google_translate_element">
                {/* <span>
                  <img src={img} alt="img" />
                  <img src={img1} alt="img1" />
                </span> */}
                  </a>
              </li>
            </ul>
          </div>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
