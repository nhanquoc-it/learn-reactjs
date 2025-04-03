// Component : ScrollEvent.js
import React, { useEffect } from "react";
import "./ScrollEvent.css";

const ScrollEvent = () => {
	// Xử lý sự kiện khi người dùng cuộn chuột
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			console.log(">>> Scroll position:", scrollTop);
		};

		// Mount
		window.addEventListener("scroll", handleScroll);

		// Unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Render JSX
	return (
		<div className="scroll-event">
			<h2>Scroll Event trong ReactJS</h2>
			<div className="content">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna
					euismod, ultricies sapien in, hendrerit ligula. Fusce efficitur justo
					nec orci gravida, id consequat neque eleifend. Nunc sodales ultrices
					metus, ut efficitur mauris blandit eu. Sed nec tellus eget tortor
					facilisis tristique. Sed venenatis justo at turpis varius, vitae
					scelerisque neque dapibus. Integer vel dolor a orci efficitur
					ultricies at ac purus. Duis id velit at purus tempor volutpat non
					vitae nibh. Quisque aliquet accumsan risus, a dignissim felis
					malesuada eu.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac magna
					euismod, ultricies sapien in, hendrerit ligula. Fusce efficitur justo
					nec orci gravida, id consequat neque eleifend. Nunc sodales ultrices
					metus, ut efficitur mauris blandit eu. Sed nec tellus eget tortor
					facilisis tristique. Sed venenatis justo at turpis varius, vitae
					scelerisque neque dapibus. Integer vel dolor a orci efficitur
					ultricies at ac purus. Duis id velit at purus tempor volutpat non
					vitae nibh. Quisque aliquet accumsan risus, a dignissim felis
					malesuada eu.
				</p>
			</div>
		</div>
	);
};

export default ScrollEvent;
