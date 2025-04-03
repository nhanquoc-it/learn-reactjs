# Performance Optimization trong ReactJS :

    - Là quá trình tối ưu hiệu suất của ứng dụng.
    - Sử dụng các kỹ thuật và công cụ để giảm thiểu số lượng công việc phải thực hiện bởi trình duyệt và máy chủ.
    - Giúp cải thiện người dùng.
    - Giảm thời gian tải trang.
    - Tăng khả năng mở rộng của ứng dụng.

# Các Components được sử dụng :

## React.memo() : Tránh việc re-render functional component khi không cần thiết.

    - Được sử dụng như một HOC (Higher-Order Component).
    - Bao bọc bên ngoài component cần được tối ưu hóa.

    - Khi sử dụng > React sẽ tự động so sánh các "props" của component trước và sau update > Nếu các "props" không thay đổi > React sẽ bỏ qua việc "render" lại component.

    - Cách dùng :

        import React, {memo} from "react";

        const MyComponent = memo((props) => {
            // Component code here
        });

    * Lưu ý :
        + Chỉ hoạt động dựa trên "props".
        + Không hoạt động khi sử dụng "state" hoặc "context".

## React.PureComponent : Xác định xem có cần render lại component hay không.

    - Là một "class component" được cung cấp sẵn mà tự động thực hiện các kiểm tra sâu (deep checks).

    - Cách dùng :

        class MyComponent extends React.PureComponent {
            render() {
                // Render logic
            }
        }

## useMemo() : Tối ưu hóa các "phép toán" phức tạp, không phải tính lại mỗi khi component "re-render".

    - Giúp tính toán lại giá trị chi khi các [dependencies] thay đổi.

    - Cách dùng :

        import React, { useMemo } from 'react';

        const MyComponent = ({ data }) => {
            const computedData = useMemo(() => {
                // Phép tính phức tạp
                return expensiveComputation(data);
            }, [data]);

            return <div>{computedData}</div>;
        };

## useCallback() : Tối ưu hóa các "hàm" bên trong component, tránh "re-render" không cần thiết.

    - Giúp giữ lại hàm callback ổn định qua các lần render.
    - Hữu ích khi truyền các hàm "callback" > xuống các component con > tránh tạo ra các hàm mới > mỗi lần render.

    - Cách dùng :

        import React, { useCallback } from 'react';

        const Parent = () => {
            const handleClick = useCallback(() => {
                console.log('Clicked!');
            }, []);

            return <Child onClick={handleClick} />;
        };

## shouldComponentUpdate() : Tránh re-render lại component khi không cần thiết.

    - Là một "lifecycle method" được gọi trước khi 1 component được render lại.

    - Cho phép kiểm soát việc render lại component > Dựa trên những thay đổi trong "props" hoặc "state".

    - Trả về "false" > Không cần render lại component.
    - Trả về "true" > Cần render lại component.

    - Cách dùng :

        import React, {Componnet} from "react";

        class MyComponent extends Component {
            shouldComponentUpdate(nextProps, nextState) {

                // Kiểm tra xem có sự thay đổi trong "props" hoặc "state" không
                if(this.props.foo === nextProps.foo && this.state.bar === nextState.bar) {
                    return false;
                }
                return true;
            }

            render() {
                return (
                    <div>
                        // Nội dung component
                    </div>
                )
            }
        }

## Lazy Loading (React.lazy & Suspense) : Tải các "component" hoặc "module" chỉ khi cần thiết thay vì tải tất cả một lần khi ứng dụng khởi tạo.

    - Cho phép tải các module JavaScript chỉ khi cần.
    - Suspense để quản lý trạng thái "loading" khi chờ các component tải.

    - Cách dùng :

        import React, {lazy, Suspense} from "react";

        const OtherComponent = lazy(() => import("./OtherComponent"));

        function App() {
            return (
                <Suspense fallback={<div>Loading...</div>}>
                <OtherComponent />
                </Suspense>
            )
        }

    - Sử dụng lazy() : định nghĩa "OtherComponent" dưới dạng một hàm import().

    - Sau đó, sử dụng <Suspense> : để hiển thị một "placeholder" trong khi component đang được tải.

    - Khi component được tải xong > React sẽ tự động render component đó.

## Virtualization (React Window, React Virtualized) : Giảm số lượng DOM nodes được render trong các danh sách dài.

    - Chỉ render các phần tử có thể nhìn thấy trong "viewport".
    - Giảm tải bộ nhớ và tăng hiệu suất.

    - Cách dùng :

        import {FixedSizeList as List} from "react-window";

        const MyList = () => {
            <List
                height={150}
                width={300}
                itemCount={1000}
                itemSize={15}
            >
            {({ index, style }) => <div style={style}>Item {index}</div>}
            </List>
        }

## Event Debouncing và Throttling :

    - Giảm số lần gọi "hàm" khi người dùng thực hiện các hành động như gõ phím, di chuyển chuột, hoặc cuộn trang.

    - Debouncing giúp trì hoãn việc gọi hàm > cho đến khi người dùng ngừng hành động trong 1 khoảng thời gian.

    - Throttling giới hạn số lần hàm được gọi trong 1 khoảng thời gian cố định.

==========================================================

# Tổng kết :

<React.memo> và <PureComponent> : Sử dụng khi muốn tránh re-render không cần thiết đối với các component nhận "props" ít thay đổi.

<useMemo> và <useCallback> : Sử dụng khi có các phép toán phức tạp hoặc callback function cần tối ưu hóa.

<React.lazy> : Sử dụng khi cần tối ưu hóa thời gian tải trang hoặc ứng dụng có nhiều module lớn.

<Virtualization> : Là lựa chọn lý tưởng khi làm việc với danh sách dài hoặc các phần tử có thể cuộn được.

<Debouncing/Thottling> : Giúp cải thiện hiệu suất khi xử lý các sự kiện người dùng liên tục.
