# Simple List - Hiển thị một danh sách các phần tử, mỗi phần tử được gán một "key" duy nhất.

- Bước 1 : Tạo một ứng dụng React mới.

  > npx create-react-app simple-list
  > cd simple-list

- Bước 2 : Tạo component "SimpleList".

  > Trong thư mục "src/components/"
  > Tạo component có tên "SimpleList.js"
  > Khởi tạo 1 Array : data (giá trị là các Item 1 --> 5).

  > Render JSX hiển thị giao diện > Thêm thẻ <ul>
  > Bên trong <ul> gọi đến "data" > Sử dụng "map()" để lặp qua các phần tử trong mảng > Trả về các phần tử trong thẻ <li>.

  > key=index

- Bước 3 : Tạo file CSS cho "SimpleList" (tùy chọn).

- Bước 4 : Sử dụng component "SimpleList" trong App.

  > Trong file "App.js"
  > Import Component.
  > Gọi đến Component bên trong hàm "return()".

- Bước 5 : Chạy ứng dụng React.
  > npm start

# Todo List - Hiển thị một danh sách các công việc cần làm.

- Tạo component "TodoList".
- Tạo mảng "todoItems" gồm các Object bên trong bao gồm :

  > id : 1 -> 4
  > text : "Tên task"
  > completed: false, true

- Sử dụng "map()" lặp qua mảng "todoItems".

  > Bên trong <li> thiết lập "className"
  > Trỏ đến "completed" > Sử dụng toán tử 3 ngôi xét điều kiện.
  > True ---> completed
  > False ---> incomplete

  > key=todo.id

# Product List - Hiển thị danh sách các sản phẩm.

- Tạo component "ProductList".
- Tạo mảng "products" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > name : "Tên sản phẩm"
  > price: 100 ---> 1000

- Sử dụng "map()" lặp qua mảng "products".
  > key=product.id
  > Hiển thị : name, price

# User List - Hiển thị danh sách người dùng.

- Tạo component "UserList".
- Tạo mảng "users" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > name: "Tên user"
  > age : 25 ---> 40

- Sử dụng "map()" lặp qua mảng "users".
  > key=user.id
  > Hiển thị : name, age

# Blog Post List - Hiển thị danh sách các bài viết trên blog.

- Tạo component "BlogPostList".
- Tạo mảng "blogPosts" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > title: "Tiêu đề bài viết"
  > content: "Nội dung bài viết"

- Sử dụng "map()" lặp qua mảng "blogPosts".
  > key=blogPost.id
  > Hiển thị : title, content

# Comment List - Hiển thị danh sách các bình luận dưới một bài viết.

- Tạo component "CommentList".
- Tạo mảng "comments" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > author: "Tên tác giả"
  > content: "Nội dung bình luận"

- Sử dụng "map()" lặp qua mảng "comments".
  > key=comment.id
  > Hiển thị : author, content

# Image Gallery List - Hiển thị danh sách các hình ảnh trong bộ sưu tập.

- Tạo component "ImageGalleryList".
- Tạo mảng "images" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > src: "url hình ảnh"
  > alt: "Tên hình ảnh"

- Sử dụng "map()" lặp qua mảng "images".
  > key=image.id
  > Hiển thị : src, alt

# Recipe List - Hiển thị danh sách các công thức nấu ăn.

- Tạo component "RecipeList".
- Tạo mảng "recipes" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > name: "Tên món ăn"
  > ingredients: ["Các thành phần để chế biến"]

- Sử dụng "map()" lặp qua mảng "recipes".
  > key=recipe.id
  > Hiển thị : name
  > Tiếp tục, sử dụng "map()" lặp qua mảng "ingredients".
  > key=index
  > Hiển thị : ingredient

# Contact List - Hiển thị danh sách các liên lạc.

- Tạo component "ContactList".
- Tạo mảng "contacts" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > name : "Tên liên hệ"
  > phone : "Số-điện-thoại"
  > email : "email@lienhe"

- Sử dụng "map()" lặp qua mảng "contacts".
  > key=contact.id
  > Hiển thị : name, phone, email

# Event List - Hiển thị danh sách sự kiện trong lịch.

- Tạo component "EventList".
- Tạo mảng "events" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > title : "Tên sự kiện"
  > date : "năm-tháng-ngày"
  > time : "giờ:phút AM?PM"

- Sử dụng "map()" lặp qua mảng "events".
  > key=event.id
  > Hiển thị : title, date, time

# Movie List - Hiển thị danh sách các bộ phim.

- Tạo component "MovieList".
- Tạo mảng "movies" gồm các Object bên trong bao gồm :

  > id: 1 ---> 4
  > title : "Tên phim"
  > director : "Tên tác giả"
  > year : 1994 ---> 2008

- Sử dụng "map()" lặp qua mảng "movies".
  > key=movie.id
  > Hiển thị : title, director, year
