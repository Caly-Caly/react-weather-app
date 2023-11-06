import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let maxTemperature = Math.round(props.data.temperature.maximum);
    return `${maxTemperature}°`;
  }
  function minTemp() {
    let minTemperature = Math.round(props.data.temperature.minimum);
    return `${minTemperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <strong>
        <div className="WeatherForecast-day">{day()}</div>
      </strong>
      <WeatherIcons code={props.data.condition.icon} size={38} />
      <div className="WeatherForecast-temps">
        <span className="WeatherForecast-temp-max">{maxTemp()}</span>
        <span className="WeatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
