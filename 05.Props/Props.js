/*============== Truyền props trong các components ==============*/

// Giả sử mình muốn truyền cho components "Welcome" các giá trị như :
const App = () => (
	<Welcome name="Nguyễn Văn A" age="25" gender="1">
		Xin chào bạn!
	</Welcome>
);

// Trong components "Welcome" giá trị của "props" sẽ là 1 object bao gồm các giá trị truyền vào :
// console.log(this.props);
// Kết quả trả về :
// {
//     name:"Nguyễn Văn A",
//     age:25,
//     gender:1,
//     children:"Xin chào bạn!"
// }

/*============== Nhận props trong components ==============*/

// Class components
import React, { Component } from "react";
class Welcome extends Component {
	render() {
		console.log(this.props); // Giá trị của props
		return (
			<div>
				<h1>Xin chào {this.props.name} !</h1>
			</div>
		);
	}
}
// export default Welcome;

// Function components
import React from "react";
const Welcome = (props) => {
	console.log(props); // Giá trị của props
	return (
		<div>
			<h1>Xin chào {props.name} !</h1>
		</div>
	);
};
//export default Welcome;
