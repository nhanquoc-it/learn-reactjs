# Những thứ cần nắm trước khi làm việc với Redux :

## State :

    - Được định nghĩa là 1 object.
    - Có thể sử dụng để chứa dữ liệu hoặc thông tin về component.
    - Trong 1 React Component : "state" chỉ tồn tại trong phạm vi của components chứa nó.
    - Mỗi khi "state" thay đổi > Thì components đó sẽ được render lại.

## Props :

    - Là 1 object được truyền vào trong một components.
    - Mỗi components sẽ nhận vào : props
    - Trả về : React element
    - Cho phép chúng ta giao tiếp giữa các components với nhau > bằng cách truyền tham số > qua lại giữa các components.

# Redux là gì ?

    - Là 1 thư viện cho phép chúng ta quản lý "state" trong một ứng dụng JavaScript.
    - Nếu kết hợp nó trong ReactJS : hổ mọc thêm cánh.

# Tại sao chúng ta phải sử dụng Redux ?

    - Giúp giải quyết một bài toán khá là quan trọng đó là : chia sẻ state.

# Tình huống như sau :

    - Giả sử khi chúng ta muốn truyền dữ liệu từ :

            Component A ---> Component C
        (bắt buộc phải thông qua Component B)

    - Bằng cách sử dụng "props" > bắt buộc phải thông qua > component trung gian.
    - Điều này khá phức tạp, dễ gây nhầm lẫn.

    * Cách giải quyết :
    - Để có thể truyền dữ liệu 1 cách đơn giản và tối ưu.

    - Dữ liệu > Lưu trữ vào một "Store" > cấp phát dữ liệu cho các component cần thiết.

    - Store : đóng vai trò trung gian (có nhiệm vụ chứa và phân phát dữ liệu).

    ===> Như vậy, sơ đồ sẽ là :

                        (Chia sẻ dữ liệu)
            Component A  --------------->   Component C

                        (đẩy state)
           Component A   ---------->   Store

                    (cấp phát dữ liệu)
            Store   ----------------->   Component C

# Cấu trúc của Redux : Có 3 phần chính

    - Store : Nơi lưu trữ "state" của toàn bộ ứng dụng. Chỉ có 1 store trong Redux.

    - Actions : Là những đối tượng mô tả các sự kiện mà bạn muốn thay đổi trong "state".
        -- "type" : xác định hành động.
        -- "payload" : dữ liệu.

    - Reducers : Các hàm thuần túy (pure function) nhận vào "state" hiện tại và "action" > Trả về "state" mới.

# Redux hoạt động như thế nào ?

    - Store : được coi là phần quan trọng nhất trong Redux.
        ---> có nhiệm vụ lưu trữ và phân phát dữ liệu cho các component.

    - Trong Store gồm các thành phần :
        -- dispathcer : có nhiệm vụ kích hoạt các "action" bên trong "reducer".
        -- reducer : có nhiệm vụ xử lý các "action" được gửi đến.

    - Sau khi một "action" được thực thi > "dispathcer" sẽ được kích hoạt > Gửi đến "reducer" một action > "reducer" thực hiện hành động dựa vào "action" được gửi đến > Đồng thời, lưu lại giá trị của "state" mới > Vào trong "store" > Trả về "state" mới đó.

# Các bước sử dụng Redux :

1. Cài đặt Redux và React-Redux :

   > npm install redux react-redux --save

2. Tạo Actions : Actions là đối tượng mô tả hành động mà bạn muốn thực hiện.

3. Tạo Reducers : Reducers xử lý các `actions` và cập nhật `state`.

4. Tạo Store : Sử dụng `createStore()` để tạo Redux store.

5. Kết nối React với Redux :

   - Sử dụng `Provider` từ `react-redux` để bao bọc ứng dụng của bạn.
   - Cung cấp `store` cho tất cả các component.

6. Sử dụng Redux trong Component :

   - Sử dụng `useSelector()` để truy xuất `state`.
   - Sử dụng `useDispatch()` để gửi `action`.
