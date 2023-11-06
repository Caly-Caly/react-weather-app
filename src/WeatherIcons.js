import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcons(props) {
   const codeMapping = {
     "clear-sky-day": "CLEAR_DAY",
     "clear-sky-night": "CLEAR_NIGHT",
     "scattered-clouds-day": "PARTLY_CLOUDY_DAY",
     "scattered-clouds-night": "PARTLY_CLOUDY_NIGHT",
     "broken-clouds-day": "CLOUDY",
     "broken-clouds-night": "CLOUDY",
     "rain-day": "SLEET",
     "rain-night": "SLEET",
     "shower-rain-day": "RAIN",
     "shower-rain-night": "RAIN",
     "mist-day": "WIND",
     "mist-night": "WIND",
     "snow-day": "SNOW",
     "snow-night": "SNOW",
   };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color="#8B8B8B"
      size={props.size}
      animate={true}
    />
  );
}
