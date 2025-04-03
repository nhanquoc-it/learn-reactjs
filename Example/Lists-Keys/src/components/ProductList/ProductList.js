// Component : ProductList.js
import React from "react";
import "./ProductList.css";

const ProductList = () => {
	const products = [
		{ id: 1, name: "Laptop", price: 1000 },
		{ id: 2, name: "Smartphone", price: 500 },
		{ id: 3, name: "Tablet", price: 300 },
		{ id: 4, name: "Headphones", price: 100 },
	];

	return (
		<div>
			<h2>Product List with Keys</h2>
			<ul className="product-list">
				{products.map((product) => (
					<li key={product.id} className="product-item">
						<strong>{product.name}</strong> - ${product.price}
					</li>
				))}
			</ul>
		</div>
	);
};

export default ProductList;
