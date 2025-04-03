// Component : Autocomplete.js
import React, { useState } from "react";
import "./Autocomplete.css";

const Autocomplete = () => {
	// Khởi tạo state
	const [inputValue, setInputValue] = useState("");
	const [options, setOptions] = useState([
		"Apple",
		"Banana",
		"Cherry",
		"Date",
		"Grape",
	]);

	// Hàm xử lý khi giá trị input thay đổi
	const handleInputChange = (e) => {
		const value = e.target.value;
		setInputValue(value);
	};
	// Hàm xử lý khi người dùng nhấn chọn các "options"
	const handleOptionClick = (selectedOption) => {
		setInputValue(selectedOption);
	};
	// Hàm lọc ra các options phù hợp
	const filteredOptions = options.filter((option) => {
		option.toLowerCase().includes(inputValue.toLowerCase());
	});
	// Render JSX
	return (
		<div className="autocomplete">
			<h2>Autocomplete trong ReactJS</h2>
			{/* Nhập liệu input */}
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Nhập từ khóa...."
			/>
			{/* Autocomplete  */}
			<ul className="options-list">
				{filteredOptions.map((option, index) => {
					return (
						<li key={index} onClick={() => handleOptionClick(option)}>
							{option}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Autocomplete;
