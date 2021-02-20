import React, { useState } from "react";
import { Button } from "../../Button";

function Weather() {
  const APIKEY = "54f341e606d511898b13da9405b6dd98";
  const lat = "42.285610";
  const lon = "18.836531";

  async function weatherData(e) {
    e.preventDefault();
    const data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}`
    ).then((res) => console.log(res.json()));
  }

  return (
    <div>
      Weather
      <Button buttonStyle="btn--primary" onClick={(e) => weatherData(e)}>
        Test
      </Button>
    </div>
  );
}

export default Weather;
