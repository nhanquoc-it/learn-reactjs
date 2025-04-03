# JSX là gì ?

    - JSX = Javascript + XML.
    - XML là viết tắt của "eXtensible Markup Language".
    - Là một cú pháp mở rộng của JavaScript.
    - Cho phép viết các cấu trúc giống HTML trong mã JavaScript.
    - React sẽ chuyển đổi JSX thành các React element bằng cách gọi hàm React.createElement() khi biên dịch.

# JSX có phải là HTML không?

    - JSX không phải là HTML : Phải cần có Javascript Babel để dùng JSX.
    - Attribute name khác : class => className
    - Tính chất tự đóng của thẻ: <img/>, <br/>, <input/>
    - Phải có một phần tử bao ngoài: các thẻ cùng cấp => bao ngoài bằng thẻ <div> hoặc <React.Fragment>.

# JSX và Biến JavaScript :

    - Sử dụng biến bên trong JSX phải nằm bên trong dấu ngoặc nhọn {}

# Ghi chú :

- Babel : Để biên dịch JSX thành JavaScript có thể chạy trong Browser.

- Thêm Babel vào bên trong thẻ <head> :
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

- Sử dụng JSX với Babel :
<script type="text/babel">
