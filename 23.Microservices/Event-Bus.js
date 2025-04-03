// Tạo 1 endpoint để nhận các yêu cầu đăng ký tự kiện từ các microservice khác
app.post("/events", async (req, res) => {
	const { type, data } = req.body;

	// Kiểm tra nội dung của comment của sự kiện "CommentCreated"
	if (type === "CommentCreated") {
		// Xác định trạng thái của comment
		const status = data.content.includes("orange") ? "rejected" : "approved";

		// Gửi một sự kiện mới "CommentModerated"
		// Thông báo trạng thái đã được xác định của comment
		await axios.post("http://event-bus-srv:4005/events", {
			type: "CommentModerated",
			data: {
				id: data.id,
				postId: data.postId,
				content: data.content,
				status,
			},
		});
	}

	res.send({});
});
