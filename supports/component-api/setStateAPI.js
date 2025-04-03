// Hàm setState() : cho phép cập nhật giá trị của "state".

// Tham số truyền vào của API này => giá trị của "state" bạn muốn update.
this.setState({
	state: newState,
});

// Hoặc là một Function callback bao gồm các tham số lần lượt là state trước đó, và props có trong component.
this.setState((prevState, props) => {
	return newState;
});

// Ví dụ minh họa :
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1,
		};
	}
	// Giảm
	countDown() {
		this.setState({
			index: this.state.index - 1,
		});
	}
	// Tăng
	countUp() {
		this.setState((prevState, props) => {
			return {
				index: prevState.index + 1,
			};
		});
	}
	// Render UI
	render() {
		return (
			<div>
				<p>Giá trị: {this.state.index}</p>
				<button onClick={() => this.countDown()}>Down</button>
				<button onClick={() => this.countUp()}>Up</button>
			</div>
		);
	}
}

export default App;
