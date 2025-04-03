// Hàm forceUpdate() : re-render mà không cần bất cứ sự thay đổi nào của state.
this.forceUpdate();

// Ví dụ minh họa : Mỗi lần component được re-render sẽ random ra một số khác nhau.
import React from "react";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			index: 1,
		};
	}
	render() {
		return (
			<div>
				<p>Giá trị : {Math.random()}</p>
				<button onClick={() => this.forceUpdate()}>Reload</button>
			</div>
		);
	}
}

export default App;
