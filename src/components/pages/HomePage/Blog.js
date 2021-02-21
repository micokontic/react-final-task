import React from "react";
import Footer from "../../footer/Footer";
import Navbar from "../../Navbar";
import Blogs from "../../Blogs";
import { activities, atractions, dayTrips, guides } from "./Data";

function Blog() {
  return (
    <>
      <div className="titleBlog">
        <h1>Blog</h1>
      </div>
      <Blogs {...activities} />
      <Blogs {...atractions} />
      <Blogs {...dayTrips} />
      <Blogs {...guides} />
    </>
  );
}

export default Blog;
