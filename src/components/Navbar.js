import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <FaRocket className="navbar-icon" />
              GROUP 8
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/events"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/calendar"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Calendar
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-btn">
                {button ? (
                  <Link to="/log-in" className="btn-link">
                    <Button buttonStyle="btn--outline">Log In</Button>
                  </Link>
                ) : (
                  <Link to="/log-in" className="btn-link">
                    <Button
                      buttonStyle="btn--outline"
                      buttonSize="btn--mobile"
                      onClick={closeMobileMenu}
                    >
                      Log In
                    </Button>
                  </Link>
                )}
              </li>
              <li className="nav-btn">
                {button ? (
                  <Link to="/register" className="btn-link">
                    <Button buttonStyle="btn--primary">Register</Button>
                  </Link>
                ) : (
                  <Link
                    to="/register"
                    className="btn-link"
                    onClick={closeMobileMenu}
                  >
                    <Button
                      buttonStyle="btn--primary btn"
                      buttonSize="btn--mobile"
                    >
                      Register
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
