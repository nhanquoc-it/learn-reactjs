import React, { useCallback } from "react";

function MyComponent({ onCLick }) {
	const handleCLick = useCallback(() => {
		onCLick("clicked");
	}, [onCLick]);

	return <button onClick={handleCLick}>Click me!</button>;
}

/*
    - handleClick() : là một hàm được tạo ra bởi useCallback().
    - Truyền vào <button> dưới dạng "props" là : onClick
    - useCallback() : sẽ lưu trữ phiên bản của "handleClick()" trong bộ nhớ.
    - Trả về nó cho mỗi lần component được render lại.
    - Tránh việc tạo lại hàm này mỗi lần component được render lại.
*/
