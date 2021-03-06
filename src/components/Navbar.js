import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaRocket } from "react-icons/fa";
import { Button } from "../Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
import { WhichUserContext } from "../context/WhichUser";
import NavUserCard from "../components/UserCard/NavUserCard";
import { AuthContext } from "../context/auth";

function Navbar({ backgroundStyle }) {
  const { setTokens } = useContext(AuthContext);
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { currentUser, setUser } = useContext(WhichUserContext);
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

  const logOutHandler = () => {
    setTokens();
    setUser("default");
  };

  window.addEventListener("resize", showButton);
  return (
    <>
      <div className="navbar-absolute">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar" style={{ background: backgroundStyle }}>
            <div className="navbar-container container">
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                <div className="navbar-logo-div"></div>
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
                    to="/contactUs"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    to="/blog"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    to="/aboutUs"
                    className="nav-links "
                    onClick={closeMobileMenu}
                  >
                    About Us
                  </Link>
                </li>

                <li className="nav-btn">
                  {button ? (
                    currentUser === "default" ? (
                      <Link to="/log-in" className="btn-link">
                        <Button buttonStyle="btn--outline">Login</Button>
                      </Link>
                    ) : (
                      <Link to="/" className="btn-link">
                        <Button
                          buttonStyle="btn--outline"
                          onClick={logOutHandler}
                        >
                          Log Out
                        </Button>
                      </Link>
                    )
                  ) : currentUser === "default" ? (
                    <Link to="/log-in" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                        onClick={closeMobileMenu}
                      >
                        Log In
                      </Button>
                    </Link>
                  ) : (
                    <Link to="/" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                        onClick={closeMobileMenu}
                        onClick={logOutHandler}
                      >
                        Log Out
                      </Button>
                    </Link>
                  )}
                </li>
                <li className="nav-btn">
                  {button ? (
                    currentUser === "default" ? (
                      <Link to="/register" className="btn-link">
                        <Button buttonStyle="btn--primary">Register</Button>
                      </Link>
                    ) : (
                      <Link
                        to="/register"
                        className="btn-link visibility-hidden"
                      >
                        <Button buttonStyle="btn--primary">Register</Button>
                      </Link>
                    )
                  ) : currentUser === "default" ? (
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
                  ) : (
                    <Link to="/register" className="btn-link visibility-hidden">
                      <Button buttonStyle="btn--primary">Register</Button>
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
          {currentUser == "default" ? "" : <NavUserCard />}
        </IconContext.Provider>
      </div>
    </>
  );
}

export default Navbar;
