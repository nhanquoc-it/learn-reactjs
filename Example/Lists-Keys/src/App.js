// File : App.js
import React from "react";
// Import Components
import SimpleList from "./components/SimpleList/SimpleList";
import TodoList from "./components/TodoList/TodoList";
import ProductList from "./components/ProductList/ProductList";
import UserList from "./components/UserList/UserList";
import BlogPostList from "./components/BlogPostList/BlogPostList";
import CommentList from "./components/CommentList/CommentList";
import ImageGalleryList from "./components/ImageGalleryList/ImageGalleryList";
import RecipeList from "./components/RecipeList/RecipeList";
import ContactList from "./components/ContactList/ContactList";
import EventList from "./components/EventList/EventList";
import MovieList from "./components/MovieList/MovieList";

function App() {
	return (
		<div>
			{/* Sử dụng Components */}
			<SimpleList />
			<TodoList />
			<ProductList />
			<UserList />
			<BlogPostList />
			<CommentList />
			<ImageGalleryList />
			<RecipeList />
			<ContactList />
			<EventList />
			<MovieList />
		</div>
	);
}

export default App;
