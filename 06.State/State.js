import React from "react";

// Khởi tạo và lấy giá trị state
class App extends React.Component {
	constructor(props) {
		super(props);
		// Khởi tạo state
		this.state = { website: "W3School.com" };
	}
	render() {
		return (
			<div>
				{/* Lấy giá trị state */}
				<h1>Học ReactJS căn bản tại {this.state.website} </h1>
			</div>
		);
	}
}

export default App;

// Cập nhật state
export class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = { index: 1 };
	}
	render() {
		return (
			<div>
				<p>Giá trị {this.state.index}</p>
				<button
					onClick={() => {
						this.setState({ index: this.state.index + 1 });
					}}
				>
					Tăng
				</button>
				<button
					onClick={() => {
						this.setState({ index: this.state.index - 1 });
					}}
				>
					Giảm
				</button>
			</div>
		);
	}
}
