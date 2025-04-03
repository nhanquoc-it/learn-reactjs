// Component : InputChange.js
import React, { useState } from "react";
import "./InputChange.css";

const InputChange = () => {
	// Khởi tạo state
	const [inputValue, setInputValue] = useState("");
	// Xử lý khi giá trị input thay đổi > Cập nhật state
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};
	// RenderJSX
	return (
		<div className="input-change">
			<label htmlFor="inputField">Nhập text:</label>
			<input
				type="text"
				id="inputField"
				value={inputValue}
				onChange={handleInputChange}
			/>
			<p>Dữ liệu nhập : {inputValue}</p>
		</div>
	);
};

export default InputChange;
