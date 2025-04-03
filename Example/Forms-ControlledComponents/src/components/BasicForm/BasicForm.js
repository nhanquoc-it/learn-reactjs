// Component : BasicForm.js
import React, { useState } from "react";
import "./BasicForm.css";

const BasicForm = () => {
	// Khởi tạo state
	const [formData, setFormData] = useState({
		name: "",
		email: "",
	});

	// Hàm xử lý khi có sự thay đổi trên form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	// Hàm xử lý khi nút "Submit" được nhấn
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Thông tin đã nhập:", formData);
	};
	// Render JSX
	return (
		<form onSubmit={handleSubmit}>
			<label>
				Tên:
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Email:
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
				/>
			</label>
			<br />

			<button type="submit">Submit</button>
		</form>
	);
};

export default BasicForm;
