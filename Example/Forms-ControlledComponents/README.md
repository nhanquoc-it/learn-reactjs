# Basic Form - Tạo Form đơn giản

- Bước 1 : Tạo một ứng dụng React.

  > npx create-react-app react-form
  > cd react-form

- Bước 2 : Tạo component BasicForm.

* Tại "src/component/" > Tạo mới component "BasicForm.js".
* Sử dụng hook "useState()" > Khởi tạo state.

  > formData : theo dõi trạng thái các trường nhập liệu trên form.
  > Giá trị khởi tạo là 1 Object : name, email > Chuỗi rỗng.

* handleChange() : Hàm xử lý khi có sự thay đổi trên các trường nhập liệu.
* handleSubmit() : Hàm xử lý khi nút "Submit" được nhấn.

- Bước 3 : Tạo 1 file CSS mới có tên là "BasicForm.css".

- Bước 4 : Tại file "App.js" > Sử dụng component "BasicForm".

- Bước 5 : Chạy ứng dụng React.
  > npm start

# Login Form - Form đăng nhập

- Tạo component "LoginForm.js".
- Làm tương tự như trên.
  > State : loginData
  > Giá trị khởi tạo là 1 Object : name, password > Đều là chuỗi rỗng.

# Registration Form - Form đăng ký

- Tạo component "RegistrationForm.js".
- Làm tương tự như trên.
  > State : registerData
  > Giá trị khởi tạo là 1 Object : name, email, password > Đều là chuỗi rỗng.

# Search Bar - Thanh tìm kiếm

- Tạo component "SearchBar.js".
- Làm tương tự như trên.
  > State : keyword
  > Giá trị khởi tạo : Chuỗi rỗng.

# Add Todo Form - Thêm công việc mới

- Tạo component "TodoForm.js".
- Làm tương tự như trên.
  > State : todo
  > Giá trị khởi tạo : Chuỗi rỗng.

# File Upload - Tải file

- Tạo component "FileUpload.js".
- Làm tương tự như trên.

  > State : selectedFile.
  > Giá trị khởi tạo : null.

# Password Change Form - Thay đổi mật khẩu

- Tạo component "PasswordChangeForm.js".
- Làm tương tự như trên.
  > State : currentPassword, newPassword, confirmPassword.
  > Giá trị khởi tạo : Chuỗi rỗng.

# Dynamic Form Fields - "Thêm" hoặc "Xóa" dữ liệu cho ô input.

- Tạo component "DynamicFormFields.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State : fields
  > Giá trị khởi tạo : 1 array gồm các object bên trong bao gồm : id=1, value="".

- handleChange() : Để cập nhật giá trị của một trường trong mảng "fields".

  > Nhận vào 2 tham số : id, value.
  > Sử dụng "map()" : Lặp qua tất cả các trường trong mảng.
  > Nếu "id" của field trùng với "id" được truyền vào > Sử dụng "spread" để sao chép lại > Thêm giá trị cần thay đổi là "value".
  > Ngược lại trả về "field".

- handleAddField() : Để thêm một trường mới vào mảng "fields".

  > fields.length + 1 : Tạo ra một id duy nhất bằng cách cộng thêm vào số lượng trường hiện tại trong mảng.
  > Thiết lập giá trị "value" > chuỗi rỗng.
  > Cập nhật state > Sử dụng "spread" sao chép tất cả trường cữ > Thêm "newField" vào cuối.

- handleRemoveField() : Để loại bỏ một trường khỏi mảng "fields".

  > Sử dụng "filter()" lặp qua mảng "fields" > Những trường có "id" khác với "id" được truyền vào > id đó sẽ bị loại bỏ.
  > Cập nhật state > Truyền vào "deletedFields".

# Currency Converter - Nhập "số tiền" quy đổi ra "Đơn vị tiền tệ".

- Tạo component "CurrencyConverter.js".
- Sử dụng hook "useState()" > Khởi tạo state.

  > State : amount > Khởi tạo chuỗi rỗng
  > State : currency > Khởi tạo là "USD"

- handleAmountChange() : Hàm xử lý cập nhật sự thay đỏi số tiền "amount".
- handleCurrencyChange() : Hàm xử lý cập nhật sự thay đổi đơn vị tiền tệ "currency".
- handleSubmit() : Hàm xử lý khi nhấn nút "Chuyển đổi".

# Date Picker - Chọn ngày tháng và hiển thị ngày đã chọn.

- Tạo component "DatePicker.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State : selectedDate
  > Giá trị khởi tạo : CHuỗi rỗng.

- handleDateChange()
- handleSubmit()

# Autocomplete Search - Hiển thị danh sách dựa trên từ khóa nhập của người dùng.

