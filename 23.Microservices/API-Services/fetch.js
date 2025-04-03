// src/services/apiServer.js

// Hàm gọi API GET
export const fetchData = async () => {
	try {
		// Gọi đến API
		const response = await fetch(`https://api.example.com/data`);
		// Thất bại
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		// Thành công
		const data = await response.json();
		return data;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
};

// Hàm gọi API POST
export const postData = async (data) => {
	try {
		// Gọi đến API
		// Dữ liệu được gửi lên truyền vào là 1 object
		const response = await fetch(`https://example.com/data`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		// Thất bại
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		// Thành công
		const result = await response.json();
		return result;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
};
