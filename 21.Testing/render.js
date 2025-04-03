import { render } from "@testing-library/react";
import MyButton from "./MyButton";

// Tìm kiếm phần tử trong component
test("renders a heading", () => {
	const { getByRole } = render(<MyComponent />);
	const heading = getByRole("heading", { name: /Hello/i });
	expect(heading).toBeInTheDocument();
});

test("render a component with props", () => {
	const { getByRole } = render(<MyComponent name="John" age={30} />);
	const heading = getByRole("heading", { name: /Hello/i });
	expect(heading).toBeInTheDocument();
});

test("render a button with text 'Click me!'", () => {
	const { getByRole } = render(<MyButton label="Click me!" />);
	const button = getByRole("button", { name: /click me/i });
	expect(button).toBeInTheDocument();
});

/*
    - render() : được sử dụng để render component với các props được truyền vào.
    - Kết quả trả về được lưu vào biến { getByRole }.
    - Sau đó sử dụng phương thức "getByRole()" để tìm kiếm phần tử "button" trong component.
    - Kết quả lưu vào biến "button".
    - Sau đó kiểm tra xem phần tử này có tồn tại trong DOM hay không "toBeInTheDocument()".
*/
