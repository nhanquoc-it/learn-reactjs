// File : App.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios.get("https://example.com/api/data");
			setData(response.data);

			// Tạo kết nối WebSocket
			const ws = new WebSocket("'wss://example.com/ws");

			// Lắng nghe sự kiện khi có dữ liệu mới từ máy chủ
			ws.onmessage = (event) => {
				const newData = JSON.parse(event.data);
				setData(newData);
			};

			// Đóng kết nối khi component bị hủy
			return () => {
				ws.close();
			};
		};
		fetchData();
	}, []);

	return (
		<div>
			<h1>Real-time Updates</h1>
			<ul>
				{data.map((item) => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
