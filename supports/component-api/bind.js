// Bind Function : Giúp đảm bảo rằng các phương thúc của component có thể truy cập đúng đối tượng "this".

// Ví dụ
import React from "react";

class App extends React.Component {
	// Khởi tạo state
	constructor() {
		super();
		this.state = {
			title: "React JS",
		};
	}

	// Thay đổi tiêu đề
	changeTitle() {
		// Sẽ không nhận được giá trị của this.
		// Từ đó không thể set state được.
		this.setState({
			title: "Learning ReactJS",
		});
	}

	// Render UI
	render() {
		// Khi bạn gọi hàm như này sẽ gây ra lỗi.
		// Vì không chỉ định giá trị của biến "this" cho hàm changeTitle()
		return (
			<div>
				<h1 id="title">{this.state.title}</h1>
				<button onClick={this.changeTitle}>Change Title</button>
			</div>
		);
	}
}

export default App;

/* Lỗi :
Uncaught TypeError: Cannot read properties of undefined (reading 'setState')

Là vì : phương thức changeTitle sẽ không tự động nhận đúng "this" khi nó được gọi trong sự kiện "onClick".

<button onClick={this.changeTitle}>Change Title</button>
*/

// Cách fix :
// 1. Gọi bind() trong ES6 :
<button onCLick={this.changeTitle.bind(this)}>Change Title</button>;

// 2. Sử dụng arrow function, không cần gọi bind()
<button onClick={() => this.changeTitle()}>Change Title</button>;
