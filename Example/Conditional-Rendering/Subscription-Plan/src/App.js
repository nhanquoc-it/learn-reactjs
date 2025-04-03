// File : App.js
import React, { useState } from "react";
import SubscriptionPlan from "./components/SubscriptionPlan";

function App() {
	//Khởi tạo state
	const [planType, setPlanType] = useState("basic");

	// Cập nhật plan theo type
	const handlePlanChange = (type) => {
		setPlanType(type);
	};
	// Render JSX
	return (
		<div>
			<div>
				<button onClick={() => handlePlanChange("basic")}>Basic Plan</button>
				<button onClick={() => handlePlanChange("premium")}>
					Premium Plan
				</button>
				<button onClick={() => handlePlanChange("ultimate")}>
					Ultimate Plan
				</button>
			</div>
			<SubscriptionPlan planType={planType} />
		</div>
	);
}

export default App;
