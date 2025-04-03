// screen
import { render, screen } from "@testing-library/react";
import MyComponent from "./MyComponent";

test("renders a heading with text 'Hello, world!'", () => {
	render(<MyComponent />);
	// Tìm kiếm phần tử <h1> có nội dung "Hello, world!"
	const headingElement = screen.getByRole("heading", {
		name: /hello, world!/i,
	});
	// Kiểm tra xem phàn tử này có tồn tại trong DOM hay không
	expect(headingElement).toBeInTheDocument();
});

// fireEvent
/* Ví dụ về <button> và sự kiện "onClick" */
import { render, fireEvent, screen } from "@testing-library/react";
import MyButton from "./MyButton";

test("calls the onClick function when the button is clicked", () => {
	// Kiểm tra xem sự kiện "click" đã kích hoạt hay chưa
	const handleClick = jest.fn();
	render(<MyButton onClick={handleClick} />);
	// Tìm kiếm phần tử "button"
	const button = screen.getByRole("button");
	// Kích hoạt sự kiện click
	fireEvent.click(button);
	// Kiểm tra xem hàm "click" được gọi hay chưa
	expect(handleClick).toHaveBeenCalledTimes(1);
});

/* Ví dụ về <form> và sự kiện "onSubmit" */
import MyForm from "./MyForm";

test("submit the form with the correct values", () => {
	// Kiểm tra xem sự kiện "submit" đã được kích hoạt hay chưa
	const handleSubmit = jest.fn();
	render(<MyForm onSubmit={handleSubmit} />);

	// Tìm kiếm các input theo nhãn của chúng
	const inputName = screen.getByLabelText("Name:");
	const inputEmail = screen.getByLabelText("Email:");

	// Tìm kiếm phần tử "button" có tên là "Submit"
	const submitButton = screen.getByRole("button", { name: "Submit" });

	// Giả lập việc người dùng nhập dữ liệu vào các trường input
	// Tham số thứ hai : 1 object mô tả giá trị mới của input
	fireEvent.change(inputName, { target: { value: "John" } });
	fireEvent.change(inputEmail, { target: { value: "john@example.com" } });

	// Giả lập việc click vào nút "Submit"
	fireEvent.click(submitButton);

	// Kiểm tra xem hàm xử lý sự kiện "submit" đã được gọi với đúng giá trị hay chưa
	expect(handleSubmit).toHaveBeenCalledTimes(1);
	expect(handleSubmit).toHaveBeenCalledWith({
		name: "John",
		email: "john@example.com",
	});
});
