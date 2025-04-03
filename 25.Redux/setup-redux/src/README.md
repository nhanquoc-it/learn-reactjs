# Xây dựng bộ khung Redux - Ứng dụng ghi chú.

# Cấu trúc thư mục dự án :

    src/
    ----- const/
                index.js
    ----- actions/
                index.js
    ----- reducers/
                ....
                index.js
    ----- components/

    ----- App.js
    ----- index.js


    - Mỗi thư mục sẽ có các nhiệm vụ khác nhau :
        + const : chứa các hằng số cố định của dự án.
        + actions : chứa các actions dùng để truyền vào hàm dispatch.
        + reducers : chứa các reducers trong redux.

# Khởi tạo hằng số : src/const/index.js

    - Trong các dự án lớn sẽ có rất nhiều hằng số.
    - Việc khởi tạo ra một thư mục chứa các hằng số là điều hoàn toàn cần thiết.

# Khởi tạo actions : src/actions/index.js

    - Là 1 object chứa các hành động mà bạn muốn gửi đến "reducers".
    - Khi muốn gửi "actions" đến "reducers" chỉ cần gọi:
        ---- store.dispatch(actions)

    - Mỗi "action" cần phải chỉ định thuộc tính :
        ---- "type" có giá trị duy nhất.

    - Bởi khi "action" gửi đến "reducers" nó sẽ dựa vào thuộc tính :
        ----"action.type" : để xác định mình nên làm gì với state.

# Khởi tạo reducers : src/reducers/

    - Có nhiệm vụ thay đổi "state" của ứng dụng.
    - Dựa trên từng hành động được gửi về.

    - Trong thư mục "src/reducers" > Tạo 1 reducers có tên "noteReducer.js".
    - File "index.js" > Tiến hành gộp các "reducer" lại với nhau > Sử dụng hàm "combineReducer()".

# Tích hợp Redux : src/index.js

    - Tại file "src/index.js" > Tiến hành tạo "Store".
    - Để các component khác có thể lấy dữ liệu > Cần phải bọc các component vào trong "Provider".

# Lấy và cập nhật giá trị của state từ "Store" : src/App.js

    - Thực hiện lấy và cập nhật giá trị của "state" ở store về "component".

    - Thực hiện tương tác "store" trong component "App.js".

    - Để kết nối với Redux trong component React : Cần phải import hàm kết nối "connect".

    - Có 2 thao tác cực kỳ quan trọng giúp thao tác với "state" :
        - mapStateToProps : giúp chuyển "state" sanng thành "props" sử dụng trong "component".
        - mapDispatchToProps : giúp chuyển "dispatch" trong redux thành "props".
            --- Thực hiện dispatch action "actAddNote"
            --- Chỉ cần gọi : props.addNote()
