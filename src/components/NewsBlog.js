import React from "react";
import NewsBlogs from "./NewsBlogs";
import {
  activitiesOffer,
  atractions,
  dayTrips,
  guides,
} from "../components/pages/HomePage/Data";
import { Link } from "react-router-dom";

function NewsBlog() {
  return (
    <>
      <div className="titleBackground">
        <div className="titleh1">
          <h1>LATEST NEWS</h1>
        </div>
        <div className="newsBlogWrap">
          <div className="div1">
            {" "}
            <NewsBlogs {...activitiesOffer} />
          </div>
          <div className="div2">
            {" "}
            <NewsBlogs {...atractions} />
          </div>
          <div className="div3">
            {" "}
            <NewsBlogs {...dayTrips} />
          </div>
          <div className="div4">
            {" "}
            <NewsBlogs {...guides} />
          </div>
          <Link to="/notFound">
            <div className="div5">
              {" "}
              <NewsBlogs {...activitiesOffer} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewsBlog;
