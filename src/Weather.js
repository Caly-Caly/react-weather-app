import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  function showData(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      conditions: response.data.condition.description,
      feels_like: response.data.temperature.feels_like,
      iconUrl: response.data.condition.icon_url,
      iconInfo: response.data.condition.icon,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul className="timeDateInfo">
          <li>Friday 07:36</li>
          <li>{weatherData.conditions}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt={weatherData.iconInfo} />
            <span className="temp">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Feels Like: {Math.round(weatherData.feels_like)}°C</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind Speed: {Math.round(weatherData.wind)}mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "744441eb32ea7ceo3fb901c610f1d4t9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showData);
    return "Loading...";
  }
}
