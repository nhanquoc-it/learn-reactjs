// Component : ToggleButton.js
import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = () => {
	// Khởi tạo state
	const [isOn, setIsOn] = useState(false);
	// Hàm xử lý chuyển đổi trạng thái của nút
	const handleToggle = () => {
		setIsOn(!isOn);
	};
	// RenderJSX
	return (
		<div className="toggle-button-container">
			<button onClick={handleToggle} className={isOn ? "on" : "off"}>
				{isOn ? "ON" : "OFF"}
			</button>
		</div>
	);
};

export default ToggleButton;
