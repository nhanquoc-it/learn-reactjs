// Component : UserProfile
// Cú pháp emmet : rafc

import React from "react";
import "./UserProfile.css";

// Hàm này nhận 1 props {user} từ App.js là 1 Object
const UserProfile = ({ user }) => {
	return (
		<div className="user-profile">
			<img src={user.avtUrl} alt={user.name} className="avatar" />
			<div className="user-info">
				<h2>{user.name}</h2>
				<p>{user.email}</p>
			</div>
		</div>
	);
};

export default UserProfile;
