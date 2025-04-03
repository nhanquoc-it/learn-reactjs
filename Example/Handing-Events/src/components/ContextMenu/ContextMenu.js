// Component : ContextMenu.js
import React from "react";
import "./ContextMenu.css";

const ContextMenu = () => {
	// Hàm xử lý khi người dùng chuột phải
	const handleContextMenu = (e) => {
		e.preventDefault();
		// Hiển thị context menu tại vị trí chuột
		const contextMenu = document.getElementById("contextMenu");
		contextMenu.style.top = `${e.clientY} px`;
		contextMenu.style.left = `${e.clientX} px`;
		contextMenu.style.display = "block";
	};

	// Render JSX
	return (
		<div className="context-element" onContextMenu={handleContextMenu}>
			Right-click me
			{/* Context Menu */}
			<div id="contextMenu" className="context-menu">
				<div>Copy</div>
				<div>Paste</div>
				<div>Cut</div>
			</div>
		</div>
	);
};

export default ContextMenu;
