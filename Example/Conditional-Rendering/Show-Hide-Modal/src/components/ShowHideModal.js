// Component : ShowHideModal.js
import React, { useState } from "react";
import "./ShowHideModal.css";

const ShowHideModal = () => {
	// Khởi tạo state
	const [showModal, setShowModal] = useState(false);

	// Chuyển đổi trạng thái ẩn hiện "modal"
	const toggleModal = () => {
		setShowModal(!showModal);
	};
	// Render JSX
	return (
		<div className="show-hide-modal">
			<button onClick={toggleModal}>Open Modal</button>
			{showModal && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={toggleModal}>
							&times;
						</span>
						<p className="text">This is modal content.</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default ShowHideModal;
