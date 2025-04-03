// Component : HoverEffect.js
import React, { useState } from "react";
import "./HoverEffect.css";

const HoverEffect = () => {
	// Khởi tạo state
	const [isHovered, setIsHovered] = useState(false);
	// Hàm xử lý khi người dùng di chuột "vào" hoặc "rời đi" phần tử
	const handleHover = () => {
		setIsHovered(!isHovered);
	};

	// Render JSX
	return (
		<div
			className={`hover-element ${isHovered ? "hovered" : ""}`}
			onMouseOver={handleHover}
			onMouseOut={handleHover}
		>
			Hover over me!
		</div>
	);
};

export default HoverEffect;
