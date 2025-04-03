# React Refs là gì :

    - Là một tính năng hữu ích dùng để tham chiếu một element trong DOM.

    - Hoặc từ 1 class component con đến component cha.

    - Cho phép đọc và chỉnh sửa các element đó mà không cần phải sử dụng đến "props" hay "state".

# Sử dụng React Refs :

## Khởi tạo một Refs : Bằng cách sử dụng hàm React.createRef()

    - Class component : Thường được chỉ định bên trong hàm tạo "constructor()".
            this.myRef = React.createRef();

    - Function component : như tạo 1 biến.
            let ref = React.createRef();

## Sử dụng Refs : Gán vào cho một element trong hàm "render()".

            <tagName ref={this.myRef} />

# Forwarding Refs :

    - Là một kỹ thuật cho phép component cha có thể tham chiếu tới các element của component con để đọc và chỉnh sửa.

    - Để thực hiện việc chuyển tiếp một ref => bao component con trong React.forwardRef().
        -- Cung cấp 2 tham số là : props và refs.
        -- Giúp chúng ta nhận về giá trị của "props" và "refs" từ component cha.

    - Có thể sử dụng trong Class Component => bằng cách sử dụng HOC (Higher Order Component).

# Lưu ý :

    - Thuộc tính "current" trong refs chứa giá trị element được tham chiếu khi element đó được render.

    - Nên sử dụng React refs để can thiệp vào DOM trong trường hợp cần thiết => Bởi khi các DOM bị thay đổi => sẽ ảnh hưởng đến quá trình render các component.
