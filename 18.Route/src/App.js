// Import thư viện React
import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

// Import Components
import Home from "./components/Home";
import About from "./components/About";
import User from "./components/User";

// Component Cha
function App() {
	return (
		<BrowserRouter>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/user">User</Link>
			</nav>

			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/user" component={User} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
