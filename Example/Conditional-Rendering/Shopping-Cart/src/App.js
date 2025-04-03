// File : App.js
import React from "react";
import ShoppingCart from "./components/ShoppingCart";

function App() {
	// Giỏ hàng trống : const items = [];

	// Danh sách các mặt hàng trong giỏ hàng
	const items = ["Item 1", "Item 2", "Item 3"];

	// Render JSX
	return (
		<div>
			<h1>Conditional Rendering - Shopping Cart</h1>
			<ShoppingCart items={items} />
		</div>
	);
}

export default App;
