import React from "react";
import FlipCards from "./FlipCardsWithMap";
import "./EventsPage.css";
function EventsPage() {
  return (
    <div className="eventsDivMargin">
      <div className="titleBackground">
        <div className="titleh1">
          <h1>Events</h1>
        </div>
        <div className="contentEvents">
          <div className="events-content">
            <div className="events-left">
              <p className="events-p">
                {" "}
                To make the deal more attractive for you, we have an amazing
                economical price range with lucrative discounts for bulk
                bookings. For professional our coast and equipments are the best
                to hone your skills and get at the top of the game. Call us
                today to know more about the surfing details and plan.
              </p>
            </div>
            <div className="events-right">
              <div class="events-wrapper">
                <div class="letters">
                  <span class="letter">3</span>
                  <span class="letter">6</span>
                </div>
                <div className="eventsTitle">Guides</div>
              </div>
              <div class="events-wrapper">
                <div class="letters">
                  <span class="letter">1</span>
                  <span class="letter">3</span>
                  <span class="letter">6</span>
                </div>
                <div className="eventsTitle">Adventures</div>
              </div>
              <div class="events-wrapper">
                <div class="letters">
                  <span class="letter">1</span>
                  <span class="letter">5</span>
                  <span class="letter">2</span>
                  <span class="letter">1</span>
                </div>
                <div className="eventsTitle">Users</div>
              </div>
            </div>
          </div>
          <FlipCards />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
