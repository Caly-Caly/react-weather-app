import React from "react";
import "./Weather.css";
export default function Weather() {
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
      <h1>Brooklyn</h1>
      <ul className="timeDateInfo">
        <li>Friday 07:36</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png" />
          <span className="temp">9</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 18%</li>
            <li>Humidity: 96%</li>
            <li>Wind Speed: 5pm</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
