// Ví dụ về kiểm tra đăng nhập
import React, { Component } from "react";

// Rendering có điều kiện : if...else
class App extends Component {
	render() {
		var isLogin = true;
		if (isLogin) {
			return (
				<div>
					<h3>Xin chào bạn!</h3>
				</div>
			);
		} else {
			return (
				<div>
					<h3>Vui lòng đăng nhập!</h3>
				</div>
			);
		}
	}
}

// Gán element vào biến
class App extends Component {
	render() {
		const isLogin = true;

		if (isLogin) {
			// Gán element vào một biến
			var notification = <h3>Xin chào bạn!</h3>;
		} else {
			// Gán element vào một biến
			var notification = <h3>Vui lòng đăng nhập</h3>;
		}
		return <div>{notification}</div>;
	}
}

// Sử dụng cú pháp conditional operator
class App extends Component {
	render() {
		const isLogin = true;
		// Conditional operator
		const notification = isLogin ? (
			<h3>Xin chào bạn!</h3>
		) : (
			<h3>Vui lòng đăng nhập</h3>
		);

		return <div>{notification}</div>;
	}
}

// Biểu thức điều kiện trong JSX
class App extends Component {
	render() {
		const isLogin = true;
		return (
			<div>
				{isLogin ? <h3>Xin chào bạn!</h3> : <h3>Vui lòng đăng nhập</h3>}
			</div>
		);
	}
}

// Ngăn chặn component render

/* Component : Notification */
const Notification = (props) => {
	// Kiểm tra giá trị của props
	if (props.isShow) {
		// Trả về JSX để hiển thị
		return (
			<ul>
				<li>Thông báo 1</li>
				<li>Thông báo 2</li>
			</ul>
		);
	} else {
		// Trả về null để ẩn
		return null;
	}
};

/* Component : App */
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowNotification: false,
		};
	}

	render() {
		const { isShowNotification } = this.state;

		return (
			<div style={{ margin: 20 }}>
				<p>Học lập trình React JS</p>
				<button
					onClick={() => {
						// Cập nhật lại state
						this.setState({
							isShowNotification: !isShowNotification,
						});
					}}
				>
					{isShowNotification ? "Hiển thị" : "Ẩn"}
				</button>
				{/* Gọi component Notification */}
				<Notification isShow={isShowNotification} />
			</div>
		);
	}
}
