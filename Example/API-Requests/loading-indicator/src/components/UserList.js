// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";

const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	// Call API
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);

				setUsers(response.data);
				setIsLoading(false); // Ẩn biểu tượng loading khi dữ liệu đã được tải xong
			} catch (error) {
				console.error("Error fetching users:", error);
			}
		};
		fetchUsers();
	}, []);

	// Render JSX
	return (
		<div>
			<h1>User List</h1>
			{/* Kiểm tra nếu đang tải dữ liệu */}
			{isLoading ? (
				<div className="loading">Loading....</div>
			) : (
				<ul>
					{users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default UserList;
