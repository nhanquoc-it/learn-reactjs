import React from "react";
import clsx from "clsx"; // Import thư viện clsx
import styles from "./Button.module.css"; // Import CSS Module

// Nhận props từ component "App.js"
const Button = ({ primary }) => {
	// Khai báo style
	const classes = clsx(styles.btn, {
		[styles.primary]: primary,
	});

	// Sử dụng style
	return <button className={classes}>Click me!</button>;
};

export default Button;

// classnames
// clsx
