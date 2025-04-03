// Component : AddressForm.js
import React, { useState } from "react";
import "./AddressForm.css";

const AddressForm = () => {
	const [formData, setFormData] = useState({
		address: "",
		city: "",
		district: "",
		postalCode: "",
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
		console.log("Địa chỉ đã nhập:", formData);
		// Thêm logic xử lý tại đây ( gửi đến API, lưu vào state)
	};

	return (
		<div className="address-form">
			<form onSubmit={handleSubmit}>
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
					Quận / Huyện:
					<input
						type="text"
						name="district"
						value={formData.district}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Mã Bưu Điện:
					<input
						type="text"
						name="postalCode"
						value={formData.postalCode}
						onChange={handleChange}
						required
					/>
				</label>
				<br />

				<button type="submit">Xác Nhận</button>
			</form>
		</div>
	);
};

export default AddressForm;
