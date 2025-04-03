// Import Hook : useEffect
import { useState, useEffect } from "react";
// Ví dụ lấy dữ liệu từ một API
function CallAPIComponent() {
	// Khởi tạo state
	const [data, setData] = useState(null);

	// Tiến hành Call API - Cập nhật state
	useEffect(() => {
		fetch(`https://my-api.com/data`)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((error) => console.error(error));
	}, []);

	// Render JSX
	return (
		<div>
			{data ? (
				<ul>
					{data.map((item) => (
						<li key={item.id}>{item.name}</li>
					))}
				</ul>
			) : (
				<p>Loading data...</p>
			)}
		</div>
	);
}

// Sử dụng useEffect như : componentDidMount
// dependencies : []

// Gọi React và useState
import React, { useState, useEffect } from "react";
import axios from "axios"; // Sử dụng axios

// Component User - Hiển thị danh sách người dùng
const ShowUser = (props) => {
	// Lấy giá trị của props listUser
	const { listUser } = props;

	// Render ra list user
	// React.Fragment cho phép bọc JSX lại
	// List Keys : chỉ định key, giúp loại bỏ cảnh báo
	return (
		<div>
			{listUser.map((user, index) => {
				return (
					<React.Fragment key={user.id}>
						<ul>
							<li>{user.name}</li>
							<li>{user.email}</li>
						</ul>
						<hr />
					</React.Fragment>
				);
			})}
		</div>
	);
};

// Component App - Component chính
function App(props) {
	// Khai báo state
	const [listUser, setListUser] = useState([]);

	// Sử dụng useEffect hook như "componentDidMount"
	useEffect(() => {
		const getUserAPI = `https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users`;

		// Gọi API bằng axios
		axios
			.get(getUserAPI)
			.then((res) => {
				// Cập nhật lại listUser
				setListUser(res.data);
			})
			.catch((err) => {
				// Trường hợp xảy ra lỗi
				console.log(err);
				alert("Không thể kết nối tới server!");
			});
	}, []);

	// Render JSX
	return (
		<>
			<ShowUser listUser={listUser} />
		</>
	);
}
// export default App;

// Sử dụng useEffect như : componentDidUpdate
// dependencies : null
function App() {
	const [count, setCount] = useState(1);
	// Sử dụng useEffect() như "componentDidUpdate"
	useEffect(() => {
		document.title = `(${count}) lần click`;
	});
	return (
		<>
			<h1>Bạn đã click {count} lần</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Click me
			</button>
		</>
	);
}

// Sử dụng useEffect như : componentWillUnmount
/* Component : Con */
function LifecycleDemo() {
	useEffect(() => {
		// Được gọi khi component render
		console.log("render!");
		// useEffect trả về một hàm
		// Đóng vai trò như là "componentWWillUnmount"
		return () => console.log("unmounting....");
	});
	return <div>Hello, world!</div>;
}
/* Component : Cha */
function App() {
	const [mounted, setMounted] = useState(true);
	const toggle = () => setMounted(!mounted);
	return (
		<>
			{mounted && <LifecycleDemo />}
			<hr />
			<button onClick={toggle}>Show/Hide LifecycleDemo</button>
		</>
	);
}
