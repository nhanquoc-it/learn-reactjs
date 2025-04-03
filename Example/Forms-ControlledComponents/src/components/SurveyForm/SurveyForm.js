// Component : SurveyForm.js
import React, { useState } from "react";
import "./SurveyForm.css";

const SurveyForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		age: "",
		feedback: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Thông tin khảo sát:", formData);
		// Thêm logic xử lý thông tin khảo sát ở đây
	};

	return (
		<div className="survey-form">
			<form onSubmit={handleSubmit}>
				<label>
					Họ và Tên:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Tuổi:
					<input
						type="number"
						name="age"
						value={formData.age}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Ý kiến đông góp:
					<textarea
						name="feedback"
						value={formData.feedback}
						onChange={handleChange}
						required
					/>
				</label>
				<br />

				<button type="submit">Gửi Khảo Sát</button>
			</form>
		</div>
	);
};

export default SurveyForm;
