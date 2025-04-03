// Import react vào trong dự án
import React, { Component } from "react";

/*============== Sử dụng 1 trong 2 cách bên dưới để tạo một component ==============*/

// Function Component : rfce
const Welcome = function (props) {
	return (
		<div>
			<h1>Welcome! I am a function component</h1>
		</div>
	);
};

export default Welcome;

// Class Component : rce
// class Welcome extends Component {
// 	render() {
// 		return (
// 			<div>
// 				<h1>Welcome! I am a class component</h1>
// 			</div>
// 		);
// 	}
// }

// export default Welcome;
