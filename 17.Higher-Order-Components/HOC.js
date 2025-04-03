// Xây dựng 1 component có chức năng hiển thị ra một ảnh.
// Mỗi khi di con trỏ chuột vào ảnh => bị mờ đi.

/* Cách thông thường */
import React from "react";

const Image = (props) => {
	return <img src="./image/react-19.png" alt="Image" />;
};

class HoverComponent extends React.Component {
	// Logic xử lý
	constructor(props) {
		super(props);
		this.state = {
			opacity: 1,
		};

		// Bind this
		this.onMouseEnter = this.onMouseEnter.bind(this);
		this.onMouseLeave = this.onMouseLeave.bind(this);
	}
	// Được gọi khi chuột được di vào
	onMouseEnter() {
		this.setState({
			opacity: 0.5,
		});
	}
	// Được gọi khi chuột được rời đi
	onMouseLeave() {
		this.setState({
			opacity: 1,
		});
	}

	// Render JSX
	render() {
		return (
			<div
				style={{ opacity: this.state.opacity }}
				onMouseEnter={this.onMouseEnter}
				onMouseLeave={this.onMouseLeave}
			>
				<Image />
			</div>
		);
	}
}

//export default HoverComponent;

/* *Nhược điểm : 
    - Khi muốn hiển thị nhiều ảnh thì phải xây dựng rất nhiều "HoverComponent".
    - Điều này là không cần thiết.
    - Cách giải quyết là sử dụng "Higher Order Component".
*/

/* Sử dụng HOC cho ví dụ trên */
//Đây được gọi là một HOC, nó nhận vào 1 component => và trả ra một component
import React from "react";

const withHoverOpacity = (ImageComponent) => {
	return class extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				opacity: 1,
			};
			//bind this
			this.onMouseLeave = this.onMouseLeave.bind(this);
			this.onMouseEnter = this.onMouseEnter.bind(this);
		}
		//Được gọi khi chuột được di vào
		onMouseEnter() {
			this.setState({
				opacity: 0.5,
			});
		}
		//Được gọi khi chuột được rời đi
		onMouseLeave() {
			this.setState({
				opacity: 1,
			});
		}
		render() {
			return (
				<div
					style={{ opacity: this.state.opacity }}
					onMouseEnter={this.onMouseEnter}
					onMouseLeave={this.onMouseLeave}
				>
					<ImageComponent />
				</div>
			);
		}
	};
};

// export default withHoverOpacity;

/* Các component là các ảnh cần Hover */
const Image1 = (props) => {
	return <img src="./image/react-19.png" alt="Image" />;
};

const Image2 = (props) => {
	return <img src="./image/react-17.png" alt="Image" />;
};

// Gọi HOC để sử dụng
const ImageWithHoverOpacity1 = withHoverOpacity(Image1);
const ImageWithHoverOpacity2 = withHoverOpacity(Image2);

// Render để hiển thị component
export default function () {
	return (
		<>
			<ImageWithHoverOpacity1 />
			<ImageWithHoverOpacity2 />
		</>
	);
}
