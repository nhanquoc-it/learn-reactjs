// Import Hook : useReducer
import { useReducer } from "react";

// Khởi tạo state
const initialTodos = [];

// Khởi tạo reducer
function reducer(state, action) {
	switch (action.type) {
		case "ADD_TODO":
			return [...state, action.payload];
		case "TOGGLE_TODO":
			return state.map((todo) =>
				todo.id === action.payload
					? { ...todo, completed: !todo.completed }
					: todo
			);
		case "DELETE_TODO":
			return state.filter((todo) => todo.id !== action.payload);
		default:
			return state;
	}
}

// Component : TodoList.js
function TodoList() {
	// Khởi tạo state và hàm dispatch gửi các action đến reducer
	const [todos, dispatch] = useReducer(reducer, initialTodos);

	// Hàm thêm mới công việc
	const addTodo = (newTodo) => {
		dispatch({ type: "ADD_TODO", payload: newTodo });
	};

	// Hàm đánh dấu hoàn thành
	const toggleTodo = (id) => {
		dispatch({ type: "TOGGLE_TODO", payload: id });
	};

	// Hàm xóa công việc
	const deleteTodo = (id) => {
		dispatch({ type: "DELETE_TODO", payload: id });
	};

	// Render JSX
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>
					<span
						onClick={() => toggleTodo(todo.id)}
						style={{ textDecoration: todo.completed ? "line-through" : "none" }}
					>
						{todo.text}
					</span>
					<button onClick={() => deleteTodo(todo.id)}>Delete</button>
				</li>
			))}
		</ul>
	);
}

export default TodoList;
