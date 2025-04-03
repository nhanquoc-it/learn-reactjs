// Import Hook : useMemo
import React, { useState, useMemo } from "react";

function FibonacciComponent() {
	const [num, setNum] = useState(1);

	// Tính toán số "Fibonacci", nhưng chỉ tính lại khi "num" thay đổi
	const fibonacci = useMemo(() => {
		const calculateFibonacci = (n) => {
			if (n <= 1) return n;
			return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
		};
		return calculateFibonacci(num);
	}, []);

	// Render JSX
	return (
		<div>
			<p>
				Fibonacci of {num}: {fibonacci}
			</p>
			<button onClick={() => setNum(num + 1)}>Next</button>
		</div>
	);
}

/*
    - fibonacci : là 1 giá trị được tạo bởi useMemo().
    - Được trả về trong "component".
    - useMemo() sẽ lưu trữ phiên bản của "fibonacci" trong bộ nhớ > Trả về nó > Mỗi lần component được re-render.
    - Chỉ tính lại khi "num" thay đổi.
*/
