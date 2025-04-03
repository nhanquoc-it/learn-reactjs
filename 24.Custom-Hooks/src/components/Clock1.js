// Component : Clock1.js
import React from "react";
// Import Hooks
import useClock from "../hooks/useClock";

function Clock1() {
	// Gọi custom hook để sử dụng
	const [time, ampm] = useClock();

	return (
		<div className="time">
			<span className="hms">{time}</span>
			<span className="ampm">{ampm}</span>
		</div>
	);
}

export default Clock1;
