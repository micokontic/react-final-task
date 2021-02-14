import React from "react";
import "./OfferList.css";

function OfferList({ headline, description, img, alt, imgStart }) {
  return (
    <>
      <div className="home__offer-section">
        <div className="container">
          <div
            className="row home__offer-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__offer-text-wrapper">
                <h1 className="heading dark">{headline}</h1>
                <p className="home__offer-subtitle dark">{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__offer-img-wrapper">
                <img src={img} alt={alt} className="home__offer-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OfferList;
