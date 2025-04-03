# Button Click - Xử lý sự kiện khi người dùng nhấn vào một nút.

    + Tại "src/components/" > Tạo component "ButtonClick.js".

    + Bên trong component này > Khởi tạo một hàm "handleClick()" : Xử lý sự kiện khi người dùng nhấn vào <button>.

    + return() : Gọi đến event "onClick" và truyền hàm đó vào.

    + Tại file "App.js" > Import và gọi đến component "ButtonClick" để sử dụng.

# Toggle Button - Chuyển đổi trạng thái giữa "ON" và "OFF" khi người dùng nhấn vào nút.

    + Tạo component "ToggleButton.js".
    + useState : Sử dụng "useState" hook để tạo một biến state.
        > isOn : là trạng thái của nút, đại diện cho trạng thái "ON" hoặc "OFF" > Giá trị khởi tạo là "false".

    + handleToggle() : Hàm này được gọi khi nút được nhấn > Nó sử dụng "setIsOn" để đảo ngược giá trị của "isOn" > Chuyển đổi giữa "ON" và "OFF".

    + Render JSX : Component hiển thị một nút với văn bản "ON" hoặc "OFF" tùy thuộc vào giá trị của "isOn".

    + CSS Class : Tùy thuộc vào giá trị của "isOn" > Thay đổi màu sắc và kiểu hiển thị nút.

# Input Change - Hiển thị giá trị ngay lập tức khi người dùng nhập vào ô <input>.

    + Tạo component "InputChange.js" > Sử dụng hook "useState" để tạo state.
        > inputValue : Theo dõi sự kiện thay đổi của ô nhập liệu (input) và hiển thị giá trị người dùng nhập vào > Giá trị khởi tạo "chuỗi rỗng".

    + Hàm "handleInputChange()" : xử lý cập nhật state khi người dùng nhập liệu vào ô "input".

    + return() : Trong thẻ <input /> Truyền vào các thuộc tính :
        -- value > Truyền vào state "inputValue".
        -- onChange > Truyền vào hàm "handleInputChange()".

# Mouse Hover - Theo dõi khi con trỏ chuột di chuyển vào phần tử.

    + Tạo component "MouseHover.js".
    + Hàm "handleMouseOver()" : Xử lý sự kiện khi con trỏ chuột di chuyển vào phần tử.
    + return() : Gọi đến sự kiện "onMouseOver" và truyền vào hàm đó.

# Form Submission - Xử lý sự kiện khi người dùng nhập liệu và submit form.

    + Tạo component "FormSubmission.js" > Sử dụng hook "useState" để tạo state.
        > formData : theo dõi người dùng nhập thông tin trên ô input > Khởi tạo là object : username, email > Điều là "chuỗi rỗng".

    + handleChange() :  Hàm này xử lý khi dữ liệu thay đổi khi người dùng nhập liệu trên ô input.

    + handleSubmit() : Hàm này xử lý khi người dùng nhấn nút "Submit" trên Form.

# Double Click - Xử lý sự kiện khi ngời dùng thực hiện nhấn 2 lần trên một nút.

    + Tạo component "DoubleClick.js".
    + Hàm "handleDoubleClick()" : Hàm xử lý khi người dùng nhấn đúp chuột.
    + Render JSX để hiển thị phần tử cho component.
    + Gọi đến sự kiện "onDoubleClick" > Truyền vào hàm.

# Key Press - Xử lý sự kiện nhấn phím từ người dùng.

    + Tạo component "KeyPress.js".
    + Hàm "handleKeyPress()" : Hàm xử lý khi người dùng nhấn phím.
    + Render JSX hiển thị ô nhập liệu "input" > Gọi đến sự kiện "onKeyPress" > Truyền vào hàm.

# Image Click - Xử lý sự kiện khi người dùng nhấn vào một hình ảnh.

    + Tạo component "ImageClick.js".
    + Hàm "handleImageClick()" : Hàm xử lý khi người dùng nhấn vào hình ảnh.
    + Render JSX hiển thị hình ảnh > Gọi đến sự kiện "onClick" > Truyền vào hàm.
    + Lưu hình ảnh vào thư mục "public".

