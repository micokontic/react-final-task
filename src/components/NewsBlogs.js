import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Blogs.css";

function NewsBlogs({ headline, shortDesc, img, date }) {
  return (
    <>
      <div
        className="newsBlogSingle "
        style={{ backgroundImage: `url(${img})` }}
      >
        <h1 className="headingNews">{headline}</h1>
        <div className="dateNews">{date}</div>
        <p className="home__offer-subtitleNews ">
          {shortDesc}{" "}
          <Link className="linkNews" to="/blog">
            Read more
          </Link>
        </p>
      </div>
    </>
  );
}

export default NewsBlogs;
