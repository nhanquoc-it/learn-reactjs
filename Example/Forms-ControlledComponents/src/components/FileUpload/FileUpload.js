// Component : FileUpload.js
import React, { useState } from "react";
import "./FileUpload.css";

const FileUpload = () => {
	const [selectedFile, setSelectedFile] = useState(null);

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		setSelectedFile(file);
	};

	const handleUpload = () => {
		if (selectedFile) {
			console.log("Thông tin tệp đã chọn:", selectedFile);
			// Thêm logic xử lý file tải lên ở đây (ví dụ: gửi đến API, lưu vào state,...)
			setSelectedFile(null); // Đặt lại trạng thái tệp đã chọn sau khi tải lên
		}
	};
	return (
		<div className="input-upload-container">
			<input type="file" onChange={handleFileChange} />
			<button onClick={handleUpload}>Upload</button>
		</div>
	);
};

export default FileUpload;
