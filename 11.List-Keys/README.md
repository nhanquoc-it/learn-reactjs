# Lists trong React :

    - Việc khởi tạo các list trong React, tương tự như khởi tạo lists trong Javascript.
    - Để lấy ra được từng giá trị của Array thì ta sử dụng phương thức map() để lặp qua từng phần tử trong mảng.

    - Nếu thấy log cảnh báo :  Warning: Each child in a list should have a unique "key" prop.
        => Để loại bỏ cảnh báo này thì phải chỉ định cho các items trong lists một thuộc tính có tên là "key".

# Keys trong React :

    - Key giúp React xác định item nào được thay đổi, được thêm, hoặc được xóa.
    - Key dành cho mỗi phần tử trong list.
    - Key của mỗi phần tử phải là duy nhất.
    - Key không được trùng lặp trong các list.
    - Sử dụng id (hoặc index) để làm key.
    - Key phải đồng nhất khi sử dụng trong cùng một component (hoặc trong cùng 1 function hay class).

# Lưu ý :

    - Tránh chỉ định "index" làm key : Bởi khi thực hiện sắp xếp mảng thì "index" sẽ thay đổi. React lại phải xác định lại keys một lần nữa, gây ra giảm hiệu xuất làm việc.

    - Chỉ sử dụng "index" làm key trong khi :
        + Nếu list của bạn là tĩnh và sẽ không thay đổi.
        + List sẽ không bao giờ được sắp xếp lại.
        + List sẽ không được lọc (thêm / xóa các mục khỏi danh sách).
        + Không có id cho các mục trong list.

    - Khi các key này trùng lặp sẽ nhận được cảnh báo Warning :

    " Warning: Encountered two children with the same key, `p`.
    Keys should be unique so that components maintain their identity across updates.
    Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. "

    - Key không phải một giá trị của component => nếu muốn sử dụng giá trị giống như "key" => cần phải tạo một props => sử dụng với tên khác.

    const content = posts.map((post) => {
        <Post
        key={post.id}
        id={post.id}
        title={post.title} />
    })


# Khởi chạy component trong dự án "my-app" > src > File "test.html"