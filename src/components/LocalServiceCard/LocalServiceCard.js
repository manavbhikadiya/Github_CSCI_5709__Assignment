import React from "react";
import "./LocalServiceCard.css";
import { FaMapMarkerAlt, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const LocalServiceCard = () => {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={require("../../assets/Sarah.jpg")}
          className="card-img-top cardImage"
          alt="cardimage"
        />
        <div className="card-body">
          <h3 className="card-title">Lisa Johnson</h3>
          <h6 className="card-title">Interior Designer</h6>
          <div className="locationcontainer">
            <FaMapMarkerAlt style={{color:"#b91a20"}} />
            <p style={{ marginLeft: "10px" }}>Halifax, NS</p>
          </div>
          <div className="cardfooter">
            <div className="viewmorebutton">
              <NavLink to="/details" className="btn" style={{backgroundColor:"#b91a20", color: "#fff"}}>View More</NavLink>
            </div>
            <div className="ratings">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalServiceCard;
