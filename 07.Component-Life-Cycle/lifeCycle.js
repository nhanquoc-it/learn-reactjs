import React from "react";

// Component Lifecycle
class lifeCycle extends React.Component {
	// Initialization
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			clickedStatus: false,
			list: [],
		};
	}
	// Mounting
	componentWillMount() {
		console.log("Component will mount!");
	}
	componentDidMount() {
		console.log("Component did mount!");
		this.getList();
	}
	getList = () => {
		// Call API
		fetch("https://api.mydomain.com")
			.then((response) => response.json())
			.then((data) => this.setState({ list: data }));
	};

	// Updating
	shouldComponentUpdate(nextProps, nextState) {
		return this.state.list !== nextState.list;
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("Component will update!");
	}
	componentDidUpdate(prevProps, prevState) {
		console.log("Component did update!");
	}

	// Unmounting
	componentWillUnmount() {
		console.log("Component will unmount");
	}

	// render
	render() {
		return (
			<div>
				<h2>Components Lifecycle Methods</h2>
			</div>
		);
	}
}
