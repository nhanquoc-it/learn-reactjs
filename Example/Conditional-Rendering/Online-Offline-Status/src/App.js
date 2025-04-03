// File : App.js
import React, { useState, useEffect } from "react";
import OnlineOfflineStatus from "./components/OnlineOfflineStatus";

function App() {
	// Khởi tạo state
	const [isOnline, setIsOnline] = useState(true);

	// Hàm xử lý trạng thái "online" hoặc "offline"
	useEffect(() => {
		const handleOnline = () => {
			setIsOnline(true);
		};

		const handleOffline = () => {
			setIsOnline(false);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("online", handleOnline);
			window.removeEventListener("offline", handleOffline);
		};
	}, []);

	// Render JSX
	return (
		<div>
			<h1>Online / Offline Status</h1>
			<OnlineOfflineStatus isOnline={isOnline} />
		</div>
	);
}

export default App;
