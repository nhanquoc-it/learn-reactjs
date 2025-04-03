# Formik là gì :

    - Là 1 thư viện quản lý "form" trong React.
    - Cung cấp các tính tính năng :

        > Quản lý state của form.
        > Validation và xử lý submit form.

# Tại sao chúng ta sử dụng Formik :

    - Giúp giảm thiểu lượng code phải viết để quản lý form.

    - Nó cung cấp các API và tính năng đơn giản để quản lý "state" của form và "validation".

    - Tăng tính hiệu quả cho quá trình phát triển ứng dụng.

    - Tương thích với các thư viện :
        -- Material UI.
        -- Bootstrap.
        -- React-Bootstrap.
        -- Ant Design.

    - Được ưa chuộng trong cộng đồng React.

# Cài đặt Formik vào dự án : thông qua npm hoặc yarn.

    > npm install formik
    Hoặc :
    > yarn add formik

# Import Formik vào component :

    import {Formik, Form} from "formik";

# Sử dụng Formik : Để quản lý "state" và "validation" của form

    - Truyền vào "initial values" của form.
    - Truyền vào "validation schema" (nếu có).
    - Vào 2 prop : "initialValues" và "validationSchema" của component Formik.

    - Ngoài ra, cũng cần truyền vào hàm "handleSubmit" để xử lý "submit form".

# Sử dụng các API của Formik : Để quản lý "state" và "validation" của form

    - Ví dụ, để quản lý giá trị của một trường "input".
    - Sử dụng component "Field" của Formik.

# Sử dụng các props của Field : Để quản lý "state" và "validation" của trường input

    - Ví dụ, để hiển thị lỗi validation của trường "input".
    - Sủ dụng props "errors" và "touched" của Field.

# Sử dụng hàm "handleSubmit" : Được truyền vào prop "onSubmit" của component Formik

# Tạo form đơn giản với Formik :

    - initialValues : là đối tượng chứa giá trị khởi tạo ban đầu của form.

    - validationSchema : là 1 object sử dụng để "validate" các trường input. ( sử dụng thư viện Yup).

    - onSubmit : là một hàm được gọi khi form được "submit". Giá trị truyền vào là "object" chứa giá trị của các trường input.

    - Bên trong component "Formik" > Truyền vào "children" > component "Form" và các trường input "Field" của form.

    - <Form> : Dùng để bọc các trường input của form.

    - <Field> : Dùng để render các trường input của form

    - Bên trong component "Field" > Truyền vào các props như là : name, type, placeholder, onChange > để Formik có thể quản lý giá trị của trường input này.

# Các tính năng của Formik :

## Validation Schema : Kiểm tra và xác thực dữ liệu nhập vào từ form.

    - Sử dụng thư viện Yup.
    - Định nghĩa các trường "input" trong form và các "validation schema" cho chúng.
    - Formik sẽ tự động xác thực chúng khi người dùng nhập dữ liệu vào form.

## Submitting Form : Xử lý các giá trị khi người dùng submit form.

    - Formik cung cấp các hàm và props giúp xử lý các giá trị trong form.
    - values : là đối tượng chứa các giá trị được nhập vào từ form > Có thể sử dụng giá trị này > Gửi lên server hoặc xử lý dữ liệu.

## Handing Asynchronous Form Submissions : Xử lý form bất đồng bộ.

    - submitForm : là 1 hàm xử lý form submission bất đồng bộ.
    - Sử dụng "await" để đợi cho việc "submit form" hoàn thành.
    - Nếu có lỗi xảy ra > bắt lỗi bằng cách > sử dụng "catch".
