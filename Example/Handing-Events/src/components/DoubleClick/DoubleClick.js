// Component : DoubleClick.js
import React from "react";
import "./DoubleClick.css";

const DoubleClick = () => {
	// Hàm xử lý khi người dùng nhấn đúp chuột
	const handleDoubleClick = () => {
		console.log("Double click detected!");
	};

	// Render JSX
	return (
		<div className="double-click" onDoubleClick={handleDoubleClick}>
			Double Click Here
		</div>
	);
};

export default DoubleClick;
