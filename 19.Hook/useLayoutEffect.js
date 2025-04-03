// Import Hook : useLayoutEffect
import React, { useLayoutEffect, useRef, useState } from "react";

function MyComponent() {
	// Khởi tạo state
	const [size, setSize] = useState({ width: 0, height: 0 });

	// Khởi tạo 1 tham chiếu
	const myRef = useRef(null);

	// Tính toán kích thước của phần tử được trỏ đến bởi "myRef"
	useLayoutEffect(() => {
		// Cập nhật state
		setSize({
			width: myRef.current.clientWidth,
			height: myRef.current.clientHeight,
		});
	}, []);

	// Render JSX
	return (
		<div ref={myRef}>
			The size of this element is {size.width} x {size.height} pixels.
		</div>
	);
}
