// Component Con
import { useContext } from "react";
import { TodoContext } from "./TodoContext";

function TodoList() {
	// Nhận giá trị từ context
	const { todos } = useContext(TodoContext);
	// Render JSX
	return (
		<ul>
			{todos.map((todo) => (
				<li key={todo.id}>{todo.text}</li>
			))}
		</ul>
	);
}

export default TodoList;
