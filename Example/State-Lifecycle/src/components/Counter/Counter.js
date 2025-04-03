// Component : Counter
// Cú pháp emmet : rafc

import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
	// Hook useState để quản lý trạng thái "count"
	const [count, setCount] = useState(0);

	// Hàm tăng giá trị của "count"
	const increment = () => {
		setCount(count + 1);
	};
	// Hàm giảm giá trị của "count"
	const decrement = () => {
		setCount(count - 1);
	};
	// Render JSX
	return (
		<div className="counter">
			<p>Count: {count}</p>
			<button onClick={increment}>Tăng</button>
			<button onClick={decrement}>Giảm</button>
		</div>
	);
};

export default Counter;
