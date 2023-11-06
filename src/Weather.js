import React, { useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
      conditions: response.data.condition.description,
      feels_like: response.data.temperature.feels_like,
      icon: response.data.condition.icon,
      date: new Date(response.data.time * 1000),
    });
  }
  function search() {
    const apiKey = "744441eb32ea7ceo3fb901c610f1d4t9";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSearch(event) {
    // This is the  city search engine
    event.preventDefault();
    search(city);
  }

  function handleCityInput(event) {
    // This is where we store the city input from the search engine
    setCity(event.target.value);
    console.log(city);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityInput}
              />
            </div>
            <div className="col-3 mb-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-dark w-100"
              />
            </div>
          </div>
        </form>
        <WeatherData data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
