// Component : ContactList.js
import React from "react";
import "./ContactList.css";

const ContactList = () => {
	const contacts = [
		{
			id: 1,
			name: "John Doe",
			phone: "123-456-789",
			email: "john@example.com",
		},
		{
			id: 2,
			name: "Jane Smith",
			phone: "234-567-8901",
			email: "jane@example.com",
		},
		{
			id: 3,
			name: "Alice Johnson",
			phone: "345-678-9012",
			email: "alice@example.com",
		},
		{
			id: 4,
			name: "Bob Brown",
			phone: "456-789-0123",
			email: "bob@example.com",
		},
	];
	return (
		<div>
			<h2>Contact List with Keys</h2>
			<ul className="contact-list">
				{contacts.map((contact) => (
					<li key={contact.id}>
						<h3>{contact.name}</h3>
						<p>Phone: {contact.phone}</p>
						<p>Email: {contact.email}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ContactList;