- Tạo component "AutocompleteSearch.js"
- Sử dụng "useState()" > Khởi tạo state.

  > State : keyword ---> Giá trị khởi tạo : Chuỗi rỗng.
  > State : options ---> Giá trị khởi tạo : 1 Mảng bao gồm các phần tử : "ReactJS", "Vue.js", "Angular", "Node.js", "Express.js", "MongoDB", "JavaScript", "TypeScript", "HTML", "CSS".

  > State : filteredOptions ---> Giá trị khởi tạo : Mảng rỗng.

- handleKeywordChange() : Hàm xử lý sự thay đổi nhập liệu trên ô <input>.

  > Cập nhật state "keyword".
  > Sử dụng "filter()" lọc ra mảng "options"
  > Cập nhật state "options".

- handleOptionClick() : Xử lý khi người dùng nhấn chọn các <option>.
  > Cập nhật state "keyword".
  > Thiết lập lại giá trị ban đầu cho "filteredOptions".

# Survey Form - Thu thập thông tin khảo sát từ người dùng.

- Tạo component "SurveyForm.js"
- Sử dụng "useState()" > Khởi tạo state.

  > State : formData
  > Giá trị khởi tạo : 1 Object bao gồm các thuộc tính (name, email, age, feedback) > Đều là chuỗi rỗng.

- handleChange().
- handleSubmit().

# Multi Step Form - Tạo form thu thập thông tin qua nhiều bước.

- Tạo component "MultiStepForm.js"
- Sử dụng "useState()" > Khởi tạo state.

  > State : step ---> Giá trị khởi tạo là 1.
  > State : formData ---> Giá trị khởi tạo là 1 Mảng
  > [firstName, lastName, email, password, address, city, state, zip] > Đều là chuỗi rỗng.

- handleChange() : Hàm xử lý sự thay đổi trên form.
- nextStep() : Tăng "step" lên 1.
- prevStep() : Giảm "step" xuống 1.
- handleSubmit() : Hàm xử lý khi nhấn "Hoàn Thành".
- renderForm() : Hàm này xử lý các "step" các form > Sử dụng "switch...case" để xét các "step" > Mặc định là "null".

# Color Picker - Chọn màu và hiển thị màu đã chọn.

- Tạo component "ColorPicker.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State : color
  > Giá trị khởi tạo là "#ffffff".

- handleChange().
- handleSubmit().

# Address Form - Form nhập thông tin địa chỉ người dùng.

- Tạo component "AddressForm.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State : formData.
  > Giá trị khởi tạo : 1 Object gồm các thuộc tính (address, city, district, postalCode) > Đều là chuỗi rỗng

- handleChange().
- handleSubmit().

# Survey Poll - Tạo cuộc khảo sát cho phép người dùng bình chọn các tùy chọn.

- Tạo component "SurveyPoll.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State :options.
  > Giá trị khởi tạo : 1 Array gồm các Object bên trong (id, text, votes)

- handleVote() : Hàm này được gọi khi người dùng click chọn các "options" > Cập nhật các "options" và tăng "votes" lên 1.

# Time Tracking Form - Nhập liệu về thời gian bắt đầu, kết thúc và mô tả công việc.

- Tạo component "TimeTrackingForm.js".
- Sử dụng "useState()" > Khởi tạo state.

  > State : startTime, endTime, description.
  > Giá trị khởi tạo : Chuỗi rỗng.

- handleStartTimeChange() : Hàm xử lý chọn thời gian bắt đầu.
- handleEndTimeChange() : Hàm xử lý thời gian kết thúc.
- handleDescriptionChange() : Hàm xử lý về mô tả công việc.
- handleSubmit() : Hàm xử lý khi người dùng nhấn "Submit".

# Quiz Form - Form hiển thị câu hỏi và cho phép người dùng nhập câu trả lời.

- Tạo component "QuizForm.js".
- Sử dụng "useState()" > Khởi tạo state.
  > State : answers
  > Giá trị khởi tạo : 1 Object gồm (question1, question2, question3) > Đều là chuỗi rỗng.

- handleAnswerChange() : Hàm xử lý thay đổi câu trả lời.
- handleSubmit() : Hàm xử lý nộp bài kiểm tra.

# Reservation Form - Form đặt hàng trong nhà hàng.

- Tạo componnet "ReservationForm.js".
- Sử dụng "useState()" > Khởi tạo state.
    > State : reservationInfo.
    > Giá trị khởi tạo : 1 Object gồm (name, phoneNumber, numberOfPeople, reservationTime) > Đều là chuỗi rỗng.
  
- handleInputChange() : Hàm xử lý thay đổi thông tin đặt bàn.
- handleSubmit() : Hàm xử lý nộp biểu mẫu.
