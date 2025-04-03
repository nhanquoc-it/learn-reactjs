// Component : FormSubmission.js
import React, { useState } from "react";
import "./FormSubmission.css";

const FormSubmission = () => {
	// Khởi tạo state
	const [formData, setFormData] = useState({
		username: "",
		email: "",
	});

	// Xử lý khi dữ liệu thay đổi
	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	// Xử lý khi nhấn submit form
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
	};
	// Render JSX
	return (
		<form className="form-submission" onSubmit={handleSubmit}>
			<label htmlFor="usernameInput">Username:</label>
			<input
				type="text"
				id="usernameInput"
				name="username"
				value={formData.username}
				onChange={handleChange}
			/>

			<label htmlFor="emailInput">Email:</label>
			<input
				type="email"
				id="emailInput"
				name="email"
				value={formData.email}
				onChange={handleChange}
			/>

			<button type="submit">Submit</button>
		</form>
	);
};

export default FormSubmission;
