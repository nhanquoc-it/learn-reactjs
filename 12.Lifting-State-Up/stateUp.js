import React from "react";

// Component Cha
function ComponentCha(props) {
	// Hàm này sẽ được gọi khi nhận được dữ liệu
	const receiveData = function (data) {
		console.log("Data nhân được", data);
	};

	// Gọi component con và truyền vào một props có giá trị là 1 function
	return <ComponentCon onReceiveData={receiveData} />;
}

// Component Con
function ComponentCon(props) {
	return (
		<div>
			<button
				onClick={() => {
					// Chúng ta sẽ gọi props có tên là
					// receiveData đã được truyền từ componentCha
					// Và truyền vào đó giá trị cần gửi
					props.onReceiveData("Data gửi đi");
				}}
			>
				Gửi lại cho componentCha
			</button>
		</div>
	);
}
