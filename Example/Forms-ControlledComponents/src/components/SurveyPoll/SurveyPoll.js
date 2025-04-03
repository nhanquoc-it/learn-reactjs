// Component : SurveyPoll.js
import React, { useState } from "react";
import "./SurveyPoll.css";

const SurveyPoll = () => {
	const [options, setOptions] = useState([
		{ id: 1, text: "Option 1", votes: 0 },
		{ id: 2, text: "Option 2", votes: 0 },
		{ id: 3, text: "Option 3", votes: 0 },
	]);

	const handleVote = (id) => {
		const updatedOptions = options.map((option) =>
			option.id === id ? { ...option, votes: option.votes + 1 } : option
		);
		setOptions(updatedOptions);
		console.log("Kết quả bình chọn:", updatedOptions);
		// Thêm xử lý kết quả ở đây (gửi đến API, lưu vào state)
	};
	return (
		<div className="survey-poll">
			<h2>Survey Poll</h2>
			<ul>
				{options.map((option) => (
					<li key={option.id} onClick={() => handleVote(option.id)}>
						{option.text}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SurveyPoll;
