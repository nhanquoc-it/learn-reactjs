// Component : ResizeWindow.js
import React, { useState, useEffect } from "react";
import "./ResizeWindow.css";

const ResizeWindow = () => {
	// Khởi tạo state
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	// Hàm xử lý khi thay đổi kích thước trình duyệt
	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	// Thực hiện side effect (Lắng nghe & Xóa) sự kiện trong DOM
	useEffect(() => {
		//Thêm sự kiện lắng nghe khi component được mount
		window.addEventListener("resize", handleResize);
		// Cleanup : loại bỏ sự kiện lắng nghe khi component bị unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Render JSX
	return (
		<div className="resize-window">
			<p>Window Width: {windowSize.width}px</p>
			<p>Window Height: {windowSize.height}px</p>
		</div>
	);
};

export default ResizeWindow;
