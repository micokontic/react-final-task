import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="home__hero-section darkBg">
        <div className="container">
          <div
            className="row home__hero-row"
            style={{
              display: "flex",
            }}
          >
            <div className="col">
              <div className="home__hero-text-wrapper">
                <div className="top-line">
                  FIND RESERVE <span>GO</span>
                </div>
                <h1 className="heading">
                  Let us make your vacation unforgettable
                </h1>
                <Link to="/sign-up">
                  <Button buttonSize="btn--large" buttonColor="orange">
                    Find your adventure
                  </Button>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__hero-img-wrapper"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
