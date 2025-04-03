const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const port = 4000;

const services = [
	{
		name: "service1",
		url: "http://localhost:3001",
	},
	{
		name: "service2",
		url: "http://localhost:3002",
	},
];

// Đăng ký proxy middleware cho mỗi dịch vụ trong mảng [services]
services.forEach((service) => {
	app.use(
		`/${service.name}`,
		createProxyMiddleware({
			target: service.url, // chuyển hướng đến url tương ứng
			changeOrigin: true, // cập nhật header host
			pathRewrite: {
				[`^/${service.name}`]: "", // loại bỏ tiền tố tên dịch vụ khỏi url
			},
		})
	);
});

// Khởi chạy server
app.listen(port, () => console.log(`Load Balancer is running on port ${port}`));
