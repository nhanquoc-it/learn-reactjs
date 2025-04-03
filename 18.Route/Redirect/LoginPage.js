// Component con : LoginPage
// Cú pháp emmet : rafc

import React from "react";
import { Redirect } from "react-router-dom";

const LoginPage = (props) => {
	const { isLoggedIn } = props;
	// Đã đăng nhập > Chuyển hướng đến trang chủ "/"
	if (isLoggedIn) {
		return <Redirect to="/" />;
	}
	// Chưa đăng nhập
	return (
		<div>
			<h1>Login Page</h1>
			<p>Please log in to continue</p>
		</div>
	);
};

export default LoginPage;
