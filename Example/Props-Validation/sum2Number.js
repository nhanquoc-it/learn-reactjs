// Cộng 2 số với nhau
import React from "react";
import PropTypes, { number } from "prop-types";

class sum2Number extends React.Component {
	render() {
		const { number1, number2 } = this.props;
		return (
			<div>
				<h1>
					{number1} + {number2} = {number1 + number2}
				</h1>
			</div>
		);
	}
}

sum2Number.defaultProps = {
	number1: 4,
	number2: 2,
};
// Kiểm tra dữ liệu sử dụng PropTypes
sum2Number.propTypes = {
	number1: PropTypes.number,
	number2: PropTypes.number,
};
export default sum2Number;
