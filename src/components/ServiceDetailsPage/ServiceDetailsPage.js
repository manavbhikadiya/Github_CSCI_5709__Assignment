import React from "react";
import "./ServiceDetailsPage.css";
import { FaStar, FaStarHalfAlt, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const ServiceDetailsPage = () => {
  return (
    <div className="container">
    <div className="backarrowContainer">
      <FaArrowLeft style={{marginTop: "5px"}}/>
      <NavLink to="/" style={{marginLeft: "20px", textDecoration: "none", color: "black"}}>Back</NavLink>
    </div>
      <div className="row">
        <div className="col-sm-4">
          <div className="leftsideContent">
            <div className="profileImageContainer">
              <img
                className="profileImage"
                alt="profile"
                src={require("../../assets/Sarah.jpg")}
              />
            </div>
            <div className="content">
              <p className="titleName">Lisa Johnson</p>
              <p className="subtitle">Interior Designer</p>
            </div>
            <div className="appointmentbtnContainer">
              <div className="appointmentbtn">
                <p>Book Appointment</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="rightSideContent">
            <div className="priceRangesContainer">
              <p className="sectiontitle">Price Ranges</p>
              <p className="price">$500 - $700</p>
            </div>
            <div className="aboutcontainer">
              <p className="sectiontitle" style={{ marginTop: "40px" }}>
                About Me
              </p>
              <p className="abouttext">
                I am a skilled and experienced professional in the field of
                interior design. With over 10 years of experience, I
                successfully completed numerous residential and commercial
                projects, earning a reputation for my creative designs and
                attention to detail. I holds a degree in interior design from a
                reputable university and has worked with renowned design firms
                before deciding to offer my services as an independent
                contractor.
              </p>
            </div>
            <div className="reviewsContainer">
              <p className="sectiontitle" style={{ marginTop: "40px" }}>
                Ratings & Reviews
              </p>
              <div className="ratings">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <div className="commentContainer">
                <div className="comment">
                  <div className="profile">
                    <img
                      src={require("../../assets/profile.jpg")}
                      className="profile-image"
                      alt="profile"
                    />
                  </div>
                  <div>
                    <p>
                      Lisa is a good interior designer. She styled my home
                      according to my interest
                    </p>
                  </div>
                </div>
                <div className="comment">
                  <div className="profile">
                    <img
                      src={require("../../assets/profile.jpg")}
                      className="profile-image"
                      alt="profile"
                    />
                  </div>
                  <div>
                    <p>
                      Lisa is a good interior designer. She styled my home
                      according to my interest
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
