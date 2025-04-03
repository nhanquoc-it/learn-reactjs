# React Hook là gì ?

    - Là một tính năng quan trọng của React.
    - Giúp quản lý "state" và xử lý "side effect" trong Function Component.

# Tại sao React Hook quan trọng trong dự án ?

    - Nó giúp giảm bớt "boilerplate" code.
    - Làm cho code đơn giản và dễ đọc hơn.
    - Cho phép các "Function Component" sử dụng "state" và "lifecycle methods" một cách dễ dàng và linh hoạt.
    - Giúp giảm thiểu sự phụ thuộc vào "Class Component".

# Các Component trong React Hook :

## useState() : Quản lý state trong Function Component.

    - Cho phép bạn khởi tạo và sử dụng "state" trong 1 component.
    - Khi sử dụng > Truyền vào giá trị khởi tạo của "state" > Trả về 1 mảng với 2 phần tử.

        > Phần tử đầu tiên : Giá trị hiện tại của "state".
        > Phần tử thứ hai : Một hàm để cập nhật giá trị của "state".

    - Cú pháp :

        const [stateVariable, setStateFunction] = useState(initialValue);

        * stateVariable : tên state.
        * setStateFunction : Hàm cập nhật state.
        * initialValue : Giá trị khởi tạo ban đầu của state.

- Xem thêm tại file "useState.js".

# useEffect() : Thực thi các hiệu ứng phụ (side effect) sau khi render.

    - Là 1 function nắm bắt tất cả các sự thay dổi của code.
    - Được sử dụng để thực thi các "side effect" như :

        > Các tác vụ như gọi API.
        > Gửi dữ liệu lên server.
        > Đăng ký sự kiện.
        > Tạo, cập nhật hoặc xóa các thành phần UI.
        > Gửi các yêu cầu mạng.
        > Thực hiện các hành động "bất đồng bộ" khác.

    - Được gọi sau khi render và DOM được cập nhật.
    - Không làm chậm quá trình render.

    - Nhận vào 1 "hàm callback" và 1 "mảng dependencies" :

        > Hàm callback : được gọi sau khi React thực hiện việc render "component lần đầu tiên" và sau mỗi lần "component được cập nhât".

        > Nếu mảng "dependencies" : Không được cung cấp => Hook này sẽ được gọi sau mỗi lần "component được cập nhật".

        > Nếu mảng "dependencies" : Truyền vào mảng rỗng => Hook này chỉ được gọi khi component được hiển thị lần đầu tiên.

        > Khi các giá trị trong mảng "dependencies" thay đổi => Hook này sẽ được gọi lại (giúp tối ưu và tránh gọi lại các side effect không cần thiết).

    - Cũng có thể được sử dụng để hủy các "side effect" > Bằng cách trả về một hàm "cleanup" từ "hàm callback".

    - Cú pháp :

        import React, {useEffect} from "react";

        useEffect(() => {
            // Side effect code here
            return () => {
                // Cleanup code (optional)
            }
        }, [dependencies])

- Xem thêm tại file "useEffect.js".

# useContext() : Truy cập giá trị từ context.

    - Là một API của React Hook.

    - Cho phép truy cập và sử dụng giá trị được chia sẻ từ một "Provider" component đến các "component con" của nó.

    - Nhận vào 1 "đối tượng context" > Tạo bởi hàm "createContext()" > Trả về giá trị hiện tại của "context".

        > Nếu giá trị "context" : Thay đổi > Tất cả các component sử dụng Hook này để truy cập context đó sẽ được cập nhật lại.

    - Cú pháp :

        const value = useContext(MyContext);

        * value : giá trị của context.
        * MyContext : là tên context mà bạn muốn truy cập.

- Xem thêm tại file "useContext.js" và folder "Todo".

