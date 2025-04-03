import React from "react";

// Xây dựng một component nhận về 1 object chưa danh sách người yêu và hiển thị
const ShowGirlFriends = (props) => {
	return (
		<ul>
			{props.listGirlFriends.map((person, index) => {
				props.children(person);
				return <li key={person.id}>{person.name}</li>;
			})}
		</ul>
	);
};

export default ShowGirlFriends;
/*
    - Component này có nhiệm vụ lấy giá trị của props "listGirlFriends".
    - Sau đó, sẽ dùng map() để render lần lượt từng người.
    - Trả về cho props "children" giá trị của người hiện tại.
*/
