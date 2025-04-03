// Import thư viện React
import React from "react";

// Import Component
import { CounterContext } from "./CounterContext";
import Counter from "./Counter";

// File : App.js
class App extends React.Component {
	constructor(props) {
		super(props);
		// Khởi tạo state
		this.state = {
			count: 1,
		};
	}

	// Cập nhật giá trị của state "count" - Tăng
	countUp() {
		this.setState({
			count: this.state.count + 1,
		});
	}
	// Cập nhật giá trị của state "count" - Giảm
	countDown() {
		this.setState({
			count: this.state.count - 1,
		});
	}

	// Render JSX
	render() {
		// Chia sẻ state bằng "Provider"
		// Truyền giá trị vào props "value" > Giá trị của context
		return (
			<CounterContext.Provider
				value={{
					count: this.state.count,
					countUp: this.countUp.bind(this),
					countDown: this.countDown.bind(this),
				}}
			>
				<Counter />
			</CounterContext.Provider>
		);
	}
}
export default App;
