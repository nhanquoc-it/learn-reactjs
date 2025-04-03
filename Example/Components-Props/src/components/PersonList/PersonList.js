// Component : PersonList
// Cú pháp emmet : rafc

import React from "react";
import "./PersonList.css"; // Import file CSS

// Hàm này nhận vào props {people} từ App.js là 1 mảng
const PersonList = ({ people }) => {
	return (
		<ul className="people-list">
			{people.map((person, index) => {
				<li key={index} className="person-item">
					{person}
				</li>;
			})}
		</ul>
	);
};

export default PersonList;
