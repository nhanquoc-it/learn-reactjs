// Component : ReservationForm.js
import React, { useState } from "react";
import "./ReservationForm.css";

const ReservationForm = () => {
	// State để lưu trữ thông tin đặt bàn
	const [reservationInfo, setReservationInfo] = useState({
		name: "",
		phoneNumber: "",
		numberOfPeople: "",
		reservationTIme: "",
	});
	// Hàm xử lý thay đổi thông tin đặt bàn
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setReservationInfo({
			...reservationInfo,
			[name]: value,
		});
	};

	// Hàm xử lý nộp biểu mẫu
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Thông tin đặt bàn:", reservationInfo);
		// Thêm logic xử lý tại đây (gửi đến API, lưu vào state)
	};

	// Render JSX
	return (
		<div className="reservation-form">
			<h2>Reservation Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={reservationInfo.name}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="phoneNumber">Phone Number:</label>
					<input
						type="text"
						id="phoneNumber"
						name="phoneNumber"
						value={reservationInfo.phoneNumber}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="numberOfPeople">Number of People:</label>
					<input
						type="number"
						id="numberOfPeople"
						name="numberOfPeople"
						value={reservationInfo.numberOfPeople}
						onChange={handleInputChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="reservationTIme">Reservation Time:</label>
					<input
						type="datetime-local"
						id="reservationTIme"
						name="reservationTIme"
						value={reservationInfo.reservationTIme}
						onChange={handleInputChange}
						required
					/>
				</div>

				<button type="submit">Submit Reservation</button>
			</form>
		</div>
	);
};

export default ReservationForm;
