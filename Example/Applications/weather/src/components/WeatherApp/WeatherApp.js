import React, { useState, useEffect } from "react";
import "./WeatherApp.css";

function WeatherApp() {
	// Khởi tạo state
	const [city, setCity] = useState("");
	const [temperature, setTemperature] = useState(null);

	// Call API
	useEffect(() => {
		// Gửi yêu cầu API và cập nhật state "temperature"
		const fetchData = async () => {
			const apiKey = `efbd499e5a7f8aff9212c4b690ca7313`;
			try {
				const response = await fetch(
					`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
				);
				// Thất bại
				if (!response.ok) {
					throw new Error("City not found!");
				}
				// Thành công
				const data = await response.json();
				console.log(data);
				setTemperature(data.main.temp);
			} catch (error) {
				console.error("Error fetching weather data: ", error.message);
				setTemperature(null);
			}
		};

		// Khi người dùng nhập tên thành phố thì sẽ thực hiện call API
		if (city) {
			fetchData();
		}
	}, [city]);

	// Render JSX
	return (
		<div className="weather-app">
			<h2>Weather App</h2>
			<label htmlFor="cityInput">Enter City:</label>
			<input
				type="text"
				id="cityInput"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>

			{temperature !== null ? (
				<p>
					Current Temperature in {city} : {temperature}°C
				</p>
			) : (
				<p>No data available</p>
			)}
		</div>
	);
}

export default WeatherApp;
