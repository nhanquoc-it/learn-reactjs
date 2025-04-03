import Counter from "./components/Counter";

function App(props) {
	return (
		<Counter
			render={(data) => {
				// Nhận giá trị trả về từ Counter
				// qua props render.
				const { count, increment, decrement } = data;
				return (
					<>
						<p>Giá trị {count}</p>
						<button onClick={increment}>Tăng</button>
						<button onClick={decrement}>Giảm</button>
					</>
				);
			}}
		/>
	);
}

/*
    - Gọi component <Counter /> ở bất cứ đâu.
    - props có tên "render={}" => Truyền vào sẽ có giá trị là 1 function => Tham số của function đó sẽ là giá trị trả về.
*/
