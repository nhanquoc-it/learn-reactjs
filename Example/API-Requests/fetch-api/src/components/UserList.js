// Component Con : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

// Fetching Data frpm API
const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);

	// Gọi API
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				// Gửi yêu cầu HTTP GET đến URL API
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				// Cập nhật state - Thành công
				setUsers(response.data);
			} catch (error) {
				// Thông báo lỗi
				console.error("Error fetching user:", error);
			}
		};

		fetchUsers();
	}, []);

	// Render JSX
	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
