// File : App.js
import React from "react";
import WeatherDisplay from "./components/WeatherDisplay";

function App() {
	// Giả sử giá trị của isSunny được lấy từ đâu đó
	const isSunny = true;
	return (
		<div>
			<h1>React Weather Display</h1>
			<WeatherDisplay isSunny={isSunny} />
		</div>
	);
}

export default App;
