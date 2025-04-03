// Component : LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
	// Khởi tạo state
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	// Hàm xử lý khi nhấn nút "login"
	const handleSubmit = (e) => {
		e.preventDefault();
		//Kiểm tra thông tin đăng nhập
		if (username === "admin" && password === "password") {
			alert("Login successful!");
		} else {
			setError("Invalid username or password. Please try again.");
		}
	};

	// Render JSX
	return (
		<div className="login-form">
			<h2>Login</h2>
			{/* Hiện thông báo lỗi */}
			{error && <div className="error-message">{error}</div>}
			{/* Form xử lý */}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label>Username:</label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default LoginForm;
