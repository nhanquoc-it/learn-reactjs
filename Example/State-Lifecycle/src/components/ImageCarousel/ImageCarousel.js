// Component con : ImageCarousel
// Cú pháp emmet : rafc

import React, { useState } from "react";
import "./ImageCarousel.css";

function ImageCarousel() {
	// Khởi tạo state
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Khởi tạo đối tượng
	const images = ["iphone-15.jpg", "iphone-15pro.jpg", "laptop-pro.jpg"];
	// Hàm xử lý khi nhấn nút "Next"
	const handleNextImage = () => {
		setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
	};
	const currentImageUrl = images[currentImageIndex];
	// Render JSX
	return (
		<div className="image-carousel">
			<img src={currentImageUrl} alt={`Ảnh ${currentImageIndex} + 1`} />
			<button onClick={handleNextImage}>Tiếp theo</button>
		</div>
	);
}

export default ImageCarousel;
