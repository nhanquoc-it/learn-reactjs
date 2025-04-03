import React, { Component } from "react";
class LoginControl extends React.Component {
	// Xử lý code ở đây....

	// render JSX
	render() {
		<div>
			The user is <b>{isLoggedIn ? "currently" : "not"}</b> logged in.
			{button}
		</div>;
	}
}

// Hoặc có thể viết như sau :
class LoginControl extends React.Component {
	// Xử lý code ở đây....

	// render JSX
	render() {
		<div>
			{isLoggedIn ? (
				<LogoutButton onClick={this.handleLogoutClick} />
			) : (
				<LoginButton onClick={this.handleLoginClick} />
			)}
		</div>;
	}
}
