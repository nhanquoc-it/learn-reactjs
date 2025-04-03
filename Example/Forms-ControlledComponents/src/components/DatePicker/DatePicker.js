// Component : DatePicker.js
import React, { useState } from "react";
import "./DatePicker.css";

const DatePicker = () => {
	const [selectedDate, setSelectedDate] = useState("");

	const handleDateChange = (e) => {
		setSelectedDate(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Ngày đã chọn:", selectedDate);
		// Thêm logic xử lý ngày đã chọn ở đây (gửi đến API, lưu vào state)
	};
	return (
		<div className="date-picker-container">
			<form onSubmit={handleSubmit}>
				<label>
					Chọn ngày :
					<input type="date" value={selectedDate} onChange={handleDateChange} />
					<br />
					<button type="submit">Chọn ngày</button>
				</label>
			</form>
		</div>
	);
};

export default DatePicker;
