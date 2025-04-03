# Tạo 1 component Counter có chứa state là "count" - Bộ đếm

- Bước 1 : Tạo Component "Counter".
  -- Tại folder "src" > Tạo folder "components" > Tạo component "Counter.js"
  -- Import thư viện React và hook useState.
  -- Sử dụng Hook useState để quản lý trạng thái "count".

  > count :là một biến trạng thái
  > setCount :là hàm cho phép cập nhật trạng thái
  > useState(0) : khởi tạo giá trị là 0

  -- Hàm tăng / giảm giá trị của "count".
  -- Cấu trúc JSX để hiển thị component "Counter.js".

- Bước 2 : Tạo file CSS "Counter.css" > Tùy chỉnh giao diện.

- Bước 3 : Sử dụng Component trong "App.js".

- Bước 4 : Chạy ứng dụng > npm start

# Tạo 1 component Clock có chứa state là "currentTime" - Hiển thị thời gian hiện tại.

- Mở file "src/components/" > Tạo Component "Clock.js".
- Sử dụng Hook "useState" để tạo trạng thái " > Khởi tạo là thời gian hiện tại.
- Sử dụng Hook "useEffect" sẽ được gọi mỗi khi component được render hoặc khi state thay đổi.

  > Sử dụng "setInterval()" để cập nhật "currentTime" mỗi giây.
  > Hủy bỏ "interval" khi component bị unmount (tránh memory leak).
  > [] : đảm bảo useEffect chỉ chạy sau lần render đầu tiên.

- Cấu trúc JSX để hiển thị component "Clock.js".
  > Sử dụng "toLocaleTimeString()" : để định dạng thời gian theo địa phương người dùng.

# Tạo 1 component Toggle có chứa state là "isOn" - Theo dõi trạng thái bật/tắt.

- Mở file "src/components/" > Tạo Component "Toggle.js".
- Sử dụng Hook "useState" để tạo trạng thái "isOn" > Khởi tạo là "false".
- Hàm xử lý sự kiện khi nhấn nút "Toggle".
- Cấu trúc JSX để hiển thị component "Toggle.js".
  > Sử dụng "Toán tử 3 ngôi" để kiểm tra điều kiện "On/Off".
- Tải và lưu hình ảnh trong folder "public".

# Tạo 1 component TodoList với state là 1 mảng "todos" - Theo dõi danh sách công việc.

- Mở file "src/components" > Tạo Component "TodoList.js".
- Sử dụng Hook "useState" để tạo trạng thái.

  > Trạng thái "todos" > Khởi tạo là một mảng rỗng.
  > Trạng thái "input" > Khởi tạo là một chuỗi rỗng.

- Hàm xử lý sự kiện khi nhấn "Enter" để thêm công việc mới.

  > Kiểm tra "input" có giá trị không rỗng.
  > Thêm công việc mới vào mảng "todos".
  > Xóa giá trị trong "input".

- Hàm xử lý sự kiện khi đánh dấu công việc là "đã hoàn thành" || "chưa hoàn thành".

  > Sử dụng "Spread Operator" > Tạo một bản sao của mảng "todos".
  > Đảo ngược trạng thái hoàn thành của công việc.
  > Cập nhật lại state "todos" với mảng mới.

- Cấu trúc JSX để hiển thị component "TodoList.js".
  > Sử dụng map() để lặp qua từng phần tử "todos".
  > Sử dụng toán tử 3 ngôi để kiểm tra trạng thái có "completed" hay không?

# Tạo 1 component CountdownTimer với state "countdown" - Theo dõi thời gian đếm ngược.

- Mở file "src/components" > Tạo Component "CountdownTimer.js".
- Sử dụng Hook "useState" để tạo trạng thái.

  > Trạng thái "countdown" > Khởi tạo là 1 số nguyên.
  > Trạng thái "isRunning" > Khởi tạo là false.

- Hàm xử lý sự kiện khi nhấn nút "Start".

  > Bắt đầu đếm ngược chỉ khi không đang trong quá trình đếm ngược.
  > Đặt lại thời gian đếm ngược về giá trị ban đầu.

- Hàm xử lý sự kiện khi đếm ngược hoàn thành.
- Sử dụng Hook "useEffect" để theo dõi thay đổi trong trạng thái "isRunning".

  > Sử dụng "setInterval()" để giảm thời gian đếm ngược mỗi giây.
  > Kiểm tra và xử lý khi đếm ngược đến 0 > Dừng đếm ngược.
  > Xử lý khi component unmout "clearInterval()".
  > [isRunning, countdown] : Chỉ chạy lại khi một trong hai giá trị này thay đổi.

- Cấu trúc JSX để hiển thị component "CountdownTimer.js".

# Tạo 1 component ColorPicker với state "colors" - Theo dõi danh sách các màu.

- Mở file "src/compnents/" > Tạo Component "ColorPicker.js".
- Sử dụng Hook "useState" để tạo trạng thái.

  > Trạng thái "colors" > Khởi tạo là một mảng các màu.
  > Trạng thái "selectedColor" > Khởi tạo là màu đầu tiên.

- Hàm xử lý sự kiện khi một màu được chọn.
- Cấu trúc JSX để hiển thị component "ColorPicker.js".
  > Sử dụng phương thức map() để lặp qua từng phần tử trong mảng.

# Tạo 1 component ImageCarousel với state "currentImageIndex" - Duyệt qua nhiều hình ảnh

- Mở file "src/components/" > Tạo Component "ImageCarousel.js".
- Sử dụng Hook "useState" để tạo trạng thái.

  > Trạng thái "currentImageIndex" > Khởi tạo là 0.

- Khai báo 1 mảng images chứa nhiều hình ảnh.
- Tải và lưu hình ảnh bên trong folder "public".
- Hàm xử lý khi nhấn nút "Next".
- Cấu trúc JSX để hiển thị component "ImageCarousel.js".

# Tạo 1 component ShoppingCart với state "cartItems" - Quản lý giỏ hàng

- Mở file "src/components/" > Tạo Component "ShoppingCart.js".
- Sử dụng hook "useState" để tạo trạng thái.

  > Trạng thái "cartItems" theo dõi các sản phẩm > Khởi tạo là 1 mảng danh sách sản phẩm, gồm nhiều objects con bên trong.
  > Mỗi objects đại diện cho 1 sản phẩm gồm các thông tin: {id, name, price, quantity}.

- Hàm xử lý sự kiện :

  > handleAddToCart() - Thêm sản phẩm vào giỏ hàng.
  > updateQuantity() - Cập nhật số lượng của sản phẩm.
  > handleRemoveFromCart() - Xóa sản phẩm khỏi giỏ hàng.
  > updateTotalPrice() - Cập nhật tổng giá tiền.

- Cáu trúc JSX để hiển thị component "ShoppingCart.js".

  > Hiển thị thông tin "Giỏ Hàng" và mục "Thêm Sản Phẩm".
  > Sử dụng phương thức map() để lặp qua từng sản phẩm > Trả về cho component "ProductItem" > Truyền các props {product, onChange, onRemove}.

- Tại "src/components/" > Tạo thêm 1 component "ProductItem.js".

  > Nhận các props từ component "ShoppingCart".
  > Render JSX để hiển thị giao diện.
  > Hiển thị sản phẩm và nút "Xóa Khỏi Giỏ Hàng".
