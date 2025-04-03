// Component : TimeTrackingForm.js
import React, { useState } from "react";
import "./TimeTrackingForm.css";

const TimeTrackingForm = () => {
	// Khởi tạo state
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [description, setDescription] = useState("");

	// Hàm xử lý thời gian bắt đầu
	const handleStartTimeChange = (e) => {
		setStartTime(e.target.value);
	};

	// Hàm xử lý thời gian kết thúc
	const handleEndTimeChange = (e) => {
		setEndTime(e.target.value);
	};

	// Hàm xử lý mô tả công việc
	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	};

	// Hàm xử lý khi nhấn nút "submit"
	const handleSubmit = (e) => {
		e.preventDefault();
		// Đoạn này bạn có thể thêm logic để xử lý dữ liệu
		// GỬi dữ liệu đến server, lưu vào state
		console.log("Start Time:", startTime);
		console.log("End Time:", endTime);
		console.log("Description:", description);
	};

	// Render JSX
	return (
		<div className="time-tracking-form">
			<h2>Time Tracking Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="start-time">Start Time:</label>
					<input
						type="time"
						id="start-time"
						value={startTime}
						onChange={handleStartTimeChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="end-time">End Time:</label>
					<input
						type="time"
						id="end-time"
						value={endTime}
						onChange={handleEndTimeChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="description">Description:</label>
					<textarea
						id="description"
						value={description}
						onChange={handleDescriptionChange}
						required
					/>
				</div>

				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default TimeTrackingForm;
