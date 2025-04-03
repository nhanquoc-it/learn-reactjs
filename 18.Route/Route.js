// BrowserRouter =================================

/* Cách 1 : Sử dụng trong Component : App.js */
import { BrowserRouter } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<div>{/* Các thành phần khác sẽ được điền vào đây */}</div>
		</BrowserRouter>
	);
}

/* Cách 2 : Sử dụng trong File : "index.js" */
import { BrowserRouter } from "react-route-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);

// Route =========================================
import React from "react";
import { Route } from "react-router-dom";
/* Component Con */
function AboutPage() {
	return <h1>About Page</h1>;
}
/* Component Cha */
function App() {
	return (
		<div>
			<Route path="/about" component={AboutPage} />
		</div>
	);
}

// Switch ========================================
import { Switch, Route } from "react-router-dom";
<Switch>
	<Route path="/" exact component={Home} />
	<Route path="/about" component={About} />
	<Route path="/contact/" strict component={Contact} />
	<Route path="/post/:id" component={PostDetail} />
	<Route path="/login" sensitive component={Login} />
</Switch>;

// Link ==========================================
import { Link } from "react-router-dom";
function Header() {
	return <Link to="/about">About</Link>;
}

// NavLink =======================================
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<NavLink to="/about" activeClassName="active">
			About
		</NavLink>
	);
}

// Route Params ===================================
/* Component Cha : App.js */
<Route path="/user/:id" component={UserPage} />;
/* Component Con : UserPage.js */
import { useParams } from "react-router-dom";
function UserPage() {
	const { id } = useParams();
	return <h1>User ID: {id}</h1>;
}

// Redirect =========================================
import { Redirect } from "react-router-dom";
<Route path="/old-path" render={() => <Redirect to="/new-path" />} />;

// useHistory =======================================

/* Cách 1 : Sử dụng "react-router-dom" */
import { useHistory } from "react-router-dom";
function SomeComponent() {
	const history = useHistory();
	const handleClick = () => {
		history.push("/new-route");
	};
	return <button onClick={handleClick}>Go to new Route</button>;
}

/* Cách 2 : Sử dụng "window.location.href" */
function SomeComponent() {
	const handleClick = () => {
		window.location.href = "/new-route";
	};
	return <button onClick={handleClick}>Go to new Route</button>;
}

/* Cách 3 : Sử dụng "History Object" */
import { createBrowserHistory } from "history";
const history = createBrowserHistory();
function SomeComponent() {
	const handleClick = () => {
		history.push("/new-route");
	};
	return <button onClick={handleClick}>Go to new Route</button>;
}

// useLocation =======================================
import { useLocation } from "react-router-dom";
function LocationInfo() {
	const location = useLocation();
	return <div>Current URL: {location.pathname}</div>;
}

// withRouter =========================================
import React from "react";
import { withRouter } from "react-router-dom";

function MyComponent(props) {
	console.log(props.match);
	console.log(props.location);
	console.log(props.history);
	return (
		<div>
			<h1>My Component</h1>
			<p>Match: {props.match.url}</p>
			<p>Location: {props.location.pathname}</p>
			<p>History Length: {props.history.length}</p>
		</div>
	);
}
export default withRouter(MyComponent);
