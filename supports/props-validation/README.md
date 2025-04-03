# Props Validation là gì ?

    - Là cách để kiểm soát các vấn đề về "props".
    - Cho phép kiểm tra dữ liệu đầu vào của "props" trước khi "components" được render.
    - Giúp giảm thiểu các lỗi không mong muốn.

# Ví dụ :

    - Giả sử mình đang xây dựng một component cho phép chúng ta cộng 2 số với nhau.

        + Trường hợp 1 :
            - Đầu vào : 2 giá trị kiểu int.
            - Đầu ra : Nhận được kết quả đúng.

        + Trường hợp 2 :
            - Đầu vào : 2 giá trị kiểu string.
            - Đầu ra : Hiển thị sai kết quả.

# Thuộc tính propTypes : Dùng để kiểm tra props trong mỗi component.

## Function Components :

    function ReactComponent(props) {
        // ....render()....
    }

    ReactComponent.propTypes = {
        // ....chúng ta sẽ viết props type ở đây
    }

## Class Components (method 1) :

    class ReactComponent extends React.Component {
        // ....render()....
    }

    ReactComponent.propTypes = {
        // ....chúng ta sẽ viết props type ở đây
    }

## Class Components (method 2) : static

    class ReactComponent extends React.Component {
        // ....component class body here

        static propTypes = {
            // ....chúng ta sẽ viết props type ở đây
        }
    }

# Thư viện PropTypes :

    - Phiên bản cũ : React.PropTypes
        App.propTypes = {
            number1: React.PropTypes.number,
            number2: React.PropTypes.number,
        }

    - Từ React v15.5 : React.PropTypes (xóa bỏ) => Thay vào đó là thư viện (PropsTypes):
        + Cài đặt bằng npm :
                npm i prop-types
        + Sử dụng chỉ cần "import" nó vào :
                import PropTypes from "prop-types";
