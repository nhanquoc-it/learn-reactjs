// Component Cha
import { useState } from "react";
import { TodoContext } from "./TodoContext";

// Tạo 1 Provider Component
function TodoProvider({ children }) {
	// Khơi tạo state
	const [todos, setTodos] = useState([]);

	// Hàm thêm công việc mới - Cập nhật state
	const addTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	// Render JSX
	return (
		// Truyền giá trị cho context
		<TodoContext.Provider value={{ todos, addTodo }}>
			{children}
		</TodoContext.Provider>
	);
}
export default TodoProvider;
