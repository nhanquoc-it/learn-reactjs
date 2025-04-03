// Component con : PrivateRoute
// Cú pháp emmet : rafc

import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
	const { isLoggedIn, component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
			}
		/>
	);
};

export default PrivateRoute;

/*
    - Component này để bảo vệ một tuyến đường khỏi việc truy cập trái phép.
    - Nếu "Chưa Đăng Nhập" > chuyển hướng đến trang đăng nhập "/login".
    - Nếu "Đã Đăng Nhập" > cho phép người dùng truy cập vào tuyến đường được bảo vệ.
*/
