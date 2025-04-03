// Component : KeyPress,js
import React from "react";
import "./KeyPress.css";

const KeyPress = () => {
	// Hàm xử lý khi người dùng nhấn phím
	const handleKeyPress = (event) => {
		console.log("Key pressed:", event.key);
	};

	// Render JSX hiển thị ô nhập liệu
	return (
		<input
			className="key-press-input"
			type="text"
			placeholder="Press any key..."
			onKeyPress={handleKeyPress}
		/>
	);
};

export default KeyPress;
