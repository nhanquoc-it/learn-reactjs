// Component : ProductList
// Cú pháp emmet : rafc

import React from "react";
import ProductCard from "../ProductCard/ProductCard.js";

import "./ProductList.css"; // Import File CSS

// Hàm này nhận 1 props {products} từ App.js là 1 Array, bên trong chứa các Object con
const ProductList = ({ products }) => {
	return (
		<div className="product-list">
			{products.map((product, index) => (
				<ProductCard key={index} product={product} />
			))}
		</div>
	);
};

export default ProductList;
