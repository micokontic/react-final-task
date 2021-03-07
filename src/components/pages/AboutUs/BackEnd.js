import React from "react";
import "./Teams.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import Tamara from "./Images/tamaraBack-removebg-preview.png";
import Petar from "./Images/petarBack-removebg-preview.png";
function BackEnd() {
  return (
    <>
      <div className="aboutUs-main">
        <div className="aboutUs-animatedTitle">
          <h1 data-text="BACKEND TEAM">BACKEND TEAM</h1>
        </div>
        <div className="aboutUs-backContainer aboutUs-container">
          <div className="aboutUs-box">
            <div className="aboutUs-imgBox">
              <img src={Tamara} alt="" />
            </div>
            <div className="aboutUs-aboutText">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                laudantium aspernatur exercitationem eos perferendis hic
                excepturi sapiente sit sequi distinctio enim a odit tempora
                libero ratione earum atque, quisquam quae!
              </p>
              <h4 aboutUs-name>
                Tamara Pavlovic <br />
                <span>Backend Developer</span>
              </h4>
              <div className="aboutUs-social">
                <div className="aboutUs-social-links">
                  <a href="https://github.com/tamarapavlovic?tab=repositories">
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/pavlovictamara21/">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-box">
            <div className="aboutUs-imgBox">
              <img src={Petar} alt="" />
            </div>
            <div className="aboutUs-aboutText">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                laudantium aspernatur exercitationem eos perferendis hic
                excepturi sapiente sit sequi distinctio enim a odit tempora
                libero ratione earum atque, quisquam quae!
              </p>
              <h4 aboutUs-name>
                Petar Radinovic <br />
                <span>Backend Developer</span>
              </h4>
              <div className="aboutUs-social">
                <div className="aboutUs-social-links">
                  <a href="https://github.com/rad1na">
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/petar-radinovi%C4%87-7a482b1b1/">
                    <AiFillLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutUs-box">
            <div className="aboutUs-imgBox">
              <img src={Tamara} alt="" />
            </div>
            <div className="aboutUs-aboutText">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                laudantium aspernatur exercitationem eos perferendis hic
                excepturi sapiente sit sequi distinctio enim a odit tempora
                libero ratione earum atque, quisquam quae!
              </p>
              <h4 aboutUs-name>
                Anja Jakovljevic <br />
                <span>Backend Developer</span>
              </h4>
              <div className="aboutUs-social">
                <div className="aboutUs-social-links">
                  <a href="https://github.com/tamarapavlovic?tab=repositories">
                    {" "}
                    <AiFillGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/pavlovictamara21/">
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

export default BackEnd;
