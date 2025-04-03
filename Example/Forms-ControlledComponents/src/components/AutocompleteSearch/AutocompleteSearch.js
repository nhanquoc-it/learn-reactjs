// Component : AutocompleteSearch.js
import React, { useState } from "react";
import "./AutocompleteSearch.css";

const AutocompleteSearch = () => {
	// Khởi tạo state
	const [keyword, setKeyword] = useState("");
	const [options, setOptions] = useState([
		"ReactJS",
		"Vue.js",
		"Angular",
		"Express.js",
		"MongoDB",
		"JavaScript",
		"TypeScript",
		"HTML",
		"CSS",
	]);
	const [filteredOptions, setFilteredOptions] = useState([]);

	// Hàm xử lý thay đổi "input"
	const handleKeywordChange = (e) => {
		// Cập nhật "keyword"
		const newKeyword = e.target.value;
		setKeyword(newKeyword);

		// Cập nhật "filteredOptions"
		const newFilteredOptions = options.filter((option) =>
			option.toLowerCase().includes(newKeyword.toLowerCase())
		);
		setFilteredOptions(newFilteredOptions);
	};

	// Hàm xử lý khi nhấn chọn các "options"
	const handleOptionClick = (selectedOption) => {
		setKeyword(selectedOption);
		setFilteredOptions([]);
	};
	// Render JSX
	return (
		<div className="autocomplete-search">
			{/* Ô nhập liệu */}
			<label>
				Nhập từ khóa:
				<input type="text" value={keyword} onChange={handleKeywordChange} />
			</label>

			{/* Các options */}
			<ul className="options-list">
				{filteredOptions.map((option) => (
					<li key={option} onClick={() => handleOptionClick(option)}>
						{option}
					</li>
				))}
			</ul>
		</div>
	);
};

export default AutocompleteSearch;
