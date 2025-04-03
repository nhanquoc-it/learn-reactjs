# Higher-Order Components (HOC) là gì?

    - Là một kỹ thuật để tái sử dụng logic trong các component.
    - HOC không phải là một thành phần React thông thường.
    - Mà là một hàm nhận vào một "Component" và trả về một "Component".
    - Tái sử dụng các component và giúp quá trình duy trì dự án dễ dàng hơn.

# Lợi ích của HOC :

    - Tái sử dụng logic giữa các component mà không cần phải sao chép mã.

    - Giảm sự phức tạp trong component => Tách biệt component UI và Logic phức tạp (bọc trong HOC).

    - Chia sẻ các tính năng chung : xử lý dữ liệu, xác thực người dùng, v.v... giữa các component mà không làm thay đổi cấu trúc của từng component.

# Cách hoạt động HOC :

    - HOC thường được sử dụng để thêm các tính năng như :
        + Kiểm tra quyền truy cập.
        + Lấy dữ liệu từ API.
        + Xử lý logic phức tạp => muốn tái sử dụng trong nhiều component khác nhau.

    - HOC có thể nhận 1 "Component gốc" => Tiến hành thêm các logic bổ sung => Trả về một "Component mới".

# Cú pháp cơ bản của HOC :

## Function Component HOC : return function(props) {}

    function withSomeLogic(WrappedComponent) {
        return function(props) {
        // Logic bổ sung hoặc state
        return <WrappedComponent {...props} />;
        };
    }

    Trong đó :
        + withSomeLogic : là tên của HOC.
        + WrappedComponent : HOC nhận vào tham số là 1 component.
        + Trả về 1 component.

## Class Component HOC : return class extends React.Component {}

# Lưu ý khi sử dụng HOC :

    - Không thay đổi state của component gốc, mà chỉ thêm logic mới.

    - Đặt tên rõ ràng : HOC nên có tên bắt đầu với "with" để dễ dàng nhận diện.
        -- Ví dụ : withLoading, withErrorHandling, withAuth.
