// Component : UserList.js
import React from "react";
import "./UserList.css";

const UserList = () => {
	const users = [
		{ id: 1, name: "John Doe", age: 30 },
		{ id: 2, name: "Jane Smith", age: 25 },
		{ id: 3, name: "Bob Johnson", age: 40 },
		{ id: 4, name: "Alice Williams", age: 35 },
	];
	return (
		<div>
			<h2>User List with Keys</h2>
			<ul className="user-list">
				{users.map((user) => (
					<li key={user.id} className="user-item">
						<strong>{user.name}</strong> - {user.age} years old
					</li>
				))}
			</ul>
		</div>
	);
};

export default UserList;
