// Component : Login.js
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	// Khởi tạo state
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});
	// Hàm xử lý thay đổi trong form
	const handleChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value });
	};
	// Hàm xử lý khi form được gửi đi > Thông báo kết quả cho người dùng
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			//
			const response = await axios.post(
				"https://example.com/api/auth/login",
				credentials
			);
			console.log(response.data);
			alert("Login successfully!");
		} catch (error) {
			console.error("Error loggin in:", error);
			alert("Failed to log in. Please check your credentials add try again.");
		}
	};
	// Render JSX
	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={credentials.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password:
					<input
						type="password"
						name="password"
						value={credentials.password}
						onChange={handleChange}
					/>
				</label>

				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
