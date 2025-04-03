# Lifting State Up trong ReactJS :

    - Kỹ thuật này là cách mà có thể chia sẻ dữ liệu cho các component khác.
    - Có nghĩa là khi bạn thay đổi dữ liệu của 1 component con thì bạn sẽ gửi dữ liệu cho component cha biết.

# Các bước thực hiện :

    - Trước tiên, bên trong "ComponentCha" ta tiến hành truyền cho "ComponentCon" 1 props có giá trị là 1 function.
        --- Khi "ComponentCon" trả về dữ liệu => Function này sẽ được gọi.

    - Tiếp theo, ở "ComponentCon" tiến hành gửi lại cho "ComponentCha" => bằng cách truyền vào props (giá trị cần gửi về).

# Ví dụ thực tế :

    - Xây dựng ứng dụng cho phép chuyển đổi giữa USD và VNĐ.

    * Các bước thực hiện :

    + B1: Trước tiên, tạo folder "src" > Tạo file "App.js".

    + B2 : Xây dựng component cha có tên "Calculator" và hàm "handleChange()".
        -- Calculator : khởi tạo (props, state) và render JSX => Thực hiện bên trong file "App.js".
        -- handleChange() : chịu trách nhiệm nhận data từ component con truyền lên => cập nhật lại State.

    + B3 : Truyền cho 2 component con có tên "USDtoVND" và "VNDtoUSD" các props như sau :
        -- onHandleChange : giúp cho component con có thể gửi dữ liệu về component cha.
        -- value : giá trị của input.

    + B4 : Tiếp theo, tại "src" > Tạo thư mục "components" > khởi tạo các component con :
            + USDtoVND.js
            + VNDtoUSD.js

        -- Các component này có nhiệm vụ chuyển đổi tiền => trả về cho component cha bằng prop "onHandleChange()".

    + B5 : Quay lại file "App.js" > import 2 component con để sử dụng.

    + B6 : Lệnh chạy dự án "npm start"
