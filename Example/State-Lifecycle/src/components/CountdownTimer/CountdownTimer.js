// Component con : CountdownTimer
// Cú pháp emmet : rafc

import React, { useState, useEffect } from "react";
import "./CountdownTimer.css";

const CountdownTimer = () => {
	// Tạo trạng thái "countdown"
	const [countdown, setCountdown] = useState(10);
	// Tạo trạng thái "isRunning"
	const [isRunning, setIsRunning] = useState(false);

	// Hàm xử lý khi nhấn nút "Start"
	const handleStart = () => {
		if (!isRunning) {
			setIsRunning(true);
			setCountdown(10); // Đặt lại thời gian đếm ngược về giá trị ban đầu
		}
	};

	// Hàm xử lý khi đếm ngược hoàn thành
	const handleCompletion = () => {
		setIsRunning(false);
		alert("Countdown completed!");
	};

	// Cập nhật trạng thái "isRunning"
	useEffect(() => {
		let timer;
		if (isRunning) {
			// Giảm thời gian dếm ngược mỗi giây
			timer = setInterval(() => {
				setCountdown((prevCountdown) => prevCountdown - 1);
			}, 1000);
		}

		// Kiểm tra khi đếm ngược đến 0
		if (countdown === 0) {
			handleCompletion();
			clearInterval(timer); // Dừng đếm ngược
		}

		// Xử lý khi component unmount
		return () => clearInterval(timer);
	}, [isRunning, countdown]);

	// Render JSX
	return (
		<div className="countdown-timer">
			<h2>Countdown Timer</h2>
			<div className="timer">
				<p>{countdown}</p>
			</div>
			<button onClick={handleStart} disabled={isRunning}>
				Start
			</button>
		</div>
	);
};

export default CountdownTimer;
