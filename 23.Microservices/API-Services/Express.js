// src/services/apiServer.js

// Import thư viện
const express = require("express");
const bodyParser = require("body-parser");

// Sử dụng express
const app = express();
const port = 3000;

// Đăng ký middleware
app.use(bodyParser.urlencoded({ extended: false })); // phân tích dữ liệu thông qua form HTML
app.use(bodyParser.json()); // parse dữ liệu dạng JSON

/* Tạo endpoint "/api/login" => Xử lý yêu cầu đăng nhập */
// Định nghĩa một route POST
app.post("/api/login", (req, res) => {
	// Lấy dữ liệu từ "body" của request
	const { email, password } = req.body;
	// Kiểm tra thông tin đăng nhập
	if (email === "user@example.com" && password === "123456") {
		res.json({ success: true });
	} else {
		res.json({ success: false });
	}
});
// Khởi động server - port tùy chỉnh
app.listen(port, () => {
	console.log(`API Service is listening on port ${port}!`);
});

/* Tạo endpoint "/api/products" => Danh sách sản phẩm */
const products = [
	{ id: 1, name: "Product A" },
	{ id: 2, name: "Product B" },
	{ id: 3, name: "Product C" },
];
// Định nghĩa một route GET
app.get("/api/products", (req, res) => {
	res.json(products);
});
// Khởi động server - port cố định
app.listen(3000, () => console.log(`API Service is running on port 3000`));
