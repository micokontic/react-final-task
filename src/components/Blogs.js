import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Blogs.css";

function Blogs({ headline, description, img, alt, imgStart }) {
  return (
    <>
      <div className="blogWrap">
        <div className="home__offer-section">
          <div className="container">
            <div
              className="rowBlog home__offer-row"
              style={{
                display: "flex",
                flexDirection: imgStart === "start" ? "row-reverse" : "rowBlog",
              }}
            >
              <div className="colBlog">
                <div className="home__offer-text-wrapper">
                  <h1 className="heading dark">{headline}</h1>
                  <p className="home__offer-subtitle dark">{description}</p>
                  <Link to="/blogDetails">
                    <Button>Read More</Button>
                  </Link>
                </div>
              </div>
              <div className="colBlog">
                <div className="home__offer-img-wrapper">
                  <img src={img} alt={alt} className="home__offer-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
