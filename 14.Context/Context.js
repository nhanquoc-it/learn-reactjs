import React from "react";
/* 
    Ví dụ : MÌnh muốn chuyển lời nhắn từ "ComponentOng" sang "ComponentChau"

    + Cách truyền thông thường: Khi sử dụng truyền dữ liệu qua props thì buộc phải gửi lời nhắn qua: Ông => Cha => Cháu

    + Cách truyền khi sử dụng "Context" : Thì sẽ gửi trực tiếp từ Ông => Cháu (không cần đi qua Cha).
*/

/* Cách truyền thông thường */
const ComponentChau = (props) => {
	return <h1>Ông bảo là "{props.message}"</h1>;
};

const ComponentCha = (props) => {
	return <ComponentChau {...props} />;
};

const ComponentOng = () => {
	const message = "Vào trang web của ông để học lập trình";
	return <ComponentCha message={message} />;
};
// export default ComponentOng;

/* Cách truyền khi sử dụng "Context" */
const MessageContext = React.createContext();

class ComponentChau1 extends React.Component {
	render() {
		return <h1>Ông bảo là : "{this.context}"</h1>;
	}
}
ComponentChau1.contextType = MessageContext;

const ComponentOng1 = () => {
	return (
		<MessageContext.Provider value="Vào trang web của ông để học lập trình">
			<ComponentChau1 />
		</MessageContext.Provider>
	);
};
export default ComponentOng1;

// Ví dụ : Xây dựng ứng dụng random các số và hiển thị

/* Khởi tạo một object context */
const NumberContext = React.createContext();

/* Component : ContextComponent */
class ContextComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
		};
	}
	// Cập nhật state
	updateNumber = () => {
		this.setState({
			number: Math.random(),
		});
	};

	// render JSX
	render() {
		return (
			// Bọc quanh các component cần chia sẻ bằng "Provider" và "Consumer"
			<NumberContext.Provider
				value={{
					number: this.state.number,
					update: this.updateNumber.bind(this),
				}}
			>
				<NumberContext.Consumer>
					{() => (
						<>
							<ShowNumber />
							<UpdateNumber />
						</>
					)}
				</NumberContext.Consumer>
			</NumberContext.Provider>
		);
	}
}
// export default ContextComponent;

/* Component : UpdateNumber */
class UpdateNumber extends React.Component {
	render() {
		return (
			<button
				onClick={() => {
					// Gọi hàm update để thực hiện update số
					console.log(this.context.update());
				}}
			>
				Update Number
			</button>
		);
	}
}

/* Component : ShowNumber */
class ShowNumber extends React.Component {
	render() {
		// Hiển thị ra số
		return <p>{this.context.number}</p>;
	}
}

// Gán giá trị của context
UpdateNumber.contextType = NumberContext;
ShowNumber.contextType = NumberContext;
