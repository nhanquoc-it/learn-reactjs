// Kiểm tra 1 component
import { render, screen, act } from "@testing-library/react";
import MyComponent from "./MyComponent";

// Sử dụng async/await để đợi cho act() hoàn thành việc thực hiện các hành động
test("renders the component with the correct text", async () => {
	// Đảm bảo component đã được render hoàn toàn trước khi kiểm tra kết quả của test
	await act(async () => {
		render(<MyComponent />);
	});

	expect(screen.getByText("Hello, world!")).toBeInTheDocument();
});

// Cập nhật state của component
test("renders the component with the updated state", async () => {
	await act(async () => {
		render(<MyComponent />);
	});

	const button = screen.getByRole("button");
	expect(button).toBeInTheDocument();

	await act(async () => {
		button.click();
	});

	expect(screen.getByText("Clicked!")).toBeInTheDocument();
});
