// Component : WeatherDisplay.js
import React from "react";
import "./WeatherDisplay.css";

const WeatherDisplay = ({ isSunny }) => {
	return (
		<div className="weather-display">
			Today is {isSunny ? "sunny" : "cloudy"}.
		</div>
	);
};

export default WeatherDisplay;
