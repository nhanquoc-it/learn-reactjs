import React from "react";
import styles from "./Paragraph.module.css"; // Import CSS Module

console.log(styles); // Log object

const Paragraph = () => {
	return <p className={styles.paragraph}>This is a Paragraph</p>;
};

export default Paragraph;
