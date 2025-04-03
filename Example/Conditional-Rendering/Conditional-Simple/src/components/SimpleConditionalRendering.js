// Component : SimpleConditionalRendering.js
import React from "react";

const SimpleConditionalRendering = ({ showMessage }) => {
	return <div>{showMessage && <p>Hello, world!</p>}</div>;
};

export default SimpleConditionalRendering;
