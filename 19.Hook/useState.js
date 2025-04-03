// Import React và Hook : useState
import React, { useState } from "react";
// Component : Counter.js
function Counter() {
	// Khởi tạo state
	const [count, setCount] = useState(0);
	// Hàm cập nhật state
	function increment() {
		setCount(count + 1);
	}
	// Render JSX
	return (
		<div>
			<p>You clicked {count} times </p>
			<button onClick={increment}>Click me</button>
		</div>
	);
}

// Khởi tạo state ==========================================================================
/* Class Component -  Giá trị luôn là 1 object */
this.state = {
	name: "Nguyễn Văn A",
};

/* Function Component */
const [name, setName] = useState("Nguyễn Văn A"); // string
const [isLoading, setIsLoading] = useState(false); // boolean

// Ẩn - Hiện 1 component ===================================================================
/* Component MoreContent.js */
const MoreContent = () => {
	return (
		<p>
			1500s, when an unknown printer took a galley of type and scrambled it to
			make a type specimen book. It has survived not only five centuries, but
			also the leap into electronic typesetting, remaining essentially
			unchanged. It was popularised in the 1960s with the release of Letraset
			sheets containing Lorem Ipsum passages, and more recently with desktop
			publishing software like Aldus PageMaker including versions of Lorem
			Ipsum.
		</p>
	);
};

/* Component : App.js */
function App() {
	// isShow : là một state
	// setShow : là function giúp cập nhật state
	// Giá trị mặc định ban đầu của state : false
	const [isShow, setShow] = useState(false);

	return (
		<div>
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the
			</p>

			{isShow === true ? <MoreContent /> : ""}
			{isShow === false ? (
				<a
					href="/#"
					onClick={() => {
						// Khi click vào button
						// Cập nhật state > gọi hàm setShow()
						setShow(true);
					}}
				>
					Read more
				</a>
			) : (
				""
			)}
		</div>
	);
}

// Lấy dữ liệu từ API và hiển thị ===========================================================
// Cài thư viện Axios : npm i axios

// Gọi React và useState
import React, { useState } from "react";
import axios from "axios"; // Sử dụng axios

// Component : ShowUser.js - Hiển thị danh sách người dùng
const ShowUser = (props) => {
	// Lấy giá trị của props listUser
	const { listUser } = props;

	// Render ra list user
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

// Component : App.js - Gọi API và hiển thị giao diện
function App() {
	// Khai báo state
	const [listUser, setListUser] = useState([]);
	const [isLoading, setLoading] = useState(false);

	// API chứa dữ liệu người dùng
	const getUserAPI = `https://5df8a4c6e9f79e0014b6a587.mockapi.io/freetuts/users`;

	// Hàm fetch API để lấy dữ liệu người dùng
	const getUser = () => {
		// Cập nhật lại giá trị của state "isLoading"
		setLoading(true);
	};

	// Thực hiện gọi API
	axios
		.get(getUserAPI)
		.then((res) => {
			// Cập nhật giá trị của state "listUser"
			setListUser(res.data);
		})
		.catch((err) => {
			// Trường hợp xảy ra lỗi
			alert("Không thể kết nối tới server");
		})
		.finally(() => {
			// Câu lệnh trong này được khởi chạy mỗi khi call API xong
			// bất kể thất bại hay không
			setLoading(false); // Cập nhật giá trị của state "isLoading"
		});

	// Render dữ liệu từ API và hiển thị giao diện
	return (
		<>
			{isLoading ? "Loading...." : <button onClick={getUser}>Get User</button>}
			<ShowUser listUser={listUser} />
		</>
	);
}
