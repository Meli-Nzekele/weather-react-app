import React from "react";
import Icon from "./Icon";
import "./NextDayForecast.css";

export default function NextDayForecast(props) {
  function ForecastMaxTemp() {
    let MaxTemp = Math.ceil(props.data.temp.max);
    return `${MaxTemp}°`;
  }

  function ForecastMinTemp() {
    let MinTemp = Math.floor(props.data.temp.min);
    return `${MinTemp}°`;
  }

  function ForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];

    return days[day];
  }

  return (
    <div className="NextDayForecast">
      <div className="NextDayForecast-day">{ForecastDay()}</div>
      <Icon code={props.data.weather[0].icon} size={50} />
      <div className="NextDayForecast-temperatures">
        <span className="NextDayForecast-max">{ForecastMaxTemp()}</span>{" "}
        <span className="NextDayForecast-min">{ForecastMinTemp()} </span>
      </div>
    </div>
  );
}
