# 1. Fetching Data from API :

    - Trước khi bắt đầu, đảm bảo rằng đã cài đặt : "Node.js" và "npm".

    - Tiếp theo, tạo 1 dự án React mới và cài đặt Axios : để gửi yêu cầu API.

> npm create-create-app fetch-api-example
> cd fetch-api-example
> npm install axios

## Tạo 1 Component "UserList" - Hiển thị danh sách người dùng

    - Tại thư mục "src/components/" > Tạo 1 component "UserList.js".
    - Sử dụng hook "useState()" để tạo "state".
        > state "users" : Hiển thị danh sách người dùng > Khởi tạo là 1 mảng rỗng.

    - Sử dụng hook "useEffect()" tiến hành fetch dữ liệu người dùng từ API.

        > Kết hợp "async/await" và "try...catch" để thực hiện kiểm tra dữ liệu trả về từ API.

        > Sử dụng "axios" > Gửi yêu cầu HTTP GET đến API.
        > Thành công > Cập nhật state "users".
        > Thất bại > Thông báo lỗi.

    > Dependencies là [] : Hook này sẽ chỉ chạy một lần khi component được "render lần đầu tiên", và không chạy lại khi component "re-render".

    - Trong return() : Sử dụng "map()" để lặp qua từng người dùng trong danh sách > Trả về tên người dùng tương ứng.

    - Tại file "App.js" > Tiến hành gọi component "UserList.js".

    - Chạy ứng dụng : npm start

# 2. Displaying Details - Hiển thị thông tin chi tiết của một người dùng

    - Tại thư mục "src/components/" > Tạo 1 component "UserDetail.js".

    - Tại component "UserDetail" > Nhận vào props là "user" > Tiến hành render ra các thông tin chi tiết của người dùng.

    - Tiếp theo, mình cần cập nhật component "UserList.js":
        > Khởi tạo state "selectedUser" > Giá trị khởi tạo là "null".
        > Sử dụng hook "useHistory()" > Giúp bạn điều hướng trang > thông qua lịch sử trình duyệt > không cần phải thay đổi URL thủ công.

    - Hàm xử lý khi người dùng được chọn.
        > Cập nhật state "selectedUser".
        > Thực hiện điều hướng sang url chi tiết người dùng thông qua "id" > '/users/id'.

    - Sau đó, cần phải cài đặt React Router để xử lý định tuyến cho trang chi tiết > Mở Terminal > Gõ lệnh :

> npm install react-router-dom

    - Tại file "App.js" > Tiến hành định tuyến các "Route" và render component.

# 3. Searching Data - Thực hiện chức năng tìm kiếm người dùng.

    - Trong component "UserList.js" > Thêm 1 state.
        > searchTerm : theo dõi dữ liệu tìm kiếm khi người dùng nhập > Giá trị khởi tạo là chuỗi rỗng.

    - Bên trong hàm "return()" :
        > Trả về 1 thẻ "input" > Truyền vào 2 props : value, onChange.
        > Thực hiện thêm phương thức "filter()" để lọc ra tên người dùng.

# 4. Pagination - Thực hiện phân trang cho người dùng.

    - Trong component "UserList.js" > Thêm 2 state.
        > currentPage : theo dõi trang hiện tại > Khởi tạo là 1.
        > usersPerPage : thể hiện số lượng người dùng hiển thị trên mỗi trang > Khởi tạo là 5.

    - Viết các logic để hiển thị người dùng cho trang hiện tại.

    - Trong "return()" > Gọi đến component "Pagination.js" > Truyền vào các props :
            > usersPerPage
            > totalUsers
            > paginate
            > currentPage

    - Tiếp tục, tạo 1 component "Pagination.js" > Nhận vào các props từ component "UserList.js" truyền xuống.

        + Khai báo mảng "pageNumbers" : để lưu trữ các số trang > Giá trị khởi tạo là "rỗng".

        + Sau đó, sử dụng vòng lặp for() để tạo các số trang :
            > Hàm "Math.ceil()" : làm tròn lên số nguyên gần nhất.
            > totalUsers : Tổng số người dùng cần phân trang.
            > usersPerPage : Số người dùng hiển thị trên mỗi trang.

        + Sử dụng push() : để thêm số trang vào mảng.

# 5. Loading Indicator - Hiển thị biểu tượng, thông báo loading.

    + Trong component "UserList.js" > Thêm một "state".
        > isLoading : theo dõi trạng thái của việc tải dữ liệu từ API > Khởi tạo là "true".

    + Trong "useEffect()" > Thực hiện gọi API > Khi dữ liệu đã được tải xong > Ẩn biểu tượng loading > Hiển thị danh sách người dùng.

# 6. Error Handling - Xử lý lỗi khi gặp vấn đề trong quá trình gửi yêu cầu API.

    + Trong component "UserList.js" > Thêm một "state".
        > error : theo dõi khi có lỗi xảy ra trong quá trình gửi dữ yêu cầu API > Khởi tạo giá trị là "null".

    + Trong "useEffect()" > Bên trong "catch()" > Cập nhật state "error" và hiển thị thông báo lỗi phù hợp cho người dùng.

    + Kiểm tra nếu có lỗi xảy ra => Hiển thị thông báo lỗi.

