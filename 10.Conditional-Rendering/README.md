# Render có điều kiện :

    - Trong React, chúng ta có thể tạo nhiều component khác nhau => render bất kỳ component nào ta muốn => sử dụng điều kiện tại phần render.

# Cách sử dụng :

    - Hoạt động tương tự như JS thông thường, chỉ cần sử dụng biểu thức điều kiện "if...else", hay "condition operator" tại phần render.
    - React sẽ dựa vào câu điều kiện => tạo thành phần đại diện cho State hiện tại => cập nhật lại giao diện (dựa vào setState).

# Gán element vào biến :

    - Đây là cách mà bạn có thể tùy chọn các element được hiển thị bằng cách thêm điều kiện vào cho nó.
    - Cú pháp :
        var tenBien = element;

# Biểu thức điều kiện trong JSX :

    - Sử dụng biểu thức điều kiện bên ngoài hàm "return()".
    - Ngoài ra, sử dụng nó trong JSX bằng cách viết nó trong dấu ngoặc nhọn {}.

# Ngăn chặn component render :

    - Khi bạn muốn một component tự ẩn đi dù nó được render trong một component khác.
    - Ta sẽ trả về "null" thay vì trả về JSX.

# Khởi chạy component trong dự án "my-app" > src > File "test.html"