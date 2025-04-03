# React Microservices là gì ?

    - Là 1 kiến trúc phân tán cho phép xây dựng ứng dụng web phức tạp.

     - Bằng cách chia nhỏ các thành phần độc lập và khả năng mở rộng.

# Cách hoạt động :

    - Các thành phần được phân tách và phát triển độc lập.
    - Đảm bảo tính tái sử dụng cao.
    - Khả năng phát triển độc lập với nhau.
    - Các thành phần được kết nối với nhau thông qua các API và giao tiếp qua mạng.
    - Tạo nên hệ thống hoạt động liên tục.

# Các components được sử dụng trong Microservices :

# API Service :

    - Là các dịch vụ trong ứng dụng chịu trách nhiệm giao tiếp với các API (Application Programming Interface).
    - Được dùng để thực hiện các yêu cầu từ phía client.
    - Nhận dữ liệu trả về từ backend.

    - Thường xử lý các yêu cầu HTTP như :

        > GET : Để lấy dữ liệu.
        > POST : Để gửi dữ liệu (thường là tạo hoặc cập nhật tài nguyên).
        > PUT / PATCH : Để cập nhật dữ liệu.
        > DELETE : Để xóa dữ liệu.

## Express.js - Xây dựng API Services.

1. Đầu tiên, cần cài đặt : npm install express
2. Tạo 1 file "apiServer.js".
3. Tạo endpoint và gửi các yêu cầu HTTP đến đường dẫn API.
4. Tiến hành kiểm tra thông tin này và trả về kết quả qua JSON.

## Axios - Xây dựng API Services.

1. Đầu tiên, cần cài đặt : npm install axios
2. Tạo 1 file "apiServer.js".
3. Sử dụng "async/await" kết hợp với axios để tiến hành tạo endpoint và gửi dữ liệu đến API.
4. Trả về kết quả.

# Service Registry :

    - Giúp quản lý các dịch vụ trong hệ thống một cách hiệu quả.
    - Giúp tìm kiếm và truy cập các dịch vụ khác một cách tự động.
    - Không cần phải biết trước vị trí của chúng.

    - Sử dụng : "Spring Cloud" và "Netflix Eureka".

# Circuit Breaker :

    - Là một mô hình thiết kế phần mềm.
    - Giúp ứng dụng xử lý các lỗi liên quan đến các service và network failure.

    - Giúp ứng dụng chuyển sang 1 hành vi khác khi một service không hoạt động đúng cách.

    - Hoạt động dựa trên nguyên tắc mở rộng / giảm quy mô dịch vụ.
    - Khi có sự cố xảy ra > Tự động đóng kết nối đến service đó > Chuyển hướng yêu cầu đến các service phụ trợ khác > Ngăn chặn truy cập đến service bị sự cố > Giảm thiểu tác động của sự cố đó đến toàn bộ hệ thống.

    - Sử dụng thư viện : brakes

# Load Balancer :

    - Được sử dụng để phân phối tải và định tuyến yêu cầu tới nhiều phiên bản của một dịch vụ đang chạy trên nhiều máy chủ khác nhau.

    - Khi có yêu cầu được gửi tới "Load Balancer" > Quyết định định tuyến yêu cầu tới phiên bản của dịch vụ > Đang có tình trạng tốt nhất > Để xử lý yêu cầu đó.

    - Sử dụng thư viện : http-proxy-middleware

# Event Bus :

    - Cho phép các service giao tiếp với nhau thông qua truyền tải các thông điệp (message) giữa chúng.

    - Được triển khai và hoạt động độc lập với nhau.

    - Cung cấp cơ chế gửi và nhận các thông điệp giữa các service.

    - Các service có thể gửi 1 thông điệp đén 1 "Event Bus" > các service khác có thể đăng ký nhận các thông điệp đó.

    - Khi 1 thông điệp được gửi đến > Tất cả các service đã đăng ký > Nhận được thông điệp đó.

    - Sau khi lắng nghe 1 sự kiện > cần đăng ký thông tin của nó với "Event Bus" > Sử dụng 1 địa chỉ URL được xác định trước > Gửi 1 yêu cầu http POST đến "Event Bus" > Với thông tin đăng ký sự kiện.

    - Sử dụng thư viện : axios

# Proxy Server :

    - Sử dụng để xử lý các yêu cầu giữa các service khác nhau.
    - Đóng vai trò như 1 cánh cửa trung gian cho các yêu cầu của client và định tuyến chúng đến các service phù hợp.

    - Triển khai bằng : Express.js
    - Sử dụng thư viện : http-proxy
