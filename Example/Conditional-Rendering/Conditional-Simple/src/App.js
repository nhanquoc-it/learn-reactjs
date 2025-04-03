// File : App.js
import React, { useState } from "react";
import SimpleConditionalRendering from "./components/SimpleConditionalRendering";
import "./App.css";

function App() {
	// Khởi tạo state
	const [showMessage, setShowMessage] = useState(true);
	return (
		<div className="App">
			<h1>React Conditional Rendering Exercise</h1>
			{/* Hàm xử lý hiển thị thông báo */}
			<button onClick={() => setShowMessage(!showMessage)}>
				{showMessage ? "Hide Message" : "Show Message"}
			</button>

			{/* Gọi Component */}
			<SimpleConditionalRendering showMessage={showMessage} />
		</div>
	);
}

export default App;
