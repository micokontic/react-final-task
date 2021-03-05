import React from "react";
import "./Footer.css";
import { Button } from "../../Button";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { FaRocket } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our exclusive membership to receive the latest news and trips
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Group8</h2>
            <Link to="/aboutUs">About Us</Link>
            <Link to="/">Investor Relations</Link>
            <Link to="/">Terms and Policies</Link>
            <Link to="/">Careers</Link>
          </div>
          <div className="footer-link-items">
            <h2>Explore</h2>
            <Link to="/">Write a review</Link>
            <Link to="/">Add a Place</Link>
            <Link to="/">Travelers'Choice</Link>
            <Link to="/">Help Center</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Do Business </h2>
            <Link to="/">Owners</Link>
            <Link to="/">Advertise with Us</Link>
            <Link to="/">Become a Partner</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Support</h2>
            <Link to="/">Our COVID-19 Response</Link>
            <Link to="/">Cancellation options</Link>
            <Link to="/">Neighborhood Support</Link>
            <Link to="/">Trust and Safety</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <div className="navbar-logo-div"></div>
            </Link>
          </div>
          <small className="website-rights">
            <span style={{ color: "#ff6b00", fontSize: "130%" }}>ME</span>
            <span>ADVENTURES</span> © 2021
          </small>
          <div className="social-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={"/"}
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
