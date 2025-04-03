// Component : ConditionalNavigation.js
import React from "react";
import "./ConditionalNavigation.css";

const ConditionalNavigation = ({ isAdmin }) => {
	return (
		<div className="conditional-navigation">
			<ul>
				{isAdmin ? (
					<>
						<li>
							<a href="/admin">Admin Panel</a>
						</li>
						<li>
							<a href="/">Home</a>
						</li>
					</>
				) : (
					<li>
						<a href="/">Home</a>
					</li>
				)}
			</ul>
		</div>
	);
};

export default ConditionalNavigation;
