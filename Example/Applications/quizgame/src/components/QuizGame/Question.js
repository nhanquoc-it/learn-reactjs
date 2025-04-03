import React, { useState } from "react";

// Hàm này sẽ nhận các props từ component "QuizGame" truyền xuống
function Question({ question, options, currentAnswer, onAnswer }) {
	// Khởi tạo state
	const [selectedOption, setSelectedOption] = useState(null);
	// Hàm xử lý chọn đáp án
	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};
	// Hàm xử lý khi nhấn "Submit"
	const handleSubmit = () => {
		const isCorrect = selectedOption === currentAnswer;
		onAnswer(isCorrect);
		setSelectedOption(null);
	};
	// Render JSX
	return (
		<div className="question">
			<h3>{question}</h3>
			<ul>
				{options.map((option, index) => (
					<li
						key={index}
						className={selectedOption === option ? "selected" : ""}
						onClick={() => handleOptionSelect(option)}
					>
						{option}
					</li>
				))}
			</ul>
			<button onClick={handleSubmit} disabled={!selectedOption}>
				Submit
			</button>
		</div>
	);
}

export default Question;
