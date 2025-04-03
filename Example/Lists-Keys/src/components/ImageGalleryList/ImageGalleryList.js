// Component : ImageGalleryList.js
import React from "react";
import "./ImageGalleryList.css";

const ImageGalleryList = () => {
	const images = [
		{ id: 1, src: "https://via.placeholder.com/150", alt: "Image 1" },
		{ id: 2, src: "https://via.placeholder.com/150", alt: "Image 2" },
		{ id: 3, src: "https://via.placeholder.com/150", alt: "Image 3" },
		{ id: 4, src: "https://via.placeholder.com/150", alt: "Image 4" },
	];
	return (
		<div>
			<h2>Image Gallery with Keys</h2>
			<div className="image-gallery">
				{images.map((image) => (
					<img key={image.id} src={image.src} alt={image.alt} />
				))}
			</div>
		</div>
	);
};

export default ImageGalleryList;
