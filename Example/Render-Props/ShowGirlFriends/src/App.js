import ShowGirlFriends from "./components/ShowGirlFriends";

function App(props) {
	// Object chứa thông tin của người iu
	const myGirlFriends = [
		{
			id: 1,
			name: "Khanh Huyen",
			email: "khanhhuyen123@gmail.com",
		},
		{
			id: 2,
			name: "Nguyen Hang",
			email: "nguyenhang2903@gmail.com",
		},
		{
			id: 3,
			name: "Pham Uyen",
			email: "phamuyenz@gmail.com",
		},
	];

	return (
		<ShowGirlFriends listGirlFriends={myGirlFriends}>
			{(data) => {
				// Nhận data từ component "ShowGirlFriends" khi nó trả về
				// bằng đoạn props.children(person)
				console.log(data);
			}}
		</ShowGirlFriends>
	);
}
