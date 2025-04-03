// Component : OnlineOfflineStatus.js
import React from "react";
import "./OnlineOfflineStatus.css";

const OnlineOfflineStatus = ({ isOnline }) => {
	return (
		<div className="online-offline-status">
			<h2>User Status</h2>
			{isOnline ? (
				<p className="online">User is Online</p>
			) : (
				<p className="offline">User is Offline</p>
			)}
		</div>
	);
};

export default OnlineOfflineStatus;
