import React from "react";

const UserDetail = ({ user }) => {
	return (
		<div>
			<h2>User Details</h2>
			<p>
				<strong>Name:</strong> {user.name}
			</p>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
			<p>
				<strong>Address:</strong> {user.address.street}, {user.address.city},{" "}
				{user.address.zipcode}
			</p>
			{/* Thêm thông tin chi tiết khác của người dùng nếu cần */}
		</div>
	);
};

export default UserDetail;
