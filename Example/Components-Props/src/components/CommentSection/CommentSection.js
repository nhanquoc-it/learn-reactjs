// Component : CommentSection
// Cú pháp emmet : rafc
import React from "react";
import "./CommentSection.css"; // Import file CSS

// Hàm này nhận 1 props {comments} từ App.js là 1 Array[{Objects}]
const CommentSection = ({ comments }) => {
	return (
		<div className="comment-section">
			{comments.map((comment, index) => (
				<div key={index} className="comment">
					<span className="comment-author">{comment.author}</span>
					<span>{comment.text}</span>
				</div>
			))}
		</div>
	);
};

export default CommentSection;
