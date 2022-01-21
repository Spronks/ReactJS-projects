import React, { useEffect, useState } from "react";
import "./style.css";
import WeatherDetails from "./WeatherDetails";

function Search() {
  const [city, setCity] = useState("Athens");
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      //API Key is missing!
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=<APIKEY>`;

      let res = await fetch(url);
      let data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: weatherType } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherType,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);
      //console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search city..."
            id="search"
            className="searchTerm"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button className="searchButton" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
        {/* This is the weather details page */}
      </div>
      <WeatherDetails {...tempInfo} />
    </>
  );
}

export default Search;
