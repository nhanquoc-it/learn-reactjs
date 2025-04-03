// Component : Counter.js
import React, { useContext } from "react";
import { CounterContext } from "./CounterContext"; // Import Context

const Counter = () => {
	// Sử dụng useContext() - lấy giá trị của context
	// Tham số truyền vào là object : { count, countUp, countDown }
	const counter = useContext(CounterContext);
	console.log("Giá trị của context:", counter);

	// Render JSX
	return (
		<div>
			<h1>{counter.count}</h1>
			<button
				onClick={() => {
					counter.countUp();
				}}
			>
				Tăng
			</button>
			<button
				onClick={() => {
					counter.countDown();
				}}
			>
				Giảm
			</button>
		</div>
	);
};

export default Counter;
