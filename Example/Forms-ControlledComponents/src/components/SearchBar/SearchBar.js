// Component : SearchBar.js
import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
	const [keyword, setKeyword] = useState("");

	const handleChange = (e) => {
		setKeyword(e.target.value);
	};

	const handleSearch = () => {
		console.log("Từ khóa tìm kiếm:", keyword);
	};
	return (
		<div className="search-bar">
			<input
				type="text"
				placeholder="Nhập từ khóa"
				value={keyword}
				onChange={handleChange}
			/>
			<button onClick={handleSearch}>Search</button>
		</div>
	);
};

export default SearchBar;
