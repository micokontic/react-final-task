import React from "react";
import Footer from "../../footer/Footer";
import Navbar from "../../Navbar";
import Blogs from "../../Blogs";
import { activitiesOffer, atractions, dayTrips, guides } from "./Data";
import { Button } from "../../../Button";

function Blog() {
  return (
    <>
      <div className="blogWrap  blog-wrap-container">
        <div className="titleBackground">
          <div className="titleh1" style={{ "padding-top": "60px" }}>
            <h1>Blog</h1>
          </div>
          <div style={{ "padding-top": "200px" }}>
            <Blogs {...activitiesOffer} />
            <Blogs {...atractions} />
            <Blogs {...dayTrips} />
            <Blogs {...guides} />
          </div>
        </div>
        <div className="loadMore-btn">
          <Button buttonSize="btn--medium">Load More</Button>
        </div>
      </div>
    </>
  );
}

export default Blog;
