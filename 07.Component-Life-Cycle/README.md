# Component Lifecycle là gì ?

    - Là vòng đời của một Component được viết theo chu kỳ như sau :
        + Tạo vòng đời (Mount trên DOM).
        + Cập nhật vòng đời (Updating).
        + Kết thúc vòng đời (Unmount từ DOM).

# Các phương thức làm việc của Component Lifecycle :

## Initialization (Khởi tạo) :

    - Giai đoạn khởi tạo "state" và "props".
    - Thực hiện bên trong phương thức "constructor".

## Mounting (Render lần đầu) :

    - Thực hiện sau quá trình khởi tạo được hoàn thành.
    - Có nhiệm vụ chuyển virtual DOM (DOM ảo) trong React thành DOM và hiển thị trên trình duyệt.

    1. componentWillMount() :

        + Sẽ được gọi trước khi render.
        + Không nên sử dụng setState() hay call API tại đây vì chưa có DOM để tương tác.

    2. componentDidMount() :

        + Được gọi 1 lần duy nhất sau khi component được render xong.
        + Thường sử dụng setState() hoặc call API vì khi này DOM đã được tạo, thường được dùng khi muốn:
            > Get data từ server.
            > Lấy giá trị cố định của thành phần như : width, height, offset,...
            > Khai báo setInterval() cho hành động lặp lại.
            > Khai báo sự kiện như : load, scroll, resize,...

## Updating (Cập nhật) :

    - Trong giai đoạn này, dữ liệu của các phần (props & state) sẽ được cập nhật để đáp ứng với các sự kiện của người dùng : click, gõ,...
    - Re-render lại component.

    1. shouldComponentUpdate() :

        + Xác định component nên được update hay không :
            - true (mặc định) => tiếp tục thực hiện "componentWillUpdate()" và "componentDidUpdate()".
            - false => sẽ dừng thực hiện.

        + Nhận 2 tham số truyền vào là : "nextState" và "nextProps".

    2. componentWillUpdate() :

        + Được gọi 1 lần duy nhất sau "shouldComponentUpdate()".
        + Sử dụng trước khi re-render component.
        + Nhận 2 tham số truyền vào là : "nextState" và "nextProps".

    3. componentDidUpdate() :

        + Được gọi sau khi DOM đã được update xong.

        + Thường được dùng khi muốn :
            > Xử lý dữ liệu được lấy từ server.
            > Thay đổi giao diện dựa vào dữ liệu nhận được.

        + Nhận 2 tham số truyền vào là : "prevProps" và "prevState".

        + Sử dụng "ReactDOM.unmountComponentAtNode(elm)" để loại bỏ component ra khỏi DOM.

## Unmounting (Loại bỏ) :

    1. componentWillUnmount() :

        + Được gọi 1 lần duy nhất trước khi component được loại bỏ từ DOM.
        + Những thứ đã khai báo tại "componentDidMount()" cần phải được hủy.
        + Đây là phương thức kết thúc vòng đời của component.

# Khởi chạy component trong dự án "my-app" > src > File "test.html"
