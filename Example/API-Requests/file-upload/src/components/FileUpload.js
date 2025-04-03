// Component : FileUpload.js
import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
	// Khởi tạo state
	const [error, setError] = useState(null);
	const [file, setFile] = useState(null);
	const [successMessage, setSuccessMessage] = useState(null);

	// Hàm xử lý khi người dùng chọn tệp từ "input".
	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	// Hàm xử lý yêu cầu tải file từ người dùng gửi đến cho API
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const formData = new FormData();
			formData.append("file", file);

			await axios.post("https://example.com/api/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			setSuccessMessage("File uploaded successfully!");
		} catch (error) {
			console.error("Error uploading file:", error);
			setError("Failed to upload file. Please try again.");
		}
	};
	// Render JSX
	return (
		<div>
			<h2>File Upload</h2>
			{error && <div>Error: {error}</div>}
			{/* Upload File */}
			{successMessage && <div>{successMessage}</div>}
			<form onSubmit={handleSubmit}>
				<input type="file" onChange={handleFileChange} />
				<button type="submit">Upload</button>
			</form>
		</div>
	);
};

export default FileUpload;
