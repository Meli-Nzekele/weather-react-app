import React from "react";
import Icon from "./Icon";

import "./Forecast.css";

export default function Forecast() {
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
