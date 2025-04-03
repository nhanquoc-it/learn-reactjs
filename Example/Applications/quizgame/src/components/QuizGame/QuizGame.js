import React, { useState } from "react";
import Question from "./Question.js";
import "./QuizGame.css";

function QuizGame() {
	// Khởi tạo state
	const [score, setScore] = useState(0);
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

	// Khởi tạo đối tượng
	const questions = [
		{
			question: "Đâu là thủ đô của Pháp",
			options: ["London", "Berlin", "Madrid", "Paris"],
			currentAnswer: "Paris",
		},
		{
			question: "Động vật có vú lớn nhất là gì?",
			options: ["Voi", "Cá Voi Xanh", "Hươu Cao Cổ", "Hổ"],
			currentAnswer: "Cá Voi Xanh",
		},
		{
			question: "Đồng tiền của Nhật Bản là gì?",
			options: ["Won", "Yuan", "Ringgit", "Yen"],
			currentAnswer: "Yen",
		},
		{
			question: "Hành tinh nào được gọi là Hành tinh Đỏ?",
			options: ["Sao Kim", "Sao Hỏa", "Sao Mộc", "Sao Thổ"],
			currentAnswer: "Sao Hỏa",
		},
		{
			question: "Đại dương lớn nhất trên Trái Đất là gì?",
			options: [
				"Đại Tây Dương",
				"Bắc Băng Dương",
				"Ấn Độ Dương",
				"Thái Bình Dương",
			],
			currentAnswer: "Thái Bình Dương",
		},
	];

	// Hàm xử lý khi người dùng chọn đáp án đúng
	const handleAnswer = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		setCurrentQuestionIndex(currentQuestionIndex + 1);
	};

	const currentQuestion = questions[currentQuestionIndex];

	// Render JSX
	return (
		<div className="quiz-game">
			{currentQuestion ? (
				<Question
					question={currentQuestion.question}
					options={currentQuestion.options}
					currentAnswer={currentQuestion.currentAnswer}
					onAnswer={handleAnswer}
				/>
			) : (
				<p>Game Over! Điểm của bạn là: {score}</p>
			)}
		</div>
	);
}

export default QuizGame;
