// Component : ButtonClick.js
import React from "react";
import "./ButtonClick.css";

const ButtonClick = () => {
	// Hàm xử lý khi người dùng nhấn vào nút
	const handleClick = () => {
		console.log("Button clicked!");
	};

	// RenderJSX
	return (
		<div className="button-container">
			<button onClick={handleClick}>Click Me!</button>
		</div>
	);
};

export default ButtonClick;
