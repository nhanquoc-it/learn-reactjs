// Component : Avatar
// Cú pháp emmet : rafc

import React from "react";
import "./Avatar.css";

// Hàm này nhận 1 props {imageUrl} từ App.js là 1 hình ảnh
const Avatar = ({ imageUrl }) => {
	return (
		<div className="avatar">
			<img src={imageUrl} alt="Avatar" />
		</div>
	);
};

export default Avatar;
