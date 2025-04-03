// Component con : TodoList
// Cú pháp emmet : rafc
import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
	// Khởi tạo trạng thái "todos"
	const [todos, setTodos] = useState([]);
	// Khởi tạo trạng thái "input"
	const [input, setInput] = useState("");

	// Hàm xử lý thêm công việc mới
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			// Kiểm tra giá trị không rỗng
			if (input.trim() !== "") {
				// Thêm công việc mới vào mảng todos
				setTodos([...todos, { text: input, completed: false }]);
				// Xóa giá trị trong input
				setInput("");
			}
		}
	};

	// Hàm xử lý công việc hoàn thành || chưa hoàn thành
	const toggleTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	// Render JSX
	return (
		<div className="todo-list">
			<h2>Todo List</h2>
			<div className="todos">
				{todos.map((todo, index) => (
					<div
						key={index}
						className={`todo ${todo.completed ? "completed" : ""}`}
						onClick={() => toggleTodo(index)}
					>
						{todo.text}
					</div>
				))}
			</div>
			<input
				type="text"
				placeholder="Add a new todo..."
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default TodoList;
