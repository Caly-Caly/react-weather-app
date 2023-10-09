import React from "react";
import FormattedTimeStamp from "./FormattedTimeStamp";

export default function WeatherData(props) {
  return (
    <div className="props.data">
      <h1>{props.data.city}</h1>
      <ul className="timeDateInfo">
        <li>
          <FormattedTimeStamp date={props.data.date} />
        </li>
        <li>{props.data.conditions}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src={props.data.iconUrl} alt={props.data.iconInfo} />
          <span className="temp">{Math.round(props.data.temperature)}</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Feels Like: {Math.round(props.data.feels_like)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind Speed: {Math.round(props.data.wind)} MPH</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
