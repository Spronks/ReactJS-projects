import React, { useState } from "react";
import "./style.css";

function Search() {
  const [city, setCity] = useState("athens");
  console.log(city);
  return (
    <div className="wrap">
      <div className="search">
        <input
          type="search"
          placeholder="Search city..."
          id="search"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <button className="searchButton">Search</button>
    </div>
  );
}

export default Search;
