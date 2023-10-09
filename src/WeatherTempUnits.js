import React, { useState } from "react";

export default function WeatherTempUnits(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToImperial(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToMetric(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span className="WeatherTempUnits">
        <span className="temp">{Math.round(props.celsius)}</span>
        <span className="unit m-1">
          °C |{" "}
          <a href="/" onClick={convertToImperial}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTempUnits">
        <span className="temp">{Math.round(fahrenheit())}</span>
        <span className="unit m-1">
          <a href="/" onClick={convertToMetric}>
            °C
          </a>{" "}
          | °F{" "}
        </span>
      </span>
    );
  }
}
