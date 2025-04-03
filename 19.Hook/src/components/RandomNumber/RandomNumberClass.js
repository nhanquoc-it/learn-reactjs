// Sử dụng "Class Component"
import React, { Component } from "react";

export class RandomNumberClass extends Component {
	constructor(props) {
		super(props);
		//Khởi tạo state
		this.state = {
			number: 0,
		};
		this.randomNumber = this.randomNumber.bind(this);
	}

	randomNumber = () => {
		const number = Math.round(Math.random() * 100);
		// Cập  nhật state mới
		this.setState({
			number,
		});
	};

	// Render JSX
	render() {
		return (
			<div style={{ padding: "10%" }}>
				<b>{this.state.number}</b>
				<hr />
				<button onClick={this.randomNumber}>Random</button>
			</div>
		);
	}
}

export default RandomNumberClass;
