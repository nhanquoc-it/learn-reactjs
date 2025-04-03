import "./App.css";
import USDtoVND from "./components/USDtoVND";
import VNDtoUSD from "./components/VNDtoUSD";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			usd: 0,
			vnd: 0,
		};
	}
	// Hàm này chịu trách nhận data từ component con
	handleChange = (data) => {
		this.setState(data);
	};

	render() {
		return (
			<div style={{ margin: "3%" }}>
				<USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
				<VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
			</div>
		);
	}
}

export default App;
