// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css"; // Import file CSS

const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");

	// Call API
	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await axios.get(
					"https://jsonplaceholder.typicode.com/users"
				);
				setUsers(response.data);
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
			{/* Tìm kiếm */}
			<input
				className="input-search"
				type="text"
				placeholder="Search users..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<ul>
				{/* Lọc theo tên user */}
				{users
					.filter((user) =>
						user.name.toLowerCase().includes(searchTerm.toLowerCase())
					)
					.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
			</ul>
		</div>
	);
};

export default UserList;
