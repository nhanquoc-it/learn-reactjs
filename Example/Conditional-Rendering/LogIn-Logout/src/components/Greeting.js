// Components
const UserGreeting = (props) => {
	return <h2>Welcome back!</h2>;
};

const GuestGreeting = (props) => {
	return <h2>Please sign in.</h2>;
};

// Function
Greeting = (props) => {
	const isLoggedIn = props.isLoggedIn;
	if (isLoggedIn) {
		return <UserGreeting />;
	}
	return <GuestGreeting />;
};
