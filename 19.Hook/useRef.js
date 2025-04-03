import React, { useRef, useEffect } from "react";

// Lưu trữ 1 tham chiến đến 1 phần tử DOM và thay đổi thuộc tính của phần tử đó
function ObjectComponent() {
	// Lưu trữ một tham chiếu
	const myRef = useRef(null);
	const inputRef = useRef(null);

	// Thay đổi thuộc tính thẻ <div>
	useEffect(() => {
		myRef.current.textContent = "Hello, world!";
	}, []);

	// Tự động focus vào ô "input" khi nhấn vào "button"
	const focusInput = () => {
		inputRef.current.focus();
	};

	// Render JSX
	return (
		<div>
			<div ref={myRef}></div>
			<input ref={inputRef} type="text" />
			<button onClick={focusInput}>Focus vào input</button>
		</div>
	);
}

// Lưu trữ 1 biến không thay đổi giữa các lần render
function VariableComponent() {
    
	// Lưu trữ một biến - Khởi tạo giá trị ban đầu là 0.
	const countRef = useRef(0);

	// Hàm tăng giá trị của biến "countRef"
	const incrementCount = () => {
		countRef.current += 1;
		console.log(`Count is ${countRef.current}`);
	};

	// Render JSX
	return (
		<div>
			<button onClick={incrementCount}>Increment count</button>
		</div>
	);
}
