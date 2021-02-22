import React, { useEffect, useRef } from "react";
import "./css/demo.css";
import "./css/normalize.css";
import "./css/tabs.css";
import "./css/tabstyles.css";

function NavigationTabs() {
  const tabsRef = useRef(null);

  useEffect(() => {
    tabsRef.current.childNodes.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        var tabArray = Array.from(tabsRef.current.childNodes);
        tabArray.forEach((tab) => {
          tab.classList.remove("tab-current");
        });
        tabArray[index].classList.add("tab-current");
      });
    });

    return () => {
      // cleanup
    };
  }, []);

  return (
    <div className="titleBackground">
      <div className="titleh1">
        <h1>ACTIVITIES</h1>
      </div>
      <div class="navigation-container">
        <section>
          <div class="tabs tabs-style-fillup">
            <nav>
              <ul ref={tabsRef}>
                <li className="tab-current">
                  <a href="#section-fillup-1" class="icon icon-all">
                    <span>All</span>
                  </a>
                </li>
                <li>
                  <a href="#section-fillup-2" class="icon icon-daytrips">
                    <span>Day Trips</span>
                  </a>
                </li>
                <li>
                  <a href="#section-fillup-3" class="icon icon-attractions">
                    <span>Attractions</span>
                  </a>
                </li>
                <li>
                  <a href="#section-fillup-4" class="icon icon-adrenaline">
                    <span>Adrenaline</span>
                  </a>
                </li>
                <li>
                  <a href="#section-fillup-5" class="icon icon-watersports">
                    <span>Water Sports</span>
                  </a>
                </li>
                <li>
                  <a href="#section-fillup-5" class="icon icon-wintersports">
                    <span>Winter Sports</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}

export default NavigationTabs;
