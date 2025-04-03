# Component trong ReactJS là gì ?

    - Giúp phân chia các UI (giao diện người dùng) thành các phần nhỏ để dễ dang quản lý và tái sử dụng.
    - Ví dụ như các phần: header, footer, sidebar, navigation, itemList, ... .
    - Mỗi component sẽ đảm nhiệm phần hiển thị khác nhau.
    - Khi muốn làm một trang hoàn chỉnh chỉ cần ghép các component này lại với nhau.

# Cách hoạt động của Component :

    - Mỗi React App đều có thể chứa rất nhiều component.
    - Mỗi component trong đó thường nhận về các "props" => trả về "React element" => Hiển thị ra cho UI.
    - Component có 2 loại chính : Function component & Class component.

# Khởi tạo một React Component :

    - Trước tiên, tạo một thư mục "components" trong thư mục "src" :

    src/
    -----components/
    ---------Component sẽ viết ở trong thư mục này

# Cách viết một Component :

    - Viết dưới dạng Function (hoặc Class).
    - Function luôn được "return".
    - Bên trong "return" luôn tồn tại "tag bao ngoài" tất cả (tag wrap).
    - Sử dụng thư viện "React.DOM" để render một component.
    - Function render phải có cấu trúc XML, viết dưới dạng :
        <Tên /> hoặc <Tên></Tên>

# Cách tạo và sử dụng Component :

## 1. Function Component :

    + B1: Tại thư mục "src" > Tạo mới thư mục "components" > Tạo file "Welcome.js"
    + B2: Import thư viện React :
            import React from "react";
    + B3: Khai báo hàm Welcome (phải trùng với tên file .js).
    + B4: Cuối file "export" component > Để file khác gọi đến và sử dụng.
    + B5: Tiến hành import file "Welcome.js" > Vào trong file "App.js" để hiển thị ra giao diện.

## 2. Class Component :

    - Chỉnh sửa lại file "Welcome.js".
    + B1: Import thư viện React , Component :
            import React, { Component } from "react";
    + B2: Khai báo "class Welcome extends Component".
    + B3: Cuối file cũng "export" component.

# Lưu ý :

    - Khi muốn làm việc với chức năng như events, state, life cycles => mô hình OOP => Cân nhắc sử dụng "class component".
    - Ngược lại, có thể sử dụng "function component" để thay thế.

# Thực hành trong folder dự án "my-app"
