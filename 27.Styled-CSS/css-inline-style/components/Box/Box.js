import React from "react";

// Khai báo inline-style
const divStyle = {
	margin: "40px",
	border: "5px solid pink",
};

const pStyle = {
	fontSize: "15px",
	textAlign: "center",
};

const Box = () => (
	// Sử dụng inline-style CSS
	<div style={divStyle}>
		<p style={pStyle}>Inline Style CSS</p>
	</div>
);

export default Box;
