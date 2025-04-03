// Component : TodoList.js
import React from "react";
import "./TodoList.css";

const TodoList = () => {
	// Khai báo mảng danh sách việc cần làm
	const todoItems = [
		{ id: 1, text: "Learn React", completed: false },
		{ id: 2, text: "Build a Todo App", completed: false },
		{ id: 3, text: "Master CSS", completed: false },
		{ id: 4, text: "Study JavaScript", completed: true },
	];

	// Render JSX
	return (
		<div>
			<h2>Todo List with Keys</h2>
			{/* Hiển thị danh sách việc cần làm */}
			<ul className="todo-list">
				{todoItems.map((todo) => (
					<li
						key={todo.id}
						className={todo.completed ? "completed" : "incomplete"}
					>
						{todo.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
