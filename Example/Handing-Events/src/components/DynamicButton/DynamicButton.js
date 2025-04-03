// Component : DynamicButton.js
import React, { useState } from "react";
import "./DynamicButton.css";

const DynamicButton = () => {
	// Khởi tạo state
	const [buttonState, setButtonState] = useState(false);

	// Cập nhật state
	const handleClick = () => {
		setButtonState(!buttonState);
	};

	// Render JSX
	return (
		<div>
			<button onClick={handleClick} className={buttonState ? "active" : ""}>
				{buttonState ? "Clicked!" : "Click me"}
			</button>
		</div>
	);
};

export default DynamicButton;
