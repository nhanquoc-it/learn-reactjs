// Component : ShoppingCart.js
import React from "react";
import "./ShoppingCart.css";

const ShoppingCart = ({ items }) => {
	return (
		<div className="shopping-cart">
			<h2>Shopping Cart</h2>
			{items.length === 0 ? (
				<p className="empty-cart">Giỏ hàng trống</p>
			) : (
				<ul>
					{items.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default ShoppingCart;
