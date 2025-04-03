# Xây dựng ứng dụng thời tiết đơn giản sử dụng ReactJS.

- Sử dụng Call API, Hook {useState, useEffect} và tạo component, quản lý props và state.

- Trước tiên, tạo mới 1 project và đặt tên cho nó là "weather" > Command Prompt > Nhập lệnh :

  > npx create-react-app weather

  - Sau khi cài đặt "Create-React-App" thành công > Mở folder "src" ra.

  - Làm việc với các file chính :

    > WeatherApp.js
    > WeatherApp.css
    > App.js
    > App.css

  - Tiến hành chỉnh sửa code.

  - Cài đặt Axios (thư viện giúp gọi API) :
    > npm install axios
  - Lấy API Key từ "OpenWeatherMap".
  - Sau khi tất cả mọi thứ hoàn tất > Khởi chạy dự án bằng lệnh :
    > npm start

# Đăng ký và lấy khóa API :

    - Truy cập trang web > https://openweathermap.org/api
    - Đăng ký tài khoản (nếu bạn chưa có).
    - Sau khi đăng ký và đăng nhập > Vào trang "API keys" > Tạo một khóa API mới.

    - Khi bạn đã có khóa API > Thay thế "YOUR_API_KEY" trong URL của bạn với khóa API thực tế bạn đã lấy được.

    - Vào Tab "API" > Chọn API có tên "Current Weather Data" > API doc > API call > copy URL.

# Cách triển khai dự án :

## Tạo Component "WeatherApp.js" :

- Mở file "src" > Tạo folder "components" > Tạo Component "WeatherApp.js".

* B1 : Import thư viện React và Hook cần sử dụng.

* B2 : Tại component "WeatherApp" > Sử dụng "useState()" để khởi tạo trạng thái.

  > Trạng thái "city" hiển thị tên thành phố > Khởi tạo là chuỗi rỗng.
  > Trạng thái "temperature" hiển thị nhiệt độ > Khởi tạo là null.

* B3 : Sử dụng "useEffect()" để thực hiện Call API :

  > Hàm "fetchData()" để gửi yêu cầu API và cập nhật trạng thái nhiệt độ.
  > Sử dụng : async...await , try...catch > Để xử lý dữ liệu từ API trả về.
  > [city] : Hook này chỉ chạy khi state này thay đổi.

* B4 : Trả về JSX để hiển thị component "WeatherApp".

  > Thẻ <input> nhận props value={city} > Bắt sự kiện onChange > Cập nhật lại State.
  > Sử dụng toán tử 3 ngôi để kiểm tra nhiệt độ xem có trả về giá trị null hay không?

## Tạo File CSS "WeatherApp.css" : Định dạng CSS sao cho đẹp mắt.

## Tại file "App.js" :

- Import thư viện React và Components để sử dụng.
- Gọi đến Component "WeatherApp.js".
