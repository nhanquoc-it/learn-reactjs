// Component con : ColorPicker
// Cú pháp emmet : rafc

import React, { useState } from "react";
import "./ColorPicker.css";

const ColorPicker = () => {
	// Khởi tạo trạng thái "colors"
	const [colors] = useState([
		{ name: "Red", code: "#FF0000" },
		{ name: "Green", code: "#00FF00" },
		{ name: "Blue", code: "#0000FF" },
		{ name: "Yellow", code: "#FFFF00" },
		{ name: "Purple", code: "#800080" },
	]);
	// Khởi tạo trạng thái "selectedColor"
	const [selectedColor, setSelectedColor] = useState(colors[0]);

	// Hàm xử lý khi 1 màu được chọn
	const handleColorSelect = (color) => {
		setSelectedColor(color);
	};

	// Render JSX
	return (
		<div className="color-picker">
			<h2>Color Picker</h2>
			<div className="color-box">
				{colors.map((color, index) => (
					<div
						key={index}
						className="color"
						style={{ backgroundColor: color.code }}
						onClick={() => handleColorSelect(color)}
					></div>
				))}
			</div>
			<p>Selected Color: {selectedColor.name}</p>
		</div>
	);
};

export default ColorPicker;
