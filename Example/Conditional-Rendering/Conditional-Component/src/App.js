// File : App.js
import React from "react";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
	// Giả sử giá trị của "showComponentA" được lấy từ đâu đó
	const showComponentA = true;
	return (
		<div>
			<h1>React Conditional Component</h1>
			<ConditionalComponent showComponentA={showComponentA} />
		</div>
	);
}

export default App;
