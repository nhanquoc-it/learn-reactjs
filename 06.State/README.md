# State trong ReactJS :

    - Là 1 object sử dụng để chứa dữ liệu hoặc thông tin về components.
    - State có thể được thay đổi bất cứ khi nào mong muốn.

# Những điều cần lưu ý với State :

    - Khác với "props" có thể truyền props sang các "components" khác nhau.
    - Thì "state" chỉ tồn tại trong phạm vi của "components" chứa nó.
    - Mỗi khi "state" thay đổi => components đó sẽ được render lại.
    - Được dùng để phản hồi các yêu cầu từ người dùng, hay lưu trữ một dữ liệu nào đó trong components.

# Thao tác với State trong ReactJS : Sử dụng Class Components.

    * Cấu trúc chung :

        class ClassName extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    // Khởi tạo state tại đây
                };
            }

            render() {
                return (
                    // Trả về JSX
                );
            }
        }

    - Trong đó :
        + ClassName : tên Class
        + extends React.Component : phương thức kế thừa component (thực ra là kế thừa class đã tồn tại).
        + constructor(props) : hàm khởi tạo đối tượng cho một class, mỗi class chỉ chứa một hàm khởi tạo duy nhất.
        + super(props) : gọi lại constructor trong "React.Component", khi này ta mới có thể sử dụng phương thức "this" được.
        + this.state : phải là một Object.
        + render : giống như cách dùng của "props".

    * Cấu trúc đơn giản :

        class ClassName extends React.Component {
            state = {};

            render() {
                return (
                    ...
                );
            }
        }

# Khởi tạo một state : Bằng cách gán giá trị cho biến "this.state".

        this.state = {name : "noi-dung"};

# Lấy giá trị một state : Bằng cách gọi "this.state".

        console.log(this.state.name);

# Cập nhật một state : Sử dụng phương thức setState()

        this.setState({
            name : "newValue"
        });

# Lấy giá trị của state trước khi cập nhật :

    this.setState((state) => {
        return newValue;
    });

# Lưu ý :

    - Trong hầu hết các trường hợp bạn nên khởi tạo state bên trong hàm "constructor()" để tránh gặp các lỗi không mong muốn.
    - Vì đây là hàm khởi chạy đầu tiên khi một "components" được gọi.
