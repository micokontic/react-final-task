import React from "react";
import "./AboutUs.css";
import { Link } from "react-router-dom";
function AboutUs() {
  return (
    <>
      <div className="aboutUsWrapper">
        <div className="aboutUsContainer">
          <Link to="/frontEndTeam" className="linkFront">
            <div className="frontEnd">
              <h1 className="frontTeam teams">FRONTEND TEAM</h1>
            </div>
          </Link>

          <Link to="/backEndTeam" className="linkBack">
            <div className="backEnd">
              <h1 className="backTeam teams">BACKEND TEAM</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
