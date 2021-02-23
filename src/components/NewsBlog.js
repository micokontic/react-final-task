import React from "react";
import NewsBlogs from "./NewsBlogs";
import {
  activities,
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
          <NewsBlogs {...activities} />

          <NewsBlogs {...atractions} />

          <NewsBlogs {...dayTrips} />

          <NewsBlogs {...guides} />

          <NewsBlogs {...activities} />
        </div>
      </div>
    </>
  );
}

export default NewsBlog;
