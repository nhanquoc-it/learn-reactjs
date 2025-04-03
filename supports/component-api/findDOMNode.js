// findDOMNode() : Cho phép làm việc với DOM trong React. Nó không khuyến khích vì sẽ làm thay đổi đến các Virtual DOM => có thể gây ra lỗi.

// Gọi đối tượng "ReactDOM" trong thư viện "react-dom" :
import ReactDOM from "react-dom";

// Sử dụng hàm findDOMNode() :
ReactDOM.findDOMNode(component);

// Ví dụ minh họa : Sửa đổi màu chữ của thẻ <h1> có id là "title" thành màu đỏ.

import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
	changeColor() {
		var title = document.getElementById("title");
		ReactDOM.findDOMNode(title).style.color = "red";
	}
	render() {
		return (
			<div>
				<h1 id="title">Tiêu đề</h1>
				<button onClick={() => this.changeColor()}>Change Color</button>
			</div>
		);
	}
}
export default App;
