import React, { useState } from "react";
import Details from "./Details";
import Forecast from "./Forecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
    });
  }

  function Search() {
    const apiKey = `4bb9d229a9e1ba598b33d76f997d3e5c`;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleCityChange(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form
          onSubmit={handleSubmit}
          className="d-flex search-bar"
          role="search"
          id="searchForm"
        >
          <input
            className="form-control me-2 shadow-none bg-light"
            type="search"
            placeholder="Enter your city"
            id="cityInput"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button
            className="btn btn-outline-success btn shadow-none searchBtn"
            type="submit"
          >
            Search
          </button>
          <i className="fa-solid fa-location-dot currentBtn"></i>
        </form>
        <Details data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
