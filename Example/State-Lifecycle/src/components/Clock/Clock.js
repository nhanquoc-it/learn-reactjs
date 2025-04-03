// Component con : Clock
// Cú pháp emmet : rafc

import React, { useState, useEffect } from "react";
import "./Clock.css";

const Clock = () => {
	// Khởi tạo trạng thái
	const [currentTIme, setCurrentTime] = useState(new Date());

	// Cập nhật trạng thái
	useEffect(() => {
		// Cập nhật trạng thái sau mỗi giây
		const intervalId = (setInterval =
			(() => {
				setCurrentTime(new Date());
			},
			1000));

		// Hủy bỏ interval khi component bị "unmount"
		return () => clearInterval(intervalId);
	}, []); // [] : chạy 1 lần

	return (
		<div className="clock">
			<p>Current Time: {currentTIme.toLocaleTimeString()}</p>
		</div>
	);
};

export default Clock;
