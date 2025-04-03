// File : App.js
import React, { useState } from "react";
import ConditionalStyling from "./components/ConditionalStyling";

function App() {
	// Khởi tạo state
	const [isActive, setIsActive] = useState(false);
	// Chuyển đổi trạng thái "active"
	const toggleActive = () => {
		setIsActive(!isActive);
	};
	// Render JSX
	return (
		<div>
			<h1>React Conditional Styling</h1>
			<button onClick={toggleActive}>Toggle Style</button>
			<ConditionalStyling isActive={isActive} />
		</div>
	);
}

export default App;
