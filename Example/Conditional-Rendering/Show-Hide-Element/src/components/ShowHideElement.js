// Components : ShowHideElement.js
import React, { useState } from "react";
import "./ShowHideElement.css";

const ShowHideElement = () => {
	// Khởi tạo state
	const [isVisible, setIsVisible] = useState(false);
	// Chuyển đổi trạng thái "show/hide"
	const toggleVisibility = () => {
		setIsVisible(!isVisible);
	};
	// Render JSX
	return (
		<div className="show-hide-element">
			<button onClick={toggleVisibility}>Toggle Element</button>
			{isVisible && <div className="content">This element is now visible!</div>}
		</div>
	);
};

export default ShowHideElement;
