# Simple Conditional Rendering - Render điều kiện đơn giản.

+ Bước 1 : Tạo một ứng dụng React mới
    > npx create-react-app conditional-rendering
    > cd conditional-rendering

+ Bước 2 : Tạo thư mục "src/components" > Tạo component "SimpleConditionalRendering".

+ Bước 3 : Sửa nội dung file "src/App.js" > Sử dụng component trong App.

+ Bước 4 : Tạo file CSS cho App (nếu cần).

+ Bước 5 : Chạy ứng dụng > npm start

# User Authentication - Kiểm tra xem người dùng đã đăng nhập hay chưa.

- Tại "src/components/" > Tạo 1 component "UserAuthentication.js".
- Trong component này > Thêm 2 state.

  > isLoggedIn : Kiểm tra người dùng đã đăng nhập hay chưa > Giá trị ban đầu là "false".
  > username : lưu tên người dùng > Giá trị ban đầu là "chuỗi rỗng".

- Viết hàm xử lý "login" và "logout".
- Render JSX hiển thị giao diện cho component.

# Role Based Access Control (RBAC) - Quản lý quyền truy cập của người dùng.

- Tạo 1 component "RoleBasedAccessControl.js" >
- Trong component này > Nhận vào props "userRole" từ component "App.js" truyền xuống.

- Kiểm tra điều kiện nếu "userRole" là "admin" > Hiển thị nút "Admin Panel" > Ngược lại, hiển thị "User Dashboard".

- File "App.js" > Khởi tạo 1 biến có tên "userRole" > Gán giá trị là "admin".

# Conditional Component - Hiển thị các components dựa trên một biến điều kiện.

- Khởi tạo lần lượt 3 components như sau :

  > ComponentA : Hiển thị đây là componentA.
  > ComponentB : Hiển thị đây là componentB.

  > ConditionalComponent : Hiển thị 1 trong 2 component A và B.

        -- Dựa trên một biến điều kiện "showComponentA".
            -- Nhận vào props "showComponentA" từ file "App.js" truyền xuống.

- Trong file "App.js" > Khởi tạo biến "showComponentA" với giá trị là "true" > Truyền props xuống cho component "ConditionalComponent".

# Weather Display - Hiển thị thông tin thời tiết dựa trên một biến.

- Tạo component "WeatherDisplay.js" > Nhận vào props "isSunny" từ file "App.js" truyền xuống.

- Kiểm tra điều kiện > Nếu "true" trả về "sunny" > Ngược lại, trả về "cloudy".

- Trong file "App.js" > Khởi tạo biến "isSunny" với giá trị là "true" > Truyền props xuống cho component "WeatherDisplay".

# Error Message - Hiển thị thông báo lỗi dựa trên một biến.

- Tạo component "ErrorMessage.js" > Nhận vào props "hasError" từ file "App.js" truyền xuống.

- Kiểm tra điều kiện của "props" > Nếu có lỗi trả về thông báo lỗi > Ngược lại, trả về "null".

- Trong file "App.js" > Sử dụng "useState" > Tạo state "hasError" > Khởi tạo là "false".

- Hàm "simulateError" : Cập nhật lại state "true".

# Condition Styling - Tạo Style CSS cho phần tử có chứa "className" dựa trên điều kiện.

- Tạo component "ConditionalStyling.js" > Nhận vào props "isActive".

- Trong thẻ <div> thêm "className" > Kiểm tra điều kiện trong này.

  > Nếu "true" > trả về "box active"
  > Ngược lại > trả về "box"

- Trong file "App.js" > Sử dụng "useState" > Khởi tạo state "isActive" > Giá trị ban đầu "false".

- Hàm "toggleActive()" : chuyển đổi qua lại trạng thái active > Cập nhật giá trị phủ định của state.

# Login Form - Tạo form đăng nhập và hiển thị thông báo lỗi khi người dùng nhập sai thông tin đăng nhập.

- Tạo component "LoginForm.js" > Sử dụng "useState" > Khởi tạo 3 state.

  > username: theo dõi tên người dùng.
  > password : theo dõi mật khẩu khi người dùng nhập.
  > error : theo dõi nếu người dùng nhập sai thông tin thì thông báo lỗi.

  => Tất cả đều khởi tạo là "chuỗi rỗng".

