// Component : EventList.js
import React from "react";
import "./EventList.css";

const EventList = () => {
	const events = [
		{
			id: 1,
			title: "Meeting with Client",
			date: "2022-10-25",
			time: "09:00 AM",
		},
		{
			id: 2,
			title: "Team Standup",
			date: "2022-10-16",
			time: "10:30 AM",
		},
		{
			id: 3,
			title: "Project Demo",
			date: "2022-10-18",
			time: "02:00 PM",
		},
		{
			id: 4,
			title: "Training Session",
			date: "2022-10-20",
			time: "11:00 AM",
		},
	];
	return (
		<div>
			<h2>Event List with Keys</h2>
			<ul className="event-list">
				{events.map((event) => (
					<li key={event.id}>
						<h3>{event.title}</h3>
						<p>Date : {event.date}</p>
						<p>Time : {event.time}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default EventList;
