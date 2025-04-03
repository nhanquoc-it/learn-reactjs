const express = require("express");
const httpProxy = require("http-proxy");

const app = express();

// Tạo máy chủ proxy
const proxy = httpProxy.createProxyServer();

// Định nghĩa các route cho từng service
app.use("/service1", (req, res) => {
	// Định tuyến yêu cầu đến "target" tương ứng
	proxy.web(req, res, { target: "http://localhost:3001" });
});
app.use("/service2", (req, res) => {
	proxy.web(req, res, { target: "http://localhost:3002" });
});

// Khởi động server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Proxy server is running on port ${port}`));
