// Component : LinkClick.js
import React from "react";
import "./LinkClick.css";

const LinkClick = () => {
	// Hàm xử lý khi người dùng nhấn vào thẻ <a>
	const handleClick = () => {
		console.log("Link clicked!");
		// Bạn có thể thêm xử lý khác tại đây nếu cần
	};

	// Render JSX
	return (
		<a href="#!" className="custom-link" onClick={handleClick}>
			Click me!
		</a>
	);
};

export default LinkClick;
