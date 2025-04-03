// Component : CommentList.js
import React from "react";
import "./CommentList.css";

const CommentList = () => {
	const comments = [
		{ id: 1, author: "John", content: "Great post!" },
		{ id: 2, author: "Alice", content: "Thanks for sharing." },
		{ id: 3, author: "Bob", content: "Awesome content." },
		{ id: 4, author: "Emily", content: "Keep up the good work." },
	];
	return (
		<div>
			<h2>Comment List with Keys</h2>
			{comments.map((comment) => (
				<div key={comment.id} className="comment">
					<p>
						<strong>{comment.author}:</strong> {comment.content}
					</p>
				</div>
			))}
		</div>
	);
};

export default CommentList;
