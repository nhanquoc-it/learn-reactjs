// Component : TodoForm.js
import React, { useState } from "react";
import "./TodoForm.css";

const TodoForm = () => {
	const [todo, setTodo] = useState("");

	const handleChange = (e) => {
		setTodo(e.target.value);
	};

	const handleAddTodo = () => {
		console.log("Công việc mới:", todo);
		// Thêm logic xử lý công việc mới ở đây (ví dụ: gọi đến API, lưu vào state,...)
		setTodo(""); // Đặt lại trạng thái ô nhập liệu sau khi thêm công việc
	};
	return (
		<div className="todo-form">
			<input
				type="text"
				placeholder="Nhập công việc mới"
				value={todo}
				onChange={handleChange}
			/>
			<button onClick={handleAddTodo}>Add Todo</button>
		</div>
	);
};

export default TodoForm;
