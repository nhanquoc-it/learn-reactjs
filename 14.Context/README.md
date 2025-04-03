# Context trong ReactJS :

    - Cung cấp cho chúng ta cách để thực hiện chia sẻ dữ liệu tới các component trong cây mà không cần truyền dữ liệu qua "props" theo từng cấp bậc.

# Lưu ý :

    - Bình thường, khi ta thực hiện truyền dữ liệu tới các component bằng props => chỉ có thể truyền từ component cha - con.
    - Nếu muốn truyền sang component cháu - họ hàng xa => rất phức tạp.

    - Chính vì thế, "Context" sẽ là kênh giao tiếp cho các component cho phép truyền dữ liệu 1 cách đơn giản hơn rất nhiều.

# Context API

## React.createContext :

        const MyContext = React.createContext(defaultValue);

    - Khởi tạo một "Context Object".
    - Giá trị của "defaultValue" : là giá trị mặc định của props value trong "Provider".

## Context.Provider :

        <MyContext.Provider value={ /*some value*/ }>

    - Mỗi "Context Object" phải đi kèm với một "Provider".
    - Cho phép nhận về sự thay đổi của context.

## Context.Consumer :

        <MyContext.Consumer>
            {value => /* render something based on the context value */ }
        </MyContext.Consumer>

    - Một "React component" được khởi chạy mỗi khi giá trị của "context thay đổi".
    - Nhận về giá trị của context đó.

## Context.displayName :

        const MyContext = React.createContext(/* some value */);
        MyContext.displayName = "MyDisplayName";

        <MyContext.Provider>    // "MyDisplayName.Provider" in DevTools
        <MyContext.Consumer>    // "MyDisplayName.Consumer" in DevTools

    - Đặt tên cho Context, tên này sẽ được hiển thị trong DevTools.

## Class.contextType :

        class MyClass extends React.Component {
            render() {
                let value = this.context;

                ....
            }
        }
        MyClass.contextType = MyContext;

    - contextType : là một thuộc tính của class được tạo bởi "React.createContext()".
    - Được dùng để lấy giá trị của context.

# Sử dụng Context :

    + B1 : Khởi tạo "Object Context" .
        -- Sử dụng phương thức : React.createContext().
        -- Nhận được 1 object gồm các thuộc tính quan trọng : Provider và Consumer.

    + B2 : Sử dụng Provider
        -- Bọc quanh các component.
        -- Truyền giá trị vào props value.

    + B3 : Thêm Consumer
        -- Vào bất cứ đâu muốn chia sẻ context.
        -- Phải nằm ở bên trong Provider.
        -- Lấy giá trị của context thông qua props children.

# Ví dụ :

    - Xây dựng 1 ứng dụng cho phép random các số và hiển thị.

    * Các bước thực hiện :
        + B1: Trước tiên, tiến hành khởi tạo 1 object context.

        + B2: Sau đó, mình sẽ bọc quanh các component cần chia sẻ bằng "Provider" và "Consumer".

            -- Truyền vào props "value" trong "Provider" giá trị là 1 object có thuộc tính :
                + number : Chứa giá trị của số.
                + update : hàn thực hiện update số.

            -- Consumer : có nhiệm vụ xem xét sự thay đổi và trả về giá trị của context trong "props children".

            -- Mình sẽ chia sẻ props cho 2 component đó là : ShowNumber và UpdateNumber.

        + B3: Tiếp theo, mình sẽ đi xây dựng 2 component là "ShowNumber" và "UpdateNumber" mà mình đã gọi ở "Consumer".
            -- Sử dụng phương thức "contextType" để gán giá trị của context.
            -- Lúc này thuộc tính "this.context" trong class sẽ chứa giá trị của context.
