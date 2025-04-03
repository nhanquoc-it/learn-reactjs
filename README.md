# Hướng dẫn cách tải repository và học ReactJS một cách hiệu quả :

# 1- Clone Github Repository về dưới máy tính của bạn, bằng cách :

> git clone https://github.com/nhanquoc-it/learn-reactjs.git

# 2- Bắt đầu làm quen với ReactJS :

> cd learn-reactjs

- Và tiến hành học lần lượt qua các folder có đánh số thứ tự mà tôi đã thiết lập sẵn.
- Nếu trong folder nào có chứa file `README.md` thì ưu tiên mở ra đọc để hiểu nội dung bên trong.

# 3- Thực hành test các component (nếu có):

> Thực hành trong folder dự án `my-app`.
> Nếu bên trong folder `my-app` chưa có thư mục `node_modules` thì sử dụng lệnh `npm install` trong `Terminal` để cài đặt.
> Lưu ý: bên trong thư mục `/src` có chứa các file như sau :

- Folder `components` : Bên trong này nếu bạn muốn test các components mà tôi đã tạo sẵn ở trong các bài học thì `copy` các file rồi tiến hành `paste` file đó vào bên trong thư mục này để test.
- Folder `images` : Chứa các hình ảnh (nếu có).
- File `App.js` : Đây là component chính thực hiện `Import Component` và `Use Component`.

```js
// Import Components
import Welcome from "./components/Welcome";

// Component `App.js`
function App() {
	// ...
	return (
		<div className="App">
			<header className="App-header">
				<h2>Test Component</h2>
				{/* Use Component */}
				<Welcome />
			</header>
		</div>
	);
}

export default App;
```

> Để chạy được dự án `my-app`, sử dụng lệnh : `npm start`

- Ngoài ra, bạn còn có thể sử dụng cách khác để chạy test các component có trong bài học mà không cần đến các câu lệnh.
  > Chú ý, bên trong folder dự án `my-app` > Mở folder `/src` > Tìm đến file `test.html` và đọc nội dung bên trong file này mà tôi đã hướng dẫn.
  > Để chạy được thì click chuột phải và chọn `Open with Live Server` chạy như 1 file `.html` thông thường.

******************* Chúc bạn học ReactJS hiệu quả & vui vẻ *******************
## Date Update : 04/03/2025
## Author : Nhân Quốc Dev