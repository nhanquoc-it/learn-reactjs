// Component : BookList
// Cú pháp emmet : rafc

import React from "react";
import "./BookList.css";

// Hàm này nhận vào props {book} từ App.js là 1 mảng
const BookList = ({ book }) => {
	return (
		<ul className="book-list">
			{book.map((book, index) => {
				<li key={index}>{book}</li>;
			})}
		</ul>
	);
};

export default BookList;
