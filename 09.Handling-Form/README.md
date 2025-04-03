# React form - <input /> :

    - Ban đầu, "value" của <input /> sẽ lấy giá trị khởi tạo của state là rỗng.

    - onChange={this.handleChange} sẽ sử dụng "setState" để lấy giá trị thay đổi của <input />

    - Khi nhấn "Submit" sẽ kích hoạt "onSubmit" của <form>.

    - Khi này sẽ tiến hành xử lý funcion "handleSubmit()" là gọi một thông báo với giá trị vừa nhập.

# React form - <textarea> :

    - Cách xử lý cho <textarea /> tương tự cho <input />

# React Form - <select> <option> :

    - Cách xử lý cho <select> <option> có 1 điểm khác biệt hơn so với xử lý bên file HTML.

    - Đó là ta sẽ sủ dụng thuộc tính "value" ngay tại <select>.

    - Việc này sẽ tiện lợi ở chỗ : State chỉ cần tương tác với một "value" của <select>.

    - Phần xử lý dữ liệu giống như xử lý cho <input />

# React Form - 2 thành phần <input /> :

    - Ở phần "constructor()" khai báo 2 giá trị đầu tiên của :
        <input type="checkbox" />
        <input type="text" />

    - Trong function "handleInputChange()"
        -- Xử lý giá trị "true" và "false" => <input type="checkbox" />
        -- Đồng thời lấy giá trị "name" => <input type="text" />

        -- Sử dụng "setState()" để thực hiện cập nhật giá trị mới cho State.

    - Function "handleSubmit()" : giữ vai trò gọi 2 giá trị mới của :
            <input type="checkbox" />
            <input type="text" />

# React Form - Kết hợp nhiều thành phần :

    - Tương tự như trên, dựa theo "name" và "value" ta có thể xử lý nhiều thành phần của <form> cùng 1 lúc.

# Khởi chạy component trong dự án "my-app" > src > File "test.html"