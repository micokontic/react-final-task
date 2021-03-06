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
              <p>
                {" "}
                To make the deal more attractive for you, we have an amazing
                economical price range with lucrative discounts for bulk
                bookings. For professional our coast and equipments are the best
                to hone your skills and get at the top of the game. Call us
                today to know more about the surfing details and plan.
              </p>
            </div>
            <div className="events-right"></div>
          </div>
          <FlipCards />
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
