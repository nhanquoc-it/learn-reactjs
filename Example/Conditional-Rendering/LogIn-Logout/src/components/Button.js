// Components
const LoginButton = (props) => {
	return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = (props) => {
	return <button onClick={props.onClick}>Logout</button>;
};

// Function
handleLoginClick = () => {
	this.setState({ isLoggedIn: true });
};

handleLogoutClick = () => {
	this.setState({ isLoggedIn: false });
};
