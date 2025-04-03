// Component : MultiStepForm.js
import React, { useState } from "react";
import "./MultiStepForm.css";

const MultiStepForm = () => {
	// Khởi tạo state
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
		address: "",
		city: "",
		state: "",
		zip: "",
	});

	// Hàm xử lý thay đổi trên các ô nhập liệu
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	// Hàm xử lý tăng step
	const nextStep = () => {
		setStep(step + 1);
	};

	// Hàm xử lý giảm step
	const prevStep = () => {
		setStep(step - 1);
	};

	// Hàm xử lý khi nhấn nút "Hoàn Thành"
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Thông tin đã nhập:", formData);
		// Thêm logic xử lý thông tin đã nhập ở đây
	};

	// Hàm xử lý các step của form
	const renderForm = () => {
		switch (step) {
			case 1:
				return (
					<div className="step-form">
						<h2>Bước 1: Thông Tin Cá Nhân</h2>
						<label>
							Họ:
							<input
								type="text"
								name="firstName"
								value={formData.firstName}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Tên:
							<input
								type="text"
								name="lastName"
								value={formData.lastName}
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
						<button onClick={nextStep}>Tiếp Theo</button>
					</div>
				);

			case 2:
				return (
					<div className="step-form">
						<h2>Bước 2: Địa Chỉ</h2>
						<label>
							Địa Chỉ:
							<input
								type="text"
								name="address"
								value={formData.address}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Thành Phố:
							<input
								type="text"
								name="city"
								value={formData.city}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Tỉnh / Thành Phố:
							<input
								type="text"
								name="state"
								value={formData.state}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<label>
							Mã Zip:
							<input
								type="text"
								name="zip"
								value={formData.zip}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<button onClick={prevStep}>Quay Lại</button>
						<button onClick={nextStep}>Tiếp Theo</button>
					</div>
				);
			case 3:
				return (
					<div className="step-form">
						<h2>Bước 3: Mật Khẩu</h2>
						<label>
							Mật Khẩu:
							<input
								type="password"
								name="password"
								value={formData.password}
								onChange={handleChange}
								required
							/>
						</label>
						<br />
						<button onClick={prevStep}>Quay Lại</button>
						<button onClick={handleSubmit}>Hoàn Thành</button>
					</div>
				);
			default:
				return null;
		}
	};

	// Render JSX
	return (
		<div className="multi-step-form">
			<form onSubmit={handleSubmit}>{renderForm()}</form>
		</div>
	);
};

export default MultiStepForm;