# 7. Form Submission - Biểu mẫu cho phép người dùng nhập thông tin của người dùng mới.

    + Tại "src/components/" > Tạo mới component "Form.js".
    + Sử dụng "useState()" > Thêm 1 state.
        > formData : theo dõi thông tin nhập liệu từ người dùng > Giá trị khởi tạo là 1 Objects bao gồm 3 thuộc tính : name, email, address > Đều là chuỗi rỗng.

    + handleChange() : Hàm xử lý sự thay đổi nhập liệu trên form > Cập nhật state "formData".
        -- e.target.name : là tên của trường (tức là "name" hoặc "email", "address").
        -- e.target.value : là giá trị mới mà người dùng đã nhập vào.

    + handleSubmit() : Hàm xử lý khi "submit" form > Gọi đến HTTP "POST" và truyền dữ liệu từ "formData" gửi đến cho API.

    + Render JSX hiển thị giao diện form nhập liệu.

# 8. Authentication - Đăng nhập và xác thực người dùng.

    + Tại "src/components/" > Tạo mới component "Login.js".
    + Sử dụng "useState()" > Thêm 1 state.
        > credentials : theo dõi thông tin nhập liệu từ người dùng > Giá trị khởi tạo là 1 Object có 2 thuộc tính : email, password > Đều là chuỗi rỗng.

    + Sau đó, thực hiện các hàm xử lý "handleChange" và "handleSubmit" để xử lý yêu cầu trước và sau khi submit form.

    + Render JSX hiển thị giao diện form nhập liệu.

# 9. Deleting Data - Chức năng xóa người dùng từ danh sách.

    + Trong component "UserList.js" > Thêm 1 nút "Delete" cho mỗi người dùng trong danh sách.

    + Khi người dùng nhấp vào nút "Delete" > Gửi yêu cầu "DELETE" tới API để xóa người dùng tương ứng.

    + handleDeleteUser() : Hàm xử lý gửi yêu cầu xóa người dùng từ API.

    + Render JSX hiển thị giao diện danh sách người dùng.

# 10. File Upload - Chức năng tải lên file.

    + Tại "src/components/" > Tạo mới component "FileUpload.js".

    + Sử dụng "useState()" > Thêm 2 state.
        > file : Lưu trữ tệp người dùng chọn từ input.
        > error : Lưu trữ thông báo lỗi nếu có sự cố trong quá trình tải tệp lên.
        > successMessage : Lưu trữ thông báo thành công khi tệp đã được tải lên thành công.
        > Tất cả khởi tạo giá trị là "null".

    + handleFileChange() : Hàm xử lý khi người dùng chọn tệp từ "input".
        -- e.target.files[0] : mảng các tệp người dùng đã chọn.

    + handleSubmit() : Hàm xử lý yêu cầu tải file từ người dùng gửi đến cho API.
        -- Tạo 1 đối tượng "FormData()" : cho phép chúng ta gửi file qua HTTP.
        -- Sử dụng "append()" : Thêm tệp vào "FormData" với tên trường là "file" để chuẩn bị gửi.
        -- Sử dụng HTTP POST đến url của API.
        -- Dữ liệu gửi dưới dạng "multipart/form-data" : Loại content type dùng để tải lên tệp.
        -- Thực hiện kiểm tra việc tải lên "thành công" hoặc "thất bại" xảy ra.

# 11. Real-time Updates - Cơ chế cập nhật tự động dữ liệu từ API (Khi có sự thay đổi từ phía server).

    + Bước 1 : Tạo kết nối WebSocket.
        > Trong component "App.js" > Tạo một kết nối WebSocket với máy chủ.
        > Lắng nghe các sự kiện để cập nhật dữ liệu khi có thay đổi.
        > Sau đó, sẽ đóng kết nối khi compoennt bị hủy.

    + Bước 2 : Cấu hình WebSocket phía máy chủ.
        > Xử lý và trả lời yêu cầu từ client (nếu cần).
        > Gửi dữ liệu mới cho tất cả client khi có sự thay đổi.

# 12. Rate Liniting và Throttling - Giới hạn số lượng và tốc độ gửi request.

    - Rate Limiting : Giới hạn số lượng yêu cầu mà một ứng dụng có thể gửi đến một API trong một khoảng thời gian nhất định.
    - Throttling : Giới hạn tốc độ gửi yêu cầu.

    + Bước 1 : Cài đặt thư viện Axios.
    + Bước 2 : Tạo Axios Instance với Interceptors.
        > Tạo 1 file "api.js" 
        > Tiến hành tạo một "instance" để gửi yêu cầu API với các "interceptor" 
        > Xử lý rate "limiting" hoặc "throttling".
    
    + Bước 3 : Sử dụng API trong ứng dụng React.
        > Sử dụng trong các "Component".
    
    + Bước 4 : Kiểm tra và tối ưu.