import React from "react";
import "./Teams.css";
import Vaskoo from "./Images/vasilije-removebg-preview.png";
import Micoo from "./Images/mico-removebg-preview.png";
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
                Tamara Pavlovic <br />
                <span>Backend Developer</span>
              </h4>
            </div>
          </div>
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
                Petar Radinovic <br />
                <span>Backend Developer</span>
              </h4>
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
                Anja Jakovljevic <br />
                <span>Backend Developer</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BackEnd;
