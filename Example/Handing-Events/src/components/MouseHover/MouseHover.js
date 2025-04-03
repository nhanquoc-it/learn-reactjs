// Component : MouseHover.js
import React from "react";
import "./MouseHover.css";

const MouseHover = () => {
	// Xử lý sự kiện con trỏ chuột đi vào phần tử
	const handleMouseOver = () => {
		console.log("Mouse is hovering!");
	};
	//Render JSX
	return (
		<div className="mouse-hover" onMouseOver={handleMouseOver}>
			Hover over me!
		</div>
	);
};

export default MouseHover;
