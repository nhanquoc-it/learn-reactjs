// api.js
import axios from "axios";

const api = axios.create({
	baseURL: "https://api.example.com/",
});

// Thêm interceptor cho request trước khi gửi
api.interceptors.request.use(
	(config) => {
		// Thực hiện logic xử lý rate limiting/throttling ở đây
		// Ví dụ: kiểm tra xem đã gửi bao nhiêu yêu cầu trong một khoảng thời gian nhất định và tạm dừng việc gửi yêu cầu nếu vượt quá giới hạn
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

// Thêm interceptor cho response sau khi nhận được
api.interceptors.response.use(
	(response) => {
		// Thực hiện các xử lý với response như thông báo lỗi khi vượt quá giới hạn
		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default api;
