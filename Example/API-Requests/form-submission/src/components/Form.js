// Component : Form.js
import React, { useState } from "react";
import axios from "axios";
import "./Form.css";

const Form = () => {
	// Khởi tạo state
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		address: "",
	});
	// Hàm xử lý thay đổi trong form
	const handleChange = (e) => {
		// e.target.name : "name" của field <input />
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	// Hàm xử lý khi form được gửi đi > Thông báo kết quả cho người dùng
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("https://jsonplaceholder.typicode.com/users", formData);
			alert("User added successfully!");
		} catch (error) {
			console.error("Error adding user:", error);
			alert("Failed to add user. Please try again.");
		}
	};

	return (
		<div className="form-container">
			<h2>Add New User</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</label>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Address:
					<input
						type="text"
						name="address"
						value={formData.address}
						onChange={handleChange}
					/>
				</label>

				<button type="submit">Add User</button>
			</form>
		</div>
	);
};

export default Form;
