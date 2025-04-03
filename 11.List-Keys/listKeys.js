// Lists trong React
import React from "react";

// List course
function listKeys(props) {
	const myList = ["php", "javascript", "python", "C++"];
	const listItems = myList.map((item) => {
		<li>{item}</li>;
	});
	return <ul>{listItems}</ul>;
}

// List number
function NumberList(props) {
	const numbers = props.numbers;
	const numberItems = numbers.map((number) => {
		<li>{number * 2}</li>;
	});
	return <ul>{numberItems}</ul>;
}

// Keys trong React
function listKeys(props) {
	const myList = [
		{
			id: "p",
			name: "php",
		},
		{
			id: "j",
			name: "javascript",
		},
		{
			id: "py",
			name: "python",
		},
		{
			id: "c",
			name: "C++",
		},
	];

	// Thêm thuộc tính key vào trong thẻ jsx (id)
	const listItem = myList.map((item) => {
		<li key={item.id}>{item.name}</li>;
	});

	return <ul>{listItem}</ul>;
}

// Sử dụng id làm keys
const todoItems = todos.map((todo) => {
	<li key={todo.id}>{todo.text}</li>;
});

// Sử dụng index làm keys
const todoItem = todos.map((todo, index) => {
	<li key={index}>{todo.text}</li>;
});

// Trích xuất component với keys
function ListItem(props) {
	return <li>{props.value}</li>;
}
function NumberList(props) {
	const numbers = props.numbers;
	const listItems = numbers.map((number) => {
		// Trích xuất component
		<ListItem key={number.toString()} value={number * 2} />;
	});
	return <ul>{listItems}</ul>;
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
	<NumberList numbers={numbers} />,
	document.getElementById("root")
);

