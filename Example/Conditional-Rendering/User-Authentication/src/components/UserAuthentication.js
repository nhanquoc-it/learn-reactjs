// Component : UserAuthentication.js
import React, { useState } from "react";
import "./UserAuthentication.css";

const UserAuthentication = () => {
	// Khởi tạo state
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [username, setUsername] = useState("");

	// Login
	const handleLogin = () => {
		setIsLoggedIn(true);
		setUsername("User123"); // Giả sử tên người dùng được lấy từ quá trình xác thực
	};
	// Logout
	const handleLogout = () => {
		setIsLoggedIn(false);
		setUsername("");
	};
	// Render JSX
	return (
		<div>
			{/* Kiểm tra người dùng đã đăng nhập hay chưa */}
			{isLoggedIn ? (
				<div>
					<p>Welcome, {username}</p>
					<button onClick={handleLogout}>Logout</button>
				</div>
			) : (
				<button onClick={handleLogin}>Login</button>
			)}
		</div>
	);
};

export default UserAuthentication;
