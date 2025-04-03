# Xây dựng ứng dụng máy tính đơn giản bằng ReactJS :

    - Sử dụng "class component" và "state" để quản lý  các giá trị hiển thị và phép toán.

    - Trước tiên, tạo mới 1 project và đặt tên cho nó là "calculator" > Command Prompt > Nhập lệnh :
        ~> npx create-react-app calculator

    - Sau khi cài đặt "Create-React-App" thành công > Mở folder "src" ra.

    - Quan tâm đến 2 file chính :
        + App.js
        + App.css

    - Tiến hành chỉnh sửa code.
    - Sau khi tất cả mọi thứ hoàn tất => Khởi chạy dự án bằng lệnh : npm start

# Cách triển khai :

## Tại file "App.js" :

- B1 : Import React và các thư viện.

- B2 : Tạo component App (class component) kế thừa từ React.Component.

  -- Trong "constructor()" giá trị "state" được khởi tạo với 2 thuộc tính :
  -- display : Hiển thị giá trị hiện tại trên màn hình của máy tính, mặc định là "0".
  -- equation : Lưu trữ phép toán đang thực hiện.

- B3 : Thực hiện tạo ra các phương thức và viết chức năng cho nó.

# numInput() : Xử lý khi người dùng nhấn các số.

- Tiến hành kiểm tra các điều kiện :

--> Nếu phép toán không có dấu "=" && chuỗi "equation" kết thúc bằng số hoặc dấu chấm.
=> Giá trị người dùng nhập được thêm vào "display" và "equation".

--> Nếu phép toán có dấu toán học (+, - , \* , /)
=> Giá trị người dùng nhập sẽ tiếp tục thêm vào chuỗi phép toán => Cập nhật màn hình.

# operInput() : Xử lý khi người dùng nhấn các toán tử (+, - , \* , /).

- Tiến hành kiểm tra các điều kiện :

--> Nếu "equation" đã có dấu "=" (kết quả tính toán đã có).
=> Bắt đầu phép toán mới với giá trị "display".

--> Nếu không => phép toán sẽ được thêm vào "equation" => loại bỏ toán tử cuối cùng, nếu người dùng đã nhập một toán tử khác.

# decInput() : Xử lý khi người dùng nhấn dấu chấm (decimal point).

- Tiến hành kiểm tra các điều kiện :

--> Nếu "equation" rỗng hoặc đã có dấu "=" (phép toán đã hoàn thành).
=> Thiết lập lại màn hình và phép toán thành "0."

--> Nếu phép toán đang kết thúc bằng 1 toán tử.
=> Thêm "0." vào sau toán tử đó.

--> Nếu "display" chưa có dấu chấm.
=> Thêm dấu chấm vào giá trị hiện tại.

# clearInput() : Xóa hết các giá trị hiện tại trên màn hình và trong phép toán.

    - Đưa chúng về trạng thái mặc định "0" và phép toán rỗng.

# calculate() : Thực hiện tính toán.

--> Nếu "equation" đã có dấu "=" (phép toán đã được tính toán).
=> Hiển thị lại kết quả.

--> Nếu phép toán hợp lệ : có chứa toán tử nhưng không kết thúc bằng một toán tử.
=> Hàm eval() : thực hiện tính toán kết quả của biểu thức.
=> Kết quả được làm tròn (nếu cần) và hiển thị lên màn hình.

- B4 : Ta thực hiện "bind" lần lượt các phương thức này bên trong hàm "constructor()".
  => Để có thể sử dụng trong các hàm xử lý sự kiện của React.

- B5 : Render Component
  -- Phương thức render() : trả về JSX, nơi các component <Display> và <Button> được sử dụng để hiển thị giao diện.

  -- Các nút bấm <Button> có thuộc tính "onClick" : trỏ đến các hàm xử lý sự kiện : clearInput, numInput, operInput và calculate.

# Component <Display> : nhận 2 props.

    + equation : biểu thức toán học.
    + display : giá trị hiển thị.

# Component <Button> : nhận props.

    + id, value, class, click : hàm xử lý sự kiện.
    + display : văn bản hiển thị trên nút.

- B6 : Khởi chạy dự án, mở "Termial Prompt" và gõ lệnh :
  ~> cd calculator
  ~> npm start

## Tại file "App.css" : Ta viết mã định dạng CSS cho các class,id sao cho phù hợp.
