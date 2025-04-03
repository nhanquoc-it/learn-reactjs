import React, { Component } from "react";
// Khởi tạo một Refs
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef(); // Khởi tạo một ref
	}

	// Handle event
	handleClick = () => {
		// Thuộc tính current trong refs cho phép chúng ta chỉ định element hiện tại được tham chiếu.
		this.myRef.current.focus();
	};

	// Render JSX
	// Gán giá trị refs cho <input />
	render() {
		return (
			<div>
				<input
					name="email"
					onChange={this.onChange}
					ref={this.myRef}
					type="text"
				/>
				{/* Khi click button sẽ tham chiếu đến input thông qua refs */}
				<button onClick={this.handleClick}>Focus Input</button>
			</div>
		);
	}
}

export default MyComponent;

// Kỹ thuật : Forwarding Refs

/*===== Function Component =====*/
/* Component Con */
const Children = React.forwardRef((props, ref) => {
	return <input name={props.name} ref={ref} />;
});

/* Component Cha */
const Parent = () => {
	let ref = React.createRef(); // Khởi tạo một ref
	const handleButton = () => {
		ref.current.focus();
	};
	return (
		<>
			<Children name="email" ref={ref} />
			<button onClick={handleButton}>Focus Input</button>
		</>
	);
};
// export default Parent;

/*===== Class Component =====*/

// Lấy ref thông qua props
class WrappedComponent extends Component {
	render() {
		return (
			<input type="text" name={this.props.name} ref={this.props.innerRef} />
		);
	}
}

// Gửi component được bọc của chúng tôi với ForwardRef
// Truyền vào props giá trị của refs
const MyInput = React.forwardRef((props, ref) => {
	return <WrappedComponent innerRef={ref} {...props} />;
});
//export default MyInput;
