// Component : PasswordChangeForm.js
import React, { useState } from "react";
import "./PasswordChangeForm.css";

const PasswordChangeForm = () => {
	// khởi tạo state
	const [currentPassword, setCurrentPassword] = useState("");
	const [newPassword, setNewPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	// Hàm xử lý mật khẩu hiện tại
	const handleChangeCurrentPassword = (e) => {
		setCurrentPassword(e.target.value);
	};

	// Hàm xử lý mật khẩu mới
	const handleChangeNewPassword = (e) => {
		setNewPassword(e.target.value);
	};

	// Hàm xử lý xác nhận mật khẩu mới
	const handleChangeConfirmPassword = (e) => {
		setConfirmPassword(e.target.value);
	};

	// Hàm xử lý khi nhấn "Thay Đổi Mật Khẩu"
	const handleSubmit = (e) => {
		e.preventDefault();

		// Kiểm tra mật khẩu mới và xác nhận mật khẩu mới
		if (newPassword === confirmPassword) {
			// In ra console
			console.log("Mật khẩu hiện tại:", currentPassword);
			console.log("Mật khẩu mới:", newPassword);
			console.log("Xác nhận mật khẩu mới:", confirmPassword);
			// Thêm logic xử lý thay đổi mật khẩu ở đây

			// Thiết lập lại giá trị ban đầu sau khi nhấn submit
			setCurrentPassword("");
			setNewPassword("");
			setConfirmPassword("");
		} else {
			console.error(
				"Mật khẩu mới và xác nhận mật khẩu mới không khớp. Vui lòng thử lại!"
			);
		}
	};

	// Render JSX
	return (
		<div className="password-change-form">
			<form onSubmit={handleSubmit}>
				<label>
					Mật khẩu hiện tại:
					<input
						type="password"
						value={currentPassword}
						onChange={handleChangeCurrentPassword}
					/>
				</label>
				<br />
				<label>
					Mật khẩu mới:
					<input
						type="password"
						value={newPassword}
						onChange={handleChangeNewPassword}
					/>
				</label>
				<br />
				<label>
					Xác nhận mật khẩu mới:
					<input
						type="password"
						value={confirmPassword}
						onChange={handleChangeConfirmPassword}
					/>
				</label>
				<br />

				<button type="submit">Thay Đổi Mật Khẩu</button>
			</form>
		</div>
	);
};

export default PasswordChangeForm;
