import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      iconUrl: "http://openweathermap.org/img/wn/02d@2x.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div>
          <form className="d-flex search-bar" role="search" id="searchForm">
            <input
              className="form-control me-2 shadow-none bg-light"
              type="search"
              placeholder="Enter your city"
              id="cityInput"
              autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>

        <div className="row">
          <div className="col-4">
            <img
              src={weatherData.iconUrl}
              rel="noferrer"
              alt="{weatherData.description}"
              className="icon"
            />
          </div>
          <div className="col-4">
            <span className="temperature">{weatherData.temperature}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-4">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `4bb9d229a9e1ba598b33d76f997d3e5c`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