# Context Menu - Xử lý sự kiện khi người dùng chuột phải vào một phần tử.

    > Hiển thị lựa chọn "Copy", "Paste" và "Cut".

    + Tạo component "ContextMenu.js".
    + Hàm "handleContextMenu()" : Hàm xử lý khi người dùng chuột phải.
    + contextMenu : hiển thị context menu tại vị trí chuột.

    + Render JSX để hiển thị phần tử với sự kiện chuột phải > Gọi đến sự kiện "onContextMenu" > Truyền vào hàm.

# Drag and Drop - Thực hiện chức năng kéo thả.

    + Tạo component "DragAndDrop.js".
    + handleDragStart() : Hàm này được gọi khi người dùng bắt đầu kéo một phần tử.

    > e.dataTransfer.setData() : Thiết lập dữ liệu mà sẽ được truyền trong quá trình kéo.

    > text/plain : Định dạng kiểu dữ liệu khi người dùng thả phần tử thì dữ liệu này có thể được truy cập.

    + handleDragOver() : Hàm này cho phép một phần tử nhận dữ liệu khi đang ở trạng thái kéo.

    + handleDrop() : Hàm này được gọi khi người dùng thả phần tử đã kéo.

    > clientX, clientY : Lưu trữ vị trí của con trỏ chuột tải thời điểm thả.

    + Render JSX hiển thị giao diện > Gọi đến các sự kiện: onDragStart, onDragOver, onDrop > Truyền vào hàm tương ứng.

# Link Click - Xử lý sự kiện khi người dùng nhấn vào thẻ <a>.

    + Tạo component "LinkClick.js".
    + handleClick() : Hàm này được gọi khi người dùng nhấn vào thẻ <a>.
    + return() : Gọi đén sự kiện "onClick" > Truyền vào hàm.

# Resize Window - Theo dõi sự kiện thay đổi kích thước cửa sổ và hiển thị thông tin.

    + Tạo component "ResizeWindow.js".
    + Sử dụng hook "useState" > Khởi tạo state.
    > windowSize : Theo dõi thay đổi kích thước phần tử trên DOM > Khởi tạo là "object" với 2 thuộc tính : width, height.

    + handleResize() : Hàm này được gọi khi người dùng thay đổi kích thước của trình duyệt.

    + useEffect() : Thực hiện side effect (Lắng nghe & Xóa) sự kiện trong DOM của "window".
        -- Lắng nghe : addEventListener() > mount
        -- Xóa : removeEventListener() > unmount

    + Dependencies là [] : useEffect sẽ chỉ chạy một lần khi component được mount.

    + Render JSX để hiển thị giao diện kích thước sau khi thay đổi trình duyệt > Hiển thị width, height.

# Hover Effect - Xử lý sự kiện hover (di chuột) qua phần tử để tạo hiệu ứng.

    + Tạo component "HoverEffect.js".
    + Sử dụng hook "useState" > Khởi tạo state.
    > isHovered : theo dõi trạng thái khi người dùng di chuột qua phần tử > Giá trị khởi tạo là "false".

    + handleHover() : Hàm này được gọi khi người dùng di chuyển con trỏ chuột vào hoặc rời khỏi phần tử > Đảo ngược trạng thái của biến "isHovered".

    + return() : Gọi đến các sự kiện di chuột qua "onMouseOver" hoặc rời khỏi "onMouseOut" phần tử > Truyền vào hàm.

# Dynamic Button - Xử lý sự kiện quản lý trạng thái của nút.

    + Tạo component "DynamicButton.js".
    + Sử dụng hook "useState" > Khởi tạo state.
    > buttonState : Đại diện cho trạng thái của nút > Giá trị khởi tạo "false".

    + handleClick() : Hàm này được gọi khi người dùng nhấn vào nút <button> và tiến hành cập nhật state.

    + return() : Gọi sự kiện "onClick" > Truyền vào hàm.

