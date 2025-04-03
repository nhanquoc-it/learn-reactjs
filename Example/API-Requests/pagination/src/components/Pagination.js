// Component : Pagination.js
import React from "react";
import "./Pagination.css"; // Import file CSS

const Pagination = ({ usersPerPage, totalUsers, paginate, currentPage }) => {
	const pageNumbers = [];

	// Tính số trang tổng cộng
	for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav>
			<ul className="pagination">
				{/* Previous Button */}
				<li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
					<a
						onClick={() => currentPage > 1 && paginate(currentPage - 1)}
						href="#"
						className="page-link"
					>
						Previous
					</a>
				</li>

				{/* Page Numbers */}
				{pageNumbers.map((number) => (
					<li
						key={number}
						className={`page-item ${currentPage === number ? "active" : ""}`}
					>
						<a onClick={() => paginate(number)} href="#" className="page-link">
							{number}
						</a>
					</li>
				))}

				{/* Next Button */}
				<li
					className={`page-item ${
						currentPage === pageNumbers.length ? "disabled" : ""
					}`}
				>
					<a
						onClick={() =>
							currentPage < pageNumbers.length && paginate(currentPage + 1)
						}
						href="#"
						className="page-link"
					>
						Next
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Pagination;
