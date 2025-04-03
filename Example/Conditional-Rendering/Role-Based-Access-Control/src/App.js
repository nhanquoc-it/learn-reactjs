import React from "react";
import RoleBasedAccessControl from "./components/RoleBasedAccessControl";

function App() {
    // Giả sử vai trò của người dùng là quản trị viên, có thể thay đổi cho phù hợp
	const userRole = "admin";

	return (
		<div>
			<h1>Role-based Access Control</h1>
			<RoleBasedAccessControl userRole={userRole} />
		</div>
	);
}

export default App;
