import React from "react";
import Button from "./components/Button/Button";

const App = () => {
	return (
		<div>
			{/* Component hiển thị bình thường */}
			<Button />
			{/* Component có truyền props */}
			<Button primary />
		</div>
	);
};

export default App;
