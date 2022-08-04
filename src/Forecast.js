import React from "react";
import Icon from "./Icon";

import "./Forecast.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  console.log(props);

  const apiKey = `4bb9d229a9e1ba598b33d76f997d3e5c`;
  let lat = props.coordinates.lon;
  let lon = props.coordinates.lat;
  let units = `metric`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast mt-3">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <Icon code="01d" size={60} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19°</span>
            <span className="WeatherForecast-min">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
