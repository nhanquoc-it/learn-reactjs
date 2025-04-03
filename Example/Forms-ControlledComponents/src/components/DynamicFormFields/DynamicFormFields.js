// Component : DynamicFormFields.js
import React, { useState } from "react";
import "./DynamicFormFields.css";

const DynamicFormFields = () => {
	// Khởi tạo state
	const [fields, setFields] = useState([
		{
			id: 1,
			value: "",
		},
	]);

	// Cập nhật giá trị của field
	const handleChange = (id, value) => {
		const updatedFields = fields.map((field) =>
			field.id === id ? { ...field, value } : field
		);
		setFields(updatedFields);
	};

	// Thêm mới một field
	const handleAddField = () => {
		const newField = { id: fields.length + 1, value: "" };
		setFields([...fields, newField]);
	};

	// Loại bỏ một field
	const handleRemoveField = (id) => {
		const deletedFields = fields.filter((field) => field.id !== id);
		setFields(deletedFields);
	};

	// Render JSX
	return (
		<div className="dynamic-form-field-container">
			{/* Hiển thị và xóa field */}
			<form>
				{fields.map((field) => (
					<div key={field.id} className="form-field">
						<input
							type="text"
							placeholder="Nhập giá trị"
							value={field.value}
							onChange={(e) => handleChange(field.id, e.target.value)}
						/>
						<button
							type="button"
							onClick={() => handleRemoveField(field.id)}
							disabled={field.length === 1}
						>
							Xóa
						</button>
					</div>
				))}
			</form>
			{/* Thêm field */}
			<button type="button" onClick={handleAddField}>
				Thêm trường
			</button>
		</div>
	);
};

export default DynamicFormFields;
