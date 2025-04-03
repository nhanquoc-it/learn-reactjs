// Component : ConditionalStyling.js
import React from "react";
import "./ConditionalStyling.css";

const ConditionalStyling = ({ isActive }) => {
	return (
		<div className={isActive ? "box active" : "box"}>Conditional Styling</div>
	);
};

export default ConditionalStyling;
