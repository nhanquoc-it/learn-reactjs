// src/services/apiServer.js
import axios from "axios";

// Khởi tạo instance của Axios với cầu hình mặc định (baseURL, headers...)
const apiClient = axios.create({
	// baseURL : Địa chỉ API backend
	// headers : Thông báo cho server rằng dữ liệu trong body của yêu cầu là một chuỗi JSON
	baseURL: "https://api.example.com",
	headers: {
		"Content-Type": "application/json",
	},
});

// Hàm gọi API GET
export const fetchData = async () => {
	try {
		// Gọi API và lấy dữ liệu
		const response = await apiClient.get("/data");
		return response.data;
	} catch (error) {
		console.error("API Error:", error);
		throw error;
	}
};

// Hàm gọi API POST
export const login = async (email, password) => {
	try {
		// Gửi dữ liệu lên server
		const response = await axios.post("/api/login", { email, password });
		return response.data.success;
	} catch (error) {
		console.error("API Error: ", error);
		return false;
	}
};
