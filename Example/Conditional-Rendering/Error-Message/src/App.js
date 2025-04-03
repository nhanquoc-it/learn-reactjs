// File : App.js
import React, { useState } from "react";
import ErrorMessage from "./components/ErrorMessage";

function App() {
	// Khởi tạo state
	const [hasError, setHasError] = useState(false);
	// Cập nhật state
	const simulateError = () => {
		setHasError(true);
	};
	// Render JSX
	return (
		<div>
			<h1>React Error Handling</h1>
			<button onClick={simulateError}>Simulate Error</button>
			<ErrorMessage hasError={hasError} />
		</div>
	);
}

export default App;
