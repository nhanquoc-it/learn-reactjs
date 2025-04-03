# Props trong ReactJS :

    - Props viết tắt của "Properties".
    - Là một Object được truyền vào trong một "components".
    - Mỗi "components" sẽ nhận vào "props" => trả về React element.
    - Truyền hàm như props.

# Những điều cần lưu ý với Props :

    - Props giúp giao tiếp giữa các "components" với nhau bằng cách truyền tham số qua lại giữa các "components".
    - Khi một "Component Cha" truyền cho "Component Con" một "props".
        => Components con chỉ có thể đọc.
        => Không có quyền chỉnh sửa nó bên phía components cha.

# Truyền props trong các components (Component Cha) : App.js

    - Truyền dữ liệu từ một "component" với nhau bằng cách : truyền như một "attributes" trong HTML element.

    - Cú pháp :
        const App = () => <Welcome tenProps1="giatri1" tenProps2="giatri2"> Giá trị của props.children </Welcome>

        Trong đó :
            + <Welcome> : là 1 component.
            + tenProps1, tenProps2 : là tên thuộc tính mình cần truyền.
            + giatri1, giatri2 : dữ liệu cần truyền.

# Nhận props trong components (Component Con) : Welcome.js

    + Function components > Nhận vào "tham số" (props)
        const Welcome = (props) => {
            console.log(props);
        };

    + Class components > Nhận vào giá trị "this.props".
        class Welcome extends Component {
            render() {
                console.log(this.props);
            }
        }

# Gọi đến giá trị của props : return()

    + Function component : {props.tenProps1}
    + Class component : {this.props.tenProps1}

# Ví dụ thực tế :

    - Giả sử mình muốn truyền các props có tên : name, type, color, size,... vào trong components có tên "Clothes".

    - Cách thực hiện :
        + B1: Tại thư mục "src" > Mở thư mục "components" > Tạo file "Clothes.js".
        + B2: Tiếp theo ở file "App.js" > Import component "Clothes" > truyền vào các props tương ứng.
        + B3: Cuối cùng, chạy dự án : npm start

# Thực hành trong folder dự án "my-app"
