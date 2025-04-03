// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);
	const [error, setError] = useState(null);

	// Call API
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setUsers(response.data);
			} catch (error) {
				setError(error.message);
			}
		};
		fetchUsers();
	}, []);
	// Hàm xử lý gửi yêu cầu xóa người dùng từ API
	const handleDeleteUser = async (userId) => {
		try {
			// Gửi yêu cầu HTTP "DELETE" đến API
			await axios.delete(
				`https://jsonplaceholder.typicode.com/users/${userId}`
			);
			setUsers(users.filter((user) => user.id !== userId));
			alert("User deleted successfully!");
		} catch (error) {
			console.error("Error deleting user:", error);
			alert("Failed to delete user. Please try again.");
		}
	};
	// Hiển thị thông báo lỗi
	if (error) {
		return <div>Error : {error}</div>;
	}

	// Render JSX
	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>
						{user.name} - {user.email}
						<button onClick={() => handleDeleteUser(user.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
