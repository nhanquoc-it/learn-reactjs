// Component : PasswordStrengthChecker.js
import React, { useState } from "react";
import "./PasswordStrengthChecker.css";

const PasswordStrengthChecker = () => {
	// Khởi tạo state
	const [password, setPassword] = useState("");

	// Hàm xử lý mức độ mạnh yếu của mật khẩu
	const calculateStrength = () => {
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasDigit = /\d/.test(password);
		const hasSpecialChar = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);

		// Kiểm tra điều kiện mật khẩu
		if (
			password.length >= 8 &&
			hasUpperCase &&
			hasLowerCase &&
			hasDigit &&
			hasSpecialChar
		) {
			return "Mạnh";
		} else if (
			password.length >= 6 &&
			(hasUpperCase || hasLowerCase) &&
			(hasDigit || hasSpecialChar)
		) {
			return "Trung bình";
		} else {
			return "Yếu";
		}
	};

	// Xử lý sự thay đổi mật khẩu - Cập nhật state
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// Render JSX
	return (
		<div className="password-strength-checker">
			<label htmlFor="passwordInput">Password:</label>
			<input
				type="password"
				id="passwordInput"
				value={password}
				onChange={handlePasswordChange}
			/>
			<p>Password Strength : {calculateStrength()}</p>
		</div>
	);
};

export default PasswordStrengthChecker;
