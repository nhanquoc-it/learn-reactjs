// Component : SubscriptionPlan.js
import React from "react";
import "./SubscriptionPlan.css";

const SubscriptionPlan = ({ planType }) => {
	return (
		<div className="subscription-plan">
			<h2>Subscription Plan</h2>
			{planType === "basic" && (
				<div>
					<h3>Basic Plan</h3>
					<p>$10/month</p>
					<p>Access to basic features</p>
				</div>
			)}
			{planType === "premium" && (
				<div>
					<h3>Premium Plan</h3>
					<p>$20/month</p>
					<p>Access to premium features</p>
				</div>
			)}
			{planType === "ultimate" && (
				<div>
					<h3>Ultimate Plan</h3>
					<p>$30/month</p>
					<p>Access to all features</p>
				</div>
			)}
		</div>
	);
};

export default SubscriptionPlan;
