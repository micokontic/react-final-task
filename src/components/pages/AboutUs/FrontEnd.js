import React from "react";
import "./Teams.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Vaskoo from "./Images/vasilije-removebg-preview.png";
import Micoo from "./Images/mico-removebg-preview.png";

function FrontEnd() {
  return (
    <>
      <div className="aboutUs-main">
        <div className="aboutUs-animatedTitle">
          <h1 data-text="FRONTEND TEAM">FRONTEND TEAM</h1>
        </div>
        <div className="aboutUs-container">
          <div className="aboutUs-box">
            <div className="aboutUs-imgBox">
              <img src={Micoo} alt="" />
            </div>
            <div className="aboutUs-aboutText">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                laudantium aspernatur exercitationem eos perferendis hic
                excepturi sapiente sit sequi distinctio enim a odit tempora
                libero ratione earum atque, quisquam quae!
              </p>
              <h4 aboutUs-name>
                Mico Kontic <br />
                <span>Frontend Developer</span>
              </h4>
              <div className="aboutUs-social">
                <div className="aboutUs-social-links">
                  <a href="https://github.com/micokontic">
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/mi%C4%87o-konti%C4%87-066677181/">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-box">
            <div className="aboutUs-imgBox">
              <img src={Vaskoo} alt="" />
            </div>
            <div className="aboutUs-aboutText">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                laudantium aspernatur exercitationem eos perferendis hic
                excepturi sapiente sit sequi distinctio enim a odit tempora
                libero ratione earum atque, quisquam quae!
              </p>
              <h4 aboutUs-name>
                Vasilije Knezevic <br />
                <span>Frontend Developer</span>
              </h4>
              <div className="aboutUs-social">
                <div className="aboutUs-social-links">
                  <a
                    href="https://github.com/knezevicvasilije"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vasilije-knezevic-8531551b9/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontEnd;
