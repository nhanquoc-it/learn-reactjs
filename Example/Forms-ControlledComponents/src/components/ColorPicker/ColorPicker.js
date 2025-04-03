// Component : ColorPicker.js
import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
	const [color, setColor] = useState("#ffffff");

	const handleChange = (e) => {
		setColor(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Màu đã chọn", color);
		// Thêm logic xử lý màu đã chọn ở đây
	};
	return (
		<div className="color-picker">
			<form onSubmit={handleSubmit}>
				<input
					type="color"
					value={color}
					onChange={handleChange}
					className="color-input"
				/>
				<button type="submit">Chọn Màu</button>
			</form>
		</div>
	);
};

export default ColorPicker;
