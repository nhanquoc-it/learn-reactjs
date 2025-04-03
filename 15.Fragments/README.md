# Fragments trong ReactJS :

    - Cho phép chúng ta bọc các element JSX lại.
    - Giúp triển khai các cấu trúc element HTML theo ý muốn.

# Tại sao phải sử dụng Fragments :

    - Thông thường chúng ta dùng thẻ <div> để bao quanh các element JSX.

    - Nhưng trong 1 vài trường hợp việc thêm thẻ <div> vào sẽ làm đảo lộn quy ước CSS và cấu trúc các thẻ HTML khi được render => Lúc này, cần phải sử dụng fragments.

# Cách khai báo Fragments :

    // Khai báo JSX sai :
        return (
            <h1> Hello, World! </h1>
            <p>Học lập trình ReactJS</p>
        )

    // Sử dụng Fragments để loại bỏ lỗi :
        return (
            <React.Fragment>
                <h1> Hello, World! </h1>
                <p>Học lập trình ReactJS</p>
            </React.Fragment>
        )

# Cú pháp của Fragments :

    + Cú pháp đầy đủ : <React.Fragment> {children} </React.Fragment>
        - Cho phép thêm các "key" vào khi triển khai các lists.

    + Cú pháp viết tắt : <> {children} </>
        - Không thể chỉ định "keys" vào "fragments".

# Lưu ý :

    - Nếu không có thẻ bao ngoài các element sẽ thông báo lỗi :
        "JSX parent expressions must have one parent element".
