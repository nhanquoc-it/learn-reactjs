import React from "react";

const ComponentCha = () => {
	// Truyền vào component 1 props "data" => là 1 function
	return <ComponentCon render={(data) => <p>Welcome to {data.value}</p>} />;
};



const ComponentCon = (props) => {
	return (
		// Gọi props render() và trả về giá trị cần render
		<div>
			{props.render({
				value: "Viet Nam",
			})}
		</div>
	);
};

export default ComponentCha;