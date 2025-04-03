// Component : CopyToClipboard.js
import React, { useRef } from "react";
import "./CopyToClipboard.css";

const CopyToClipboard = () => {
	// Khởi tạo tham chiếu
	const textRef = useRef(null);

	// Hàm xử lý khi nhấn nút "copy"
	const handleCopy = () => {
		console.log("Copy button clicked!"); // In thông báo khi nhấn nút Copy

		if (textRef.current) {
			console.log(">>> Text field exists:", textRef.current); // In thông tin về "textRef"

			// Chọn nội dung trong "input" hoặc "textarea"
			textRef.current.select();
			console.log(">>> Text selected:", textRef.current.value); // In ra nội dung đã được chọn

			// Thực hiện sao chép
			document.execCommand("copy");
			console.log(">>> Text copied to clipboard");

			alert("Copied to clipboard!");
		} else {
			console.log("No text field found!");
		}
	};

	// Render JSX
	return (
		<div className="copy-to-clipboard">
			<textarea ref={textRef} value="Text to be copied" readOnly />
			<button onClick={handleCopy}>Copy</button>
		</div>
	);
};

export default CopyToClipboard;
