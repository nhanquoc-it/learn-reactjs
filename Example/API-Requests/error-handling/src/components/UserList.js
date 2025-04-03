// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

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
				setError(error.message); //Lưu thông báo lỗi vào state "error"
			}
		};
		fetchUsers();
	}, []);

	// Hiển thị thông báo lỗi nếu có lỗi xảy ra
	if (error) {
		return <div className="error-message">Error: {error}</div>;
	}

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
