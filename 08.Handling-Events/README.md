# Handling Events :

    - Giống với xử lý các sự kiện trên các phần tử DOM.
    - Một số khác biết về cú pháp :
        + Các sự kiện React được đặt tên bằng : camelCase.
            -- onclick => onClick
            -- onchange => onChange
        + Với JSX, truyền một hàm để bắt sự kiện, thay vì một chuỗi HTML thông thường.

# Event viết theo HTML : Function sẽ được gọi khi render.

<button onclick="fncName()">
Click me!
</button>

# Event viết theo JSX : Function sẽ được gọi khi "button" được click.

<button onClick={fncName}>
Click me!
</button>

# Ngăn chặn hành động mặc định của Event : Sử dụng e.preventDefault();

# This trong xử lý Events :

    - Sử dụng arrow function :
        onClick={() => this.fncName()}

    - Sử dụng bind() :
        onClick = {this.fncName.bind(this)}

    - Hoặc bind() biến "this" trong constructor().

# Khởi chạy component trong dự án "my-app" > src > File "test.html"