// Component : UserList.js
import React, { useState, useEffect } from "react";
import axios from "axios";
// Import Components
import Pagination from "./Pagination.js";

const UserList = () => {
	// Khởi tạo state
	const [users, setUsers] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(5); //Số người hiển thị trên mỗi trang

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

	// Logic để hiển thị người dùng cho trang hiện tại
	const indexOfLastUser = currentPage * usersPerPage;
	const indexOfFirstUser = indexOfLastUser - usersPerPage;
	const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

	// Tính tổng số trang
	const totalUsers = users.length;

	// Chuyển trang
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	// Render JSX
	return (
		<div>
			<h1>User List</h1>

			{/* Danh sách người dùng */}
			<ul>
				{currentUsers.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			{/* Phân trang */}
			<Pagination
				usersPerPage={usersPerPage}
				totalUsers={totalUsers}
				paginate={paginate}
				currentPage={currentPage}
			/>
		</div>
	);
};

export default UserList;
