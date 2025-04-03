// Component : QuizForm.js
import React, { useState } from "react";
import "./QuizForm.css";

const QuizForm = () => {
	const [answers, setAnswers] = useState({
		question1: "",
		question2: "",
		question3: "",
	});

	const handleAnswerChange = (e) => {
		const { name, value } = e.target;
		setAnswers({
			...answers,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Kết quả của bài kiểm tra:", answers);
		// Thêm logic tại đây (gửi đến API, tính điểm)
	};
	return (
		<div className="quiz-form">
			<h2>Quiz Form</h2>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="question1">Câu hỏi 1:</label>
					<input
						type="text"
						id="question1"
						name="question1"
						value={answers.question1}
						onChange={handleAnswerChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="question2">Câu hỏi 2:</label>
					<input
						type="text"
						id="question2"
						name="question2"
						value={answers.question2}
						onChange={handleAnswerChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="question3">Câu hỏi 3:</label>
					<input
						type="text"
						id="question3"
						name="question3"
						value={answers.question3}
						onChange={handleAnswerChange}
						required
					/>
				</div>

				<button type="submit">Nộp bài kiểm tra</button>
			</form>
		</div>
	);
};

export default QuizForm;
