// Component : LoginForm.js
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
	// Khởi tạo state
	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});

	// Hàm xử lý khi có sự thay đổi trên form
	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};

	// Hàm xử lý khi nhấn nút "login"
	const handleLogin = (e) => {
		e.preventDefault();
		console.log("Thông tin đăng nhập:", loginData);
	};

	// Render JSX
	return (
		<form onSubmit={handleLogin}>
			<label>
				Tên người dùng:
				<input
					type="text"
					name="username"
					value={loginData.username}
					onChange={handleChange}
				/>
			</label>
			<br />
			<label>
				Mật khẩu:
				<input
					type="password"
					name="password"
					value={loginData.password}
					onChange={handleChange}
				/>
			</label>
			<br />

			<button type="submit">Login</button>
		</form>
	);
};

export default LoginForm;
