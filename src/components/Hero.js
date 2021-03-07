import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./Hero.css";
import Navbar from "./Navbar";
import { GiMountainRoad } from "react-icons/gi";

function Hero() {
  return (
    <>
      <section className="hero-welcome">
        <div className="hero-container">
          <h2 className="hero-sub-headline">
            <span className="hero-first-letter">W</span>elcome
          </h2>
          <h1 className="hero-headline">MeAdventure</h1>
          <div className="hero-headline-description">
            <div className="hero-separator">
              <div className="hero-line hero-line-left" />
              <div className="hero-asterisk">
                <GiMountainRoad />
              </div>
              <div className="hero-line hero-line-right" />
            </div>
            <div className="hero-single-animation">
              <div className="top-line">
                FIND RESERVE <span>GO</span>
              </div>
              <Link to="/log-in">
                <Button buttonStyle="btn--outline">Find your adventure</Button>
              </Link>
              {/*     <Button buttonStyle="btn--outline" buttonSize="btn--wide">
                Lalala
              </Button> */}
            </div>
          </div>
        </div>
      </section>

      {/*  <div className="home__hero-section darkBg">
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
                <Link to="/log-in">
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
      </div> */}
    </>
  );
}

export default Hero;
