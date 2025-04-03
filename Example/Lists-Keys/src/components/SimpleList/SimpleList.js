// Component : SimpleList.js
import React from "react";
import "./SimpleList.css";

const SimpleList = () => {
	// Khai báo 1 mảng các phần tử
	const data = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

	// Render JSX
	return (
		<div>
			<h2>Simple List with Keys</h2>
			{/* Hiển thị danh sách các phần tử */}
			<ul className="simple-list">
				{data.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};

export default SimpleList;
