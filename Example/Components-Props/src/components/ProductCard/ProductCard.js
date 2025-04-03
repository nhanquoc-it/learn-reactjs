// Component : ProductCard
// Cú pháp emmet : rafc

import React from "react";
import "./ProductCard.css"; // Import file CSS

// Hàm này nhận 1 props {product} từ App.js là 1 object
const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<img src={product.img} alt={product.name} className="product-image" />
			<div className="product-details">
				<h2>{product.name}</h2>
				<p className="product-price">Price: {product.price}</p>
				<p>Description: {product.description}</p>
			</div>
		</div>
	);
};

export default ProductCard;
