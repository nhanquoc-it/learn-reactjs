// Component : ExampleComponent.js
import React, { useState, useEffect } from "react";
import api from "./api";

const ExampleComponent = () => {
	// Khởi tạo state
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Call API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/endpoint");
				setData(response.data);
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	// Render JSX
	return (
		<div>
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<div>
					{data && (
						<div>
							{/* Hiển thị dữ liệu từ API */}
							<h2>Data from API</h2>
							<p>{data}</p>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default ExampleComponent;
