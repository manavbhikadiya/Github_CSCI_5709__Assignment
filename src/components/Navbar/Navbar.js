import React from "react";
import "./Navbar.css";
import { BsFillBellFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" style={{color:"#b91a20", fontWeight:"bold", fontSize:"25px"}} href="/">
          Navbar
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" style={{fontWeight:"bold"}} aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" style={{color:"#b91a20", fontWeight:"bold"}} href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{fontWeight:"bold"}}>
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" style={{fontWeight:"bold"}}>
                SignUp
              </a>
            </li>
          </ul>
          <div className="notification-icon">
            <BsFillBellFill/>
          </div>
          <div className="d-flex profile">
            <img
              className="profile-image"
              alt="profileimage"
              src={require("../../assets/profile.jpg")}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
