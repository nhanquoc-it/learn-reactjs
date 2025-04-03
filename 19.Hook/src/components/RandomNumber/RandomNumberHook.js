// Sử dụng "React Hook"

import React, { useState } from "react";

function RandomNumberHook(props) {
	// Khởi tạo state
	const [number, setNumber] = useState(0);

	// Cập nhật state
	function randomNumber() {
		setNumber(Math.round(Math.random() * 100));
	}

	// Render JSX
	return (
		<div style={{ padding: "10%" }}>
			<b>{number}</b>
			<hr />
			<button onClick={randomNumber}>Random</button>
		</div>
	);
}
export default RandomNumberHook;
