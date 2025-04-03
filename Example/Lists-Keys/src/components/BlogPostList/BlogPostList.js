// Component : BlogPost.js
import React from "react";
import "./BlogPostList.css";

const BlogPostList = () => {
	const blogPosts = [
		{
			id: 1,
			title: "First Blog Post",
			content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
		},
		{
			id: 2,
			title: "Second Blog Post",
			content:
				"Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		},
		{
			id: 3,
			title: "Third Blog Post",
			content:
				"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			id: 4,
			title: "Fourth Blog Post",
			content:
				"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
		},
	];
	return (
		<div>
			<h2>Blog Post List with Keys</h2>
			{blogPosts.map((blogPost) => (
				<div key={blogPost.id} className="blog-post">
					<h3>{blogPost.title}</h3>
					<p>{blogPost.content}</p>
				</div>
			))}
		</div>
	);
};

export default BlogPostList;
