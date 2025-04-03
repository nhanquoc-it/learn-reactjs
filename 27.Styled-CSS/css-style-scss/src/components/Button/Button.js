import React from "react";
import clsx from "clsx"; // Import thư viện clsx
import styles from "./Button.module.scss"; // Import SCSS Module

// Nhận props từ component "App.js"
const Button = ({ primary, disabled }) => {
	// Khai báo style
	const classes = clsx(styles.btn, {
		[styles.primary]: primary,
		[styles.disabled]: disabled,
	});

	// Sử dụng style
	return <button className={classes}>Click me!</button>;
};

export default Button;

// scss
