import { useState } from "react";

// Hook : useClock()
function useClock() {
    // Khởi tạo state
	const [time, setTime] = useState("");
	const [ampm, setampm] = useState("");

	// Function cập nhật thời gian
	const updateTime = function () {
		let dateInfo = new Date();
		let hour = 0;

		// Lấy giá trị của giờ
		if (dateInfo.getHours() === 0) {
			hour = 12;
		} else if (dateInfo.getHours() > 12) {
			hour = dateInfo.getHours() - 12;
		} else {
			hour = dateInfo.getHours();
		}

		// Lấy giá trị của phút
		let minutes =
			dateInfo.getMinutes() < 10
				? parseInt("0" + dateInfo.getMinutes())
				: dateInfo.getMinutes();

		// Lấy giá trị của giây
		let seconds =
			dateInfo.getSeconds() < 10
				? "0" + dateInfo.getSeconds()
				: dateInfo.getSeconds();

		// Định dạng ngày
		let ampm = dateInfo.getHours() >= 12 ? "PM" : "AM";

		// Cập nhật state
		setampm(ampm);
		setTime(`${hour}:${minutes}:${seconds}`);
	};

	// Cập nhật thời gian sau mỗi 1 giây
	setInterval(function () {
		updateTime();
	}, 1000);

	// Trả về state
	return [time, ampm];
}

export default useClock;
