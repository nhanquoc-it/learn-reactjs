import "./App.css";
import Welcome from "./components/Welcome";
import Clothes from "./components/Clothes";

function App() {
	return (
		<div className="App">
			<Welcome />
			<Clothes name="Quần jean" type="Skinny" color="Đen" size="L">
				Props Clothes 1
			</Clothes>
			<Clothes name="Váy" type="váy công chúa" color="Trắng" size="M">
				Props Clothes 2
			</Clothes>
			<p>NhanQuocDev</p>
		</div>
	);
}

export default App;
