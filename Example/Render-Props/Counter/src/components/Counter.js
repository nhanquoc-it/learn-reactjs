import React from "react";

// Xây dựng bộ đếm, bao gồm nút tăng giảm
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};

		// Bind this
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
	}
	// Hàm này sẽ TĂNG giá trị của số
	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	// Hàm này sẽ GIẢM giá trị của số
	decrement() {
		this.setState({
			count: this.state.count - 1,
		});
	}

	// Render JSX
	render() {
		return (
			<div>
				{
					// Trả về giá trị cho props render
					this.props.render({
						count: this.state.count,
						increment: this.increment,
						decrement: this.decrement,
					})
				}
			</div>
		);
	}
}

export default Counter;
/*
    - Ở đây chúng ta sẽ trả về giá trị của số.
    - Hàm thực hiện tăng giảm số vào props có tên "render()".
*/
