// Component cha : ShoppingCart
// Cú pháp emmet : rafc

import React, { useState } from "react";
import ProductItem from "./ProductItem"; // Import component con
import "./ShoppingCart.css";

const ShoppingCart = () => {
	// Khởi tạo state
	const [cartItems, setCartItems] = useState([
		{ id: 1, name: "Product 1", price: 20, quantity: 1 },
		{ id: 2, name: "Product 2", price: 30, quantity: 1 },
		{ id: 3, name: "Product 3", price: 40, quantity: 1 },
		{ id: 4, name: "Product 4", price: 50, quantity: 1 },
	]);

	// Thêm sản phẩm vào giỏ hàng
	const handleAddToCart = (product) => {
		setCartItems([...cartItems, product]);
		updateTotalPrice();
	};
	// Cập nhật số lượng của sản phẩm
	const updateQuantity = (id, quantity) => {
		setCartItems(
			cartItems.map((item) => (item.id === id ? { ...item, quantity } : item))
		);
		updateTotalPrice();
	};
	// Xóa sản phẩm khỏi giỏ hàng
	const handleRemoveFromCart = (productId) => {
		setCartItems(cartItems.filter((item) => item.id !== productId));
		updateTotalPrice();
	};
	// Cập nhật tổng giá tiền
	const updateTotalPrice = () => {
		return cartItems.reduce(
			(total, item) => total + item.price * item.quantity,
			0
		);
	};

	// Render JSX
	return (
		<div className="shopping-cart">
			<h2>Giỏ Hàng</h2>
			<h3>Danh Sách Sản Phẩm</h3>
			<div className="cart-items">
				{cartItems.map((item) => (
					<ProductItem
						key={item.id}
						product={item}
						onChange={updateQuantity}
						onRemove={handleRemoveFromCart}
					/>
				))}
			</div>
			<p>Tổng Giá : {updateTotalPrice()} VNĐ</p>

			<div className="add-cart">
				<h3>Thêm Sản Phẩm</h3>
				<button
					onClick={() =>
						handleAddToCart({
							id: 5,
							name: "Product 5",
							price: 60,
							quantity: 1,
						})
					}
				>
					Thêm Mới Sản Phẩm
				</button>
			</div>
		</div>
	);
};

export default ShoppingCart;
