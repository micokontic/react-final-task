import React from "react";
import Footer from "../../footer/Footer";
import Navbar from "../../Navbar";
import Blogs from "../../Blogs";
import { activitiesOffer, atractions, dayTrips, guides } from "./Data";

function Blog() {
  return (
    <>
      <div className="blogWrap">
        <div className="titleBlog">
          <h1>Blog</h1>
        </div>
        <Blogs {...activities} />
        <Blogs {...atractions} />
        <Blogs {...dayTrips} />
        <Blogs {...guides} />
      </div>
    </>
  );
}

export default Blog;
