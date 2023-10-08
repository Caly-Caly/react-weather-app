import React from "react";
import Weather from "./Weather";
import "./App.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
        {" "}
        <h1>Weather App</h1>
        <Weather />
        <footer>
          {" "}
          This project was coded by Calysta Aponte and is{" "}
          <a
            href="https://github.com/Caly-Caly/react-weather-app"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
