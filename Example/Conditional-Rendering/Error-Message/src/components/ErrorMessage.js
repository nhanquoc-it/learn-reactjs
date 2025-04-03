// Component : ErrorMessage.js
import React from "react";
import "/ErrorMessage.css";

const ErrorMessage = ({ hasError }) => {
	return <div>{hasError ? <div className="error-message">An error occurred!</div> : null}</div>;
};

export default ErrorMessage;
