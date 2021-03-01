import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MiIcons from "react-icons/md";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import "./HostNavbar.css";
import { IconContext } from "react-icons/lib";

function HostNavbar() {
  const [sidebar, setSideBar] = useState(false);

  const showSidebar = () => setSideBar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        {/* <div className="hostNavbar">
          <Link to="#" className="host-menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div> */}
        <nav className={sidebar ? "host-nav-menu active" : "host-nav-menu"}>
          <ul className="host-nav-menu-items" onClick={showSidebar}>
            {/*  <li className="host-navbar-toggle">
              <Link to="#" className="host-menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li> */}
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default HostNavbar;
