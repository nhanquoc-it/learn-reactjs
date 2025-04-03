// Components : ConditionalRenderingWithLists.js
import React from "react";
import "./ConditionalRenderingWithLists.css";

const ConditionalRenderingWithLists = () => {
	// Khởi tạo 1 mảng
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 15, 30, 22];
	// Render JSX
	return (
		<div className="conditional-lists">
			<h2>Conditional Rendering With Lists</h2>
			{/* Lặp qua các phần tử trong mảng */}
			<ul>
				{numbers.map((number) => {
					return (
						<li key={number} className={number % 2 === 0 ? "even" : "odd"}>
							{number}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default ConditionalRenderingWithLists;
