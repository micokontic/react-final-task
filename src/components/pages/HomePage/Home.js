import React from "react";
import Hero from "../../Hero";
import FlipCards from "../../FlipCards"
import WrappedMap from "../../Map"
import {activitiesOffer, atractions, dayTrips, guides } from "./Data";
import FlipCard from "../../FlipCard";
import FlipCardWithMap from "../../FlipCardsWithMap";
import NavigationTabs from "../../NavigationTabs/NavigationTabs";
import NewsBlog from "../../NewsBlog";
import UserCard from "../../UserCard/UserCard"

function Home() {
  return (
    <>
      <div className="home-page-user-container">
          <UserCard/>
      </div>
      <Hero />
      <FlipCards />
      <NavigationTabs />
      <FlipCardWithMap />
      <NewsBlog />
    </>
  );
}

export default Home;
