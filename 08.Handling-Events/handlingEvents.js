import React from "react";

// React event với <button>
const ActionButton = () => {
	const handleClick = () => {
		console.log("Button was clicked!");
	};

	return <button onClick={handleClick}>Click me!</button>;
};

// React event với liên kết <a>
const ActionLink = () => {
	const handleClick = (e) => {
		e.preventDefault();
		console.log("The link was clicked!");
	};

	return (
		<a href="#" onCLick={handleClick}>
			Click me!
		</a>
	);
};
