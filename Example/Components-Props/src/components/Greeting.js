// Component : Greeting
// Cú pháp emmet : rafc

import React from "react";
// Hàm này nhận 1 props {name} từ App.js là 1 chuỗi string
const Greeting = ({ name }) => {
	return (
		<div>
			<p>Hello, {name} </p>
		</div>
	);
};

export default Greeting;

