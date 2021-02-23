import React from "react";
import Hero from "../../Hero";
import FlipCards from "../../FlipCards"
import WrappedMap from "../../Map"
import {activitiesOffer, atractions, dayTrips, guides } from "./Data";
import FlipCard from "../../FlipCard";
import FlipCardWithMap from "../../FlipCardsWithMap";
import NavigationTabs from "../../NavigationTabs/NavigationTabs";
import NewsBlog from "../../NewsBlog";

function Home() {
  return (
    <>
      <Hero />
      <FlipCards />
      <NavigationTabs />
      <FlipCardWithMap />
      <NewsBlog />
    </>
  );
}

export default Home;
