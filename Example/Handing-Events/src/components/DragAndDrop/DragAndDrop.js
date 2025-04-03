// Component : DragAndDrop.js
import React from "react";
import "./DragAndDrop.css";

const DragAndDrop = () => {
	// XỬ lý khi người dùng bắt đầu kéo phần tử
	const handleDragStart = (e) => {
		e.dataTransfer.setData("text/plain", "Drag Me!");
	};

	// Cho phép một phần tử nhận dữ liệu khi đang ở trạng thái kéo
	const handleDragOver = (e) => {
		e.preventDefault();
	};

	// Xử lý khi người dùng thả phần tử
	const handleDrop = (e) => {
		e.preventDefault();
		const newPosition = e.clientX + "," + e.clientY;
		console.log("New position: ", newPosition);
	};

	// Render JSX
	return (
		<div>
			<h1>ReactJS : Handling Events Drag & Drop</h1>
			<div
				className="draggable-element"
				draggable="true"
				onDragStart={handleDragStart}
				onDragOver={handleDragOver}
				onDrop={handleDrop}
			>
				Drag me!
			</div>
		</div>
	);
};

export default DragAndDrop;
