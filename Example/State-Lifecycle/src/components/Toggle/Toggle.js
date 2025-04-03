// Component con : Toggle
// Cú pháp emmet : rafc
import React, { useState } from "react";
import "./Toggle.css";

const Toggle = () => {
	// Khởi tạo trạng thái
	const [isOn, setIsOn] = useState(false);

	// Hàm để chuyển trạng thái bật/tắt bóng đèn
	const handleToggle = () => {
		setIsOn((isOn) => !isOn);
	};
	// Render JSX
	return (
		<div className={`toggle ${isOn ? "on" : "off"}`}>
			<img
				src={isOn ? "light-on.png" : "light-off.png"}
				alt={isOn ? "Light On" : "Light Off"}
				className="light-image"
			/>
			<button onClick={handleToggle} className="toggle-button">
				{isOn ? "Turn Off" : "Turn On"}
			</button>
		</div>
	);
};

export default Toggle;
