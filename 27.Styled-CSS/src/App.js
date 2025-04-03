import React from "react";
// Import CSS Module
import Heading from "../css-modules/components/Heading/Heading";
import Paragraph from "../css-modules/components/Paragraph/Paragraph";
// Import CSS Style Sheet
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

const App = () => {
	return (
		<GlobalStyles>
			{/* Inline Style */}
			<div style={{ padding: "0 32px" }}>
				<Heading />
				<Paragraph />
			</div>
			{/* Style Sheet */}
			<div className="d-flex">
				<div>Item 1</div>
				<div>Item 2</div>
			</div>
		</GlobalStyles>
	);
};

export default App;
