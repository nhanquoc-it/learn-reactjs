import React from "react";
import styles from "./Button.module.css"; // Import CSS Module

const Button = () => {
	return (
		<div>
			<button className={styles.btn}>Click me 1!</button>
			<button className={[styles.btn, styles.active].join(" ")}>
				Click me 2!
			</button>
		</div>
	);
};

export default Button;
