// Cú pháp emmet : rfce

// Import thư viện
import React from "react";

// Import Components
import HelloReact from "./components/HelloReact.js";
import Greeting from "./components/Greeting.js";
import PersonList from "./components/PersonList/PersonList.js";
import ProductCard from "./components/ProductCard/ProductCard.js";
import Avatar from "./components/Avatar/Avatar.js";
import BlogPost from "./components/BlogPost/BlogPost.js";
import BookList from "./components/BookList/BookList.js";
import UserProfile from "./components/UserProfile/UserProfile.js";
import ProductList from "./components/ProductList/ProductList.js";
import CommentSection from "./components/CommentSection/CommentSection.js";

// Import Images
import smartphoneX from "./images/smartphoneX.png";
import userAvatar from "./images/user-avt.jpg";
import imageReact17 from "./images/react-17.png";
import imageReact19 from "./images/react-19.png";
import iPhone15Pro128GB from "./images/iphone-15pro.jpg";
import iPhone15Pro from "./images/iphone-15.jpg";
import LaptopPro from "./images/laptop-pro.jpg";

// App.js (Component cha)
function App() {
	// Array
	const peopleList = ["Alice", "Bob", "Charlie", "David"];

	const bookArray = ["Đắc nhân tâm", "Nhà giả kim", "1984", "Đọc vị bất kì ai"];

	// Object
	const productInfo = {
		name: "iPhone X 64GB",
		price: 5190000,
		description:
			"Hình ảnh sắc nét, màu sắc chân thực với màn hình Retina, công nghệ True Tone",
		img: smartphoneX, // Sử dụng biến chứa hình ảnh đã import
	};

	const userObject = {
		name: "Charlie Marie",
		email: "charlie2543@gmai.com",
		avtUrl: userAvatar,
	};

	// Image
	const avatarUrl = imageReact17;

	// More Objects
	const blogPost = {
		title: "Tạo một component BlogPost bằng React JS 1",
		date: "November 22, 2024",
		content: " Tạo một component ReactJS có tên là BlogPost....",
		image: imageReact17,
	};
	const blogPost1 = {
		title: "Tạo một component BlogPost bằng React JS 2",
		date: "November 21, 2024",
		content: " Tạo một component ReactJS có tên là BlogPost1....",
		image: imageReact19,
	};

	// Array [{Objects}]
	const productsArray = [
		{
			name: "iPhone 15 Pro 128GB",
			price: 22990000,
			img: iPhone15Pro128GB,
			description:
				"Giảm 40% tối đa 1.000.000 VNĐ cho đơn hàng từ 2.000.000 VNĐ",
		},
		{
			name: "iPhone 15 Pro",
			price: 24990000,
			img: iPhone15Pro,
			description:
				"Giảm 20% tối đa 1.000.000 VNĐ cho đơn hàng từ 6.000.000 VNĐ",
		},
		{
			name: "Laptop Pro",
			price: 24990000,
			img: LaptopPro,
			description:
				"Giảm 50% tối đa 1.000.000 VNĐ cho đơn hàng từ 7.000.000 VNĐ",
		},
	];

	const commentsArray = [
		{ author: "Alice", text: "Great post!" },
		{ author: "Bob", text: "I learned a lot from this." },
		{ author: "Charlie", text: "Well explained." },
	];

	// Return Component - Render JSX
	return (
		<div>
			<HelloReact />

			<Greeting name="Mark Zuckerberg" />

			<PersonList people={peopleList} />

			<ProductCard product={productInfo} />

			<Avatar imageUrl={avatarUrl} />

			<BlogPost post={blogPost} />
			<BlogPost post={blogPost1} />

			<BookList book={bookArray} />

			<UserProfile user={userObject} />

			<ProductList products={productsArray} />

			<CommentSection comments={commentsArray} />
		</div>
	);
}

export default App;
