import React from "react";
import Button from "./components/Button/Button";

const App = () => {
	return (
		<div>
			<Button />
			<Button primary />
			{/* Component không nhấn vào được */}
			<Button primary disabled />
		</div>
	);
};

export default App;
