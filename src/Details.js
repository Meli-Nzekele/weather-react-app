import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./Icon";
import ShowTemperature from "./ShowTemperature";

export default function Details(props) {
  return (
    <div className="Details">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-4">
        <div className="col-4">
          <Icon code={props.data.icon} size={100} />
        </div>
        <div className="col-4">
          <ShowTemperature celsius={props.data.temperature} />
        </div>
        <div className="col-4">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
