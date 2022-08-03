import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div>
        <form className="d-flex search-bar" role="search" id="searchForm">
          <input
            className="form-control me-2 shadow-none bg-light"
            type="search"
            placeholder="Enter your city"
            id="cityInput"
          />
          <button
            className="btn btn-outline-success btn shadow-none searchBtn"
            type="submit"
          >
            Search
          </button>
          <i className="fa-solid fa-location-dot currentBtn"></i>
        </form>
      </div>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="http://openweathermap.org/img/wn/02d@2x.png"
            rel="noferrer"
            alt="icon"
            className="icon"
          />

          <span className="temperature">6</span>
          <span className="unit">°C</span>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
