import React from "react";
import NewsBlogs from "./NewsBlogs";
import {
  activitiesOffer,
  atractions,
  dayTrips,
  guides,
} from "../components/pages/HomePage/Data";

function NewsBlog() {
  return (
    <>
      <div className="titleBackground">
        <div className="titleh1">
          <h1>LATEST NEWS</h1>
        </div>
        <div className="newsBlogWrap">
          <NewsBlogs {...activitiesOffer} />

          <NewsBlogs {...atractions} />

          <NewsBlogs {...dayTrips} />

          <NewsBlogs {...guides} />

          <NewsBlogs {...activitiesOffer} />
        </div>
      </div>
    </>
  );
}

export default NewsBlog;
