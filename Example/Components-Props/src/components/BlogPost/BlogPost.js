// Component : BlogPost
// Cú pháp emmet : rafc

import React from "react";
import "./BlogPost.css"; // Import file CSS

// Hàm này nhận 1 props {post} từ App.js gồm nhiều objects
const BlogPost = ({ post }) => {
	return (
		<div className="blog-post">
			<img src={post.image} alt={post.title} className="post-image" />
			<h2>{post.title}</h2>
			<p className="post-date">{post.date}</p>
			<p>{post.content}</p>
		</div>
	);
};

export default BlogPost;
