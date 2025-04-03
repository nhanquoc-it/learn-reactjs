const Brakes = require("brakes");
const fetch = require("node-fetch");

// Khởi tạo Circuit Breaker
const breaker = new Brakes(fetch, {
	timeout: 1500, // thời gian timeout
	threshold: 0.5, // ngưỡng phân chia Circuit Breaker
	circuitDuration: 30000, // thời gian circuit mở
	name: "my-breaker", // tên Circuit Breaker
});

// Sử dụng Circuit Breaker
async function getMyData() {
	try {
		const res = await breaker.exec("https://api.example.com/my-data");
		return res.json();
	} catch (err) {
		console.error("Circuit Breaker tripped:", err);
		return { error: true, message: "Failed to get data" };
	}
}

// Kết thúc Circuit Breaker
breaker.destroy();
