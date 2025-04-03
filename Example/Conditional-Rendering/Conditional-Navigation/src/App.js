// File : App.js
import React from "react";
import ConditionalNavigation from "./components/ConditionalNavigation";

function App() {
	// Giả sử isAdmin là "true" cho mục đích trình diễn
	const isAdmin = true;

	return (
		<div>
			<h1>Conditional Navigation</h1>
			<ConditionalNavigation isAdmin={isAdmin} />
		</div>
	);
}

export default App;
