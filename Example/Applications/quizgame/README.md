# Xây dựng một trò chơi QuizGame đơn giản bằng ReactJS.

    - Trò chơi sẽ có khả năng hiển thị các câu hỏi, các lựa chọn và cập nhật điểm số của người chơi khi họ trả lời đúng.

    - Sử dụng Hook {useState} để quản lý các props và state.

    - Trước tiên, tạo mới 1 project và đặt tên cho nó là "quizgame" > Command Prompt > Nhập lệnh :
        ~> npx create-react-app quizgame

    - Sau khi cài đặt "Create-React-App" thành công > Mở folder "src" ra.

    - Chúng ta làm việc với các file chính :

        > QuizGame.js
        > Question.js
        > QuizGame.css
        > App.js

    - Tiến hành chỉnh sửa code.
    - Sau khi tất cả mọi thứ hoàn tất => Khởi chạy dự án bằng lệnh : npm start

# Cách triển khai dự án :

## Tạo Component "QuizGame.js" : (Component chính của trò chơi).

- Tại "src" > Tao thư mục "components" > Tạo Component "QuizGame.js".

* B1 : Import thư viện React và Hook cần sử dụng.

* B2 : Tại component "QuizGame" > Sử dụng "useState()" để khởi tạo trạng thái.

  > Trạng thái "score" để theo dõi điểm số > Khởi tạo giá trị là 0.
  > Trạng thái "currentQuestionIndex" hiển thị câu hỏi hiện tại > Khởi tạo giá trị là 0.

* B3 : Khởi tạo 1 mảng "questions" > Bên trong chứa nhiều objects gồm các thuộc tính : question, options, currentAnswer.

* B4 : Viết hàm xử lý đáp án đúng.

  > Nếu đáp án đúng > +1 Điểm.
  > Cập nhật sang câu hỏi tiếp theo.

* B5 : Sử dụng toán tử 3 ngôi để kiểm tra và hiển thị giao diện trả về JSX.
  - Tiến hành truyền xuống cho component "Question" các thuộc tính sau :
    > question
    > options
    > currentAnswer
    > onAnswer

## Tạo Component "Question.js " : (Component hiển thị câu hỏi và lựa chọn).

- Mở file "src/components/" > Tạo Component "Question.js".

* B1 : Import thư viện React là Hook cần sử dụng.

* B2 : Tại component "Question" > Nhận các props được truyền xuống từ "Component chính" : {question, options, currentAnswer, onAnswer}.

* B3 : Sử dụng "useState()" để tạo trạng thái.

  > Trạng thái "selectedOption" để theo dõi câu trả lời được chọn > Khởi tạo là giá trị null.

* B4 : Viết hàm xử lý "Chọn đáp án" và nhấn nút "Submit".

  > handleOptionSelect : Cập nhật option được chọn.
  > handleSubmit : Xử lý khi người chơi chọn 1 lựa chọn > Nếu đúng, thực hiện callback "onAnswer" và truyền giá trị "true".

* B5 : Trả về JSX và hiển thị component "Question".

## Tạo file CSS "QuizGame.css" : Tùy chỉnh giao diện.

## Tại file "App.js" : (Component chạy dự án)

- Import thư viện React và Components để sử dụng.
- Gọi đến Component "QuizGame.js".
