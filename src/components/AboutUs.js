import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <div className="aboutUsContainer">
        <div className="frontEnd">
          <h1 className="frontTeam teams">FRONTEND TEAM</h1>
        </div>

        <div className="backEnd">
          <h1 className="backTeam teams">BACKEND TEAM</h1>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