# Password Strength Checker - Đánh giá độ mạnh/yếu của mật khẩu.

    + Tạo component "PasswordStrengthChecker.js".
    + Sử dụng hook "useState" > Khởi tạo state.
    > password : Đại diện cho mật khẩu mà người dùng nhập vào > Giá trị khởi tạo "chuỗi rỗng".

    + Hàm "calculateStrength()" : Hàm này sẽ được gọi để đánh giá mức độ mạnh / yếu của mật khẩu.
        > Options :
        -- hasUpperCase : Chữ hoa.
        -- hasLowerCase : Chữ thường.
        -- hasDigit : Chữ số.
        -- hasSpecialChar : Ký tự đặc biệt.

    + Kiểm tra mức độ của mật khẩu :
        + Mật khẩu >= 8 ký tự (đầy đủ options trên) => Mạnh.
        + Mật khẩu >= 6 ký tự (có 1 trong những options trên) => Trung bình.
        + Cuối cùng => Yếu.

    + handlePasswordChange() : Hàm này xử lý sự thay đổi của mật khẩu khi người dùng nhập vào ô "input" > Cập nhật state.

    + Render JSX hiển thị giao diện cho component > Gọi đến thuộc tính "value" và sự kiện "onChange" > Gọi đến hàm "calculateStrength()".

# Copy To Clipboard - Chức năng sao chép nội dung của một đoạn văn bản vào clipboard.

    + Tạo component "CopyToClipboard.js".
    + Sử dụng hook "useRef" > Tạo 1 tham chiếu "ref".

        > textRef : Là 1 biến chứa object tham chiếu đến 1 phần tử DOM > input hoặc textarea > Khởi tạo là "null".

    + handleCopy() : Hàm này được gọi khi người dùng nhấn vào nút "Copy".

        > textRef.current : kiểm tra xem giá trị hiện tại có phải là một phần tử DOM hợp lệ hay không.

        > select() : Chọn toàn bộ văn bản (hợp lệ).

        > document.execCommand('copy') : để sao chép văn bản vào clipboard.

    + Cuối cùng, hiện thông báo copy thành công.

    + Render JSX hiển thị giao diện component > Tạo 1 <textarea> truyền vào thuộc tính "ref" là biến "textRef" > Trạng thái "readOnly".

    + Gọi sự kiện "onCLick" > Truyền vào hàm.

# Scroll Event - Theo dõi sự kiện cuộn chuột.

    + Tạo component "ScrollEvent.js".
    + Sử dụng hook "useEffect()" > Tạo các sự kiện thao tác với các phần tử trên DOM.

        >  handleScroll() : Hàm này được gọi khi người dùng cuộn chuột.
        > window.scrollY : vị trí khi người dùng cuộn chuột từ trên xuống.

        > Thực hiện lắng nghe sự kiện "scroll" > mount.
        > Xóa sự kiện "scroll" > unmount.

    + Dependencies là [] : chỉ chạy 1 lần khi component được "mount".

# Auto Complete - Hiện tùy chọn phù hợp khi người dùng nhập liệu.

    + Tạo component "Autocomplete.js".
    + Sử dụng hook "useState()" > Khởi tạo state.
        > inputValue : theo dõi sự thay đổi giá trị nhập ở <input> > Khởi tạo là "chuỗi rỗng".

        > options : Hiện các tùy chọn phù hợp khi người dùng nhập liệu > Khởi tạo là "Array" chứa các phần tử : Apple, Banana, Cherry, Date, Grape.

    + handleInputChange() : Hàm này được gọi khi giá trị ở "input" thay đổi > Cập nhật state "inputValue".

    + handleOptionClick() : Hàm này được gọi khi người dùng chọn các "options" > Cập nhật state cho "inputValue".

    + filteredOptions() : Hàm này sẽ lặp qua các mảng "options" > Sử dụng "filter()".

    + Render JSX hiển thị giao diện component.
        > Thẻ <input /> : Truyền vào "value" và gọi sự kiện "onChange".

        > Sử dụng "map()" : Lặp qua các phần tử trong mảng "filteredOptions" > Trả về các "option" và gọi đến sự kiện "onClick".
