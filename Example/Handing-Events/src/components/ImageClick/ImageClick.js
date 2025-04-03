// Component : ImageClick.js
import React from "react";
import "./ImageClick.css";

const ImageClick = () => {
	// Hàm xử lý khi người dùng nhấn vào hình ảnh
	const handleImageClick = () => {
		console.log("Image clicked!");
	};

	// Render JSX hiển thị hình ảnh
	return (
		<img
			className="image-click"
			src="path/to/your/image.jpg"
			alt="Click Me!"
			onClick={handleImageClick}
		/>
	);
};

export default ImageClick;
