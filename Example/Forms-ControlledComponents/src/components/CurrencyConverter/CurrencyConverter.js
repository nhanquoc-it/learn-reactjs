// Component : CurrencyConverter.js
import React, { useState } from "react";
import "./CurrencyConverter.css";

const CurrencyConverter = () => {
	// Khởi tạo state
	const [amount, setAmount] = useState("");
	const [currency, setCurrency] = useState("USD");

	// Hàm xử lý sự thay đỏi số tiền
	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};
	// Hàm xử lý thay đổi đơn vị tiền tệ
	const handleCurrencyChange = (e) => {
		setCurrency(e.target.value);
	};
	// Hàm xử lý khi nhấn "Chuyển đổi"
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Số tiền:", amount);
		console.log("Đơn vị tiền tệ:", currency);
		// Thêm logic chuyển đổi tiền tệ ở đây (gửi đến API, tính toán kết quả)
	};

	// Render JSX
	return (
		<div className="currency-converter-container">
			<form onSubmit={handleSubmit}>
				<label>
					Nhập số tiền :
					<input
						type="number"
						value={amount}
						onChange={handleAmountChange}
						step={0.01}
						placeholder="0.00"
					/>
				</label>
				<br />
				<label>
					Đơn vị tiền tệ :
					<select value={currency} onChange={handleCurrencyChange}>
						<option value="USD">USD</option>
						<option value="EUR">EUR</option>
						<option value="GBP">GBP</option>
						{/* Thêm các đơn vị tiền tệ nếu cần */}
					</select>
				</label>
				<br />

				<button type="submit">Chuyển đổi</button>
			</form>
		</div>
	);
};

export default CurrencyConverter;
