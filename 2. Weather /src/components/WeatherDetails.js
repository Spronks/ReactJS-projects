import React from "react";

function WeatherDetails() {
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>36&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="plsv">Athens, Greece</div>
          </div>
        </div>
      </article>
    </>
  );
}

export default WeatherDetails;
