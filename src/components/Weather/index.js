import React, { useState, useEffect } from "react";

function Weather() {
  const [weather, setWeather] = useState("");

  useEffect(() => {
    getWeather();
  }, []);

  async function getWeather() {
    let response = await fetch(process.env.REACT_APP_WEATHER_FETCH);
    console.log(response);
    let data = await response.json();
    console.log(data.headers);
    setWeather(data);
    console.log(weather);
  }

  return (
    <>
      <p>{weather}</p>
    </>
  );
}

export default Weather;
