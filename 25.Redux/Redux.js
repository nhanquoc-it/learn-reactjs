// Import Redux
import redux from "redux";

// Tạo Actions
const increment = () => {
	type: "INCREMENT";
};

// Tạo Reducers
const counter = (state = 0, action) => {
	// Kiểm tra điều kiện
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		default:
			return state;
	}
};

// Tạo Store
import { createStore } from "redux";
const store = redux.createStore(counter);

// Thực hiện Dispatch
store.dispatch({ type: "INCREMENT" });

// Kết nối React với Redux : src/index.js
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

// Sử dụng Redux trong Component : Counter.js
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
	const count = useSelector((state) => state);
	const dispatch = useDispatch();

	return (
		<div>
			<p>Count : {count}</p>
			<button onClick={() => dispatch(increment())}>Increment</button>
		</div>
	);
};
