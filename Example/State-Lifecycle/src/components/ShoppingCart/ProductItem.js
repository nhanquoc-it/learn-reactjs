// Component con : ProductItem
// Cú pháp emmet : rafc
import React from "react";

// Hàm này nhận các props từ component "ShoppingCart" truyền xuống
const ProductItem = ({ product, onChange, onRemove }) => {
	return (
		<div className="product-item">
			<p>Tên: {product.name}</p>
			<p>Giá : {product.price} VNĐ</p>
			<input
				type="number"
				value={product.quantity}
				onChange={(e) => onChange(product.id, parseInt(e.target.value))}
				min="1"
			/>
			<button onClick={() => onRemove(product.id)}>Xóa Khỏi Giỏ Hàng</button>
		</div>
	);
};

export default ProductItem;
