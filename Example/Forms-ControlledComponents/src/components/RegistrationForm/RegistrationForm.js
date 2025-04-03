// Component : RegistrationForm.js
import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setRegisterData({
			...registerData,
			[name]: value,
		});
	};

	const handleRegister = (e) => {
		e.preventDefault();
		console.log("Thông tin đăng ký:", registerData);
	};

	return (
		<div className="register-container">
			<h2>Đăng ký tài khoản</h2>
			<form onSubmit={handleRegister}>
				<label>
					Tên:
					<input
						type="text"
						name="name"
						value={registerData.name}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={registerData.email}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Mật khẩu:
					<input
						type="password"
						name="password"
						value={registerData.password}
						onChange={handleChange}
					/>
				</label>
				<br />

				<button type="submit">Register</button>
			</form>
		</div>
	);
};

export default RegistrationForm;