# useReducer() : Quản lý state phức tạp.

    - Là một API của React Hook.
    - Cho phép quản lý "state" phức tạp và chia sẻ state giữa các "component".

    - Khi sử dụng > Truyền vào 1 "reducer function" và 1 "initial state" cho state của component.

        > Reducer function : nhận vào "state" hiện tại và một "action" > Trả về "state mới".

    - Khi "dispatch" một action > reducer function sẽ được gọi > Trả về "state mới" > Cập nhật lại UI của component (Re-render).

    - Cú pháp :

        const [state, dispatch] = useReducer(reducer, initialState);

       * initialState : Giá trị khởi tạo của state.

- Xem thêm tại file "useReducer.js".

# useCallback() : Ghi nhớ "hàm", giúp tránh việc tạo ra các hàm mới trong mỗi lần render.

    - Là một trong những Hook quan trọng.
    - Được sử dụng để tối ưu hóa hiệu suất của các "Function Component".
    - Được sử dụng để ghi nhớ một hàm (memoize a function) .
    - Hook này sẽ trả về > một phiên bản > lưu trữ trong bộ nhớ > cho đến khi các đối số được truyền vào thay đổi.
    - Tránh việc component render lại khi không cần thiết.

    - Cú pháp :

        const memoizedCallback = useCallback(() => {
            // logic của hàm
        }, [dependencies]);

        * memoizedCallback : Hàm đã được "ghi nhớ" và chỉ tạo lại nếu có sự thay đổi trong [dependencies].

        * [dependencies] : Mảng các "dependencies" mà khi thay đổi, hàm sẽ được tạo lại.

        * [] : Mảng "dependencies" rỗng, hàm chỉ được tạo 1 lần.

- Xem thêm tại file "useCallback.js".

# useMemo() : Ghi nhớ "giá trị tính toán", giúp tránh việc tính toán lại các giá trị phức tạp trong mỗi lần render.

    - Là một trong những Hook quan trọng.
    - Được sử dụng để tối ưu hóa hiệu suất của các "Functional Component".
    - Được sử dụng để ghi nhớ một giá trị (memoize a value) .
    - Tránh việc tính toán lại giá trị khi không cần thiết.

    - Cú pháp :
            const memoizedValue = useMemo(() => {
                // Tính toán giá trị ở đây
                return computedValue;
            }, [dependencies]);

        * memoizedValue : Giá trị đã được "ghi nhớ" và chỉ được tính toán lại khi có sự thay đổi trong [dependencies].

        * [dependencies] : Mảng các dependencies, khi thay đổi, giá trị sẽ được tính toán lại.

- Xem thêm tại file "useMemo.js".

# useRef() : Giữ giá trị qua các lần render, hoặc truy cập DOM.

    - Được sử dụng để tham chiếu đến 1 phần tử "DOM".
    - Lưu trữ một biến không thay đổi giữa các lần render của component.
    - Trả về 1 dối tượng gọi là "Ref Object".
    - Được bao bọc bởi một "current property".
    - Giá trị "current property" sẽ được lưu và truy cập giữa các lần render của component.
    - Khi giá trị "current property" được cập nhật > React không thể nhận ra sự thay đổi > Không render lại component.

    - Cú pháp :
        const myRef = useRef(initialValue);

        * myRef.current : Lưu trữ giá trị hoặc tham chiếu tới DOM element.

- Xem thêm tại file "useRef.js".

# useLayoutEffect() : Thực hiện các tác vụ tác động đến giao diện người dùng.

    - Là một trong những hook giống như "useEffect()".
    - Nhưng khác ở chỗ là thời điểm mà chúng được gọi trong quá trình render.
    - Được sử dụng để thực hiện các tác vụ liên quan đến giao diện người dùng > Sau khi component được render.
        > Thay đổi kích thước, vị trí.
        > Thuộc tính của phần tử trên trang web.

    - Được gọi sau khi render, trước khi DOM được vẽ lại.
    - Có thể làm chậm render nếu sử dụng sai cách.

- Xem thêm tại file "useLayoutEffect.js".