- Hàm "handleSubmit" : Xử lý sự kiện submit form > Tiến hành kiểm tra thông tin đăng nhập.

- Tại thẻ <input /> : Gắn thêm event "onChange()" > Cập nhật lại trạng thái của state "user" và "password" của người dùng.

# Show / Hide Element - Hiển thị và Ẩn một phần tử dựa trên hành vi người dùng.

- Tạo component "ShowHideElement.js" > Sử dụng "useState" > Khởi tạo state.

  > isVisible : theo dõi trạng thái hiển thị của phần tử > Khởi tạo là "false".

- Hàm "toggleVisibility()" : Xử lý nội dung khi nhấn nút "Toggle".

- Render JSX hiển thị giao diện component.

# Conditional Rendering With List - Hiển thị các phần tử trong danh sách dựa trên các điều kiện cụ thể.

- Tạo component "ConditionalRenderingWithLists.js" > Khởi tạo 1 mảng "numbers".

- Render JSX hiển thị component > Sử dùng "map()" để lặp qua từng phần tử trong mảng và kiểm tra điều kiện cho từng phần tử.

# Subscription Plan - Hiển thị thông tin các gói đăng ký dựa trên một biến.

- Tạo component "SubscriptionPlan.js" > Nhận vào props "planType" từ file "App.js" truyền xuống.

- Kiểm tra điều kiện và render ra 3 block : basic, premium, ultimate.

- Tại file "App.js" > Sử dụng "useState" > Khởi tạo state "planType".

- Hàm "handlePlanChange()" : Cập nhật lại state theo tham số "type" được truyền vào.

- Gọi component "SubscriptionPlan" > Truyền vào props "planType".

# Online / Offline Status - Hiển thị trạng thái "trực tuyến" hoặc "ngoại tuyến" của người dùng.

- Tạo component "OnlineOfflineStatus.js" > Nhận vào props "isOnline" > Kiểm tra điều kiện "online" hoặc "offline".

- Tại file "App.js" > Sử dụng "useState" > Khởi tạo state.

  > isOnline : theo dõi trạng thái hoạt động của người dùng > Khởi tạo là "true".

- Sử dụng "useEffect" : Tạo ra 2 hàm xử lý trạng thái của người dùng.

  > handleOnline() : Cập nhật state khi người dùng đang "trực tuyến".
  > handleOffline() : Cập nhật state khi người dùng đang "ngoại tuyến".

  > Lắng nghe 2 sự kiện "EventListener" từ "window" : online, offline.

- Render JSX hiển thị giao diện component > Truyền props "isOnline" xuống component "OnlineOfflineStatus".

# Shopping Cart - Hiển thị danh sách các mặt hàng trong giỏ hàng.

- Tạo component "ShoppingCart.js" > Nhận vào props "items".

- Render JSX và hiển thị giao diện > Kiểm tra điều kiện:

  > Nếu độ dài của "items" bằng 0 > Hiển thị thông báo "Giỏ hàng trống".
  > Nếu có mặt hàng > Sử dụng "map()" để lặp qua từng phần tử > Hiển thị các "item".

- Trong file "App.js" > Khởi tạo 1 mảng "items" chứa danh sách các mặt hàng trong giỏ hàng > Tiến hành truyền props "items" xuống cho component "ShoppingCart.js".

# Show / Hide Modal - Hiển thị và ẩn một modal khi người dùng nhấn vào một nút.

- Tạo component "ShowHideModal.js" > Sử dụng "useState" > Khởi tạo state.

  > showModal : Theo dõi trạng thái hiển thị của modal > Khởi tạo là "false".

- Hàm "toggleModal()" : Chuyển đổi trạng thái ẩn / hiển thị của modal.

- RenderJSX hiển thị giao diện component.

# Conditional Navigation - Hiển thị thanh điều hướng dựa trên quyền truy cập của người dùng.

- Tạo component "ConditionalNavigation.js" > Nhận vào props "isAdmin".

- Render JSX và hiển thị component > Kiểm tra điều kiện :

  > Nếu "isAdmin" là true > Trả về 2 trang : Admin, Home.
  > Ngược lại > Chỉ trả về trang "Home".

- Trong file "App.js" > Khởi tạo 1 biến "isAdmin" > Gán giá trị là "true".
- Sau đó, truyền props "isAdmin" xuống cho componnet "ConditionalNavigation".
