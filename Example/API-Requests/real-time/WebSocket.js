// Server-side WebSocket configuration
const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
	ws.on("message", (message) => {
		// Xử lý và trả lời yêu cầu từ client (nếu cần)
	});

	// Gửi dữ liệu mới cho tất cả client khi có sự thay đổi
	setInterval(() => {
		const newData = generateData(); // Hàm này tạo dữ liệu mới
		wss.clients.forEach((client) => {
			if (client.readyState === WebSocket.OPEN) {
				client.send(JSON.stringify(newData));
			}
		});
	}, 1000);
});
