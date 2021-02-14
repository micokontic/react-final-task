import React from "react";
import Hero from "../../Hero";
import OfferList from "../../OfferList";
import { activities, atractions, dayTrips, guides } from "./Data";

function Home() {
  return (
    <>
      <Hero />
      <OfferList {...activities} />
      <OfferList {...atractions} />
      <OfferList {...dayTrips} />
      <OfferList {...guides} />
    </>
  );
}

export default Home;
