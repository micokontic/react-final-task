import React from "react";
import Hero from "../../Hero";
import OfferList from "../../OfferList";
import FlipCards from "../../FlipCards"
import WrappedMap from "../../Map"
import { activities, atractions, dayTrips, guides } from "./Data";
import FlipCard from "../../FlipCard";
import FlipCardWithMap from '../../FlipCardsWithMap'
import NavigationTabs from '../../NavigationTabs/NavigationTabs'
function Home() {
  return (
    <>
      <Hero />
      <FlipCards/>
      <NavigationTabs/>
      <FlipCardWithMap/>
      <OfferList {...activities} />
      <OfferList {...atractions} />
      <OfferList {...dayTrips} />
      <OfferList {...guides} />
      
    </>
  );
}

export default Home;
