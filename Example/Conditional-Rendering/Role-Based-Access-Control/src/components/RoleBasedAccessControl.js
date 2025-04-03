// Component : RoleBasedAccessControl.js
import React from "react";

const RoleBasedAccessControl = ({ userRole }) => {
	return (
		<div>
			{userRole === "admin" ? (
				<button>Admin Panel</button>
			) : (
				<div>User Dashboard </div>
			)}
		</div>
	);
};

export default RoleBasedAccessControl;
