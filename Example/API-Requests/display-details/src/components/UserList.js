// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);
	const [selectedUser, setSelectedUser] = useState(null);
	const history = useHistory();

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

	// Hàm xử lý khi người dùng được chọn
	const handleUserClick = (user) => {
		setSelectedUser(user);
		history.push(`/users/${user.id}`);
	};

	// Render JSX
	return (
		<div>
			<h1>User List</h1>
			<ul>
				{users.map((user) => (
					<li
						key={user.id}
						onClick={() => handleUserClick(user)}
						style={{ cursor: "point" }}
					>
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
