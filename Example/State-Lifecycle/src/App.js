// Cú pháp emmet : rfce

// Import thư viện
import React from "react";
import "./App.css";

// Import Components
import Counter from "./components/Counter/Counter";
import Clock from "./components/Clock/Clock";
import Toggle from "./components/Toggle/Toggle";
import TodoList from "./components/TodoList/TodoList";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

// App.js (Component cha)
function App() {
	// Return Component - Render JSX
	return (
		<div className="App">
			<header className="App-header">
				{/* Gọi Component */}
				<Counter />
				<Clock />
				<Toggle />
				<TodoList />
				<CountdownTimer />
				<ColorPicker />
				<ImageCarousel />
				<ShoppingCart />
			</header>
		</div>
	);
}

export default App;
