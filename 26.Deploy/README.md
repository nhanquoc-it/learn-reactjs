# Deploy ứng dụng ReactJS lên Heroku :

# 1. Cài đặt phần mềm :

    - Đối vói Window và MacOS :
        ---- Download : Git (https://git-scm.com/downloads)
        ---- Download : Heroku CLI (https://devcenter.heroku.com/articles/heroku-cli)

    - Đối với Ubuntu, sử dụng các lệnh dưới đây :
        ~> sudo apt install git
        ~> sudo snap install --classic heroku

# 2. Chuẩn bị dự án ReactJS :

    1. Kiểm tra dự án ReactJS : Đảm bảo dự án có thể chạy ổn trên local, bằng lệnh :
        ~> npm start

    2. Build dự án ReactJS : Trước khi deploy > cần phải build dự án > Tạo ra các file tĩnh sẵn sàng để triển khai lên Heroku.
        ~> npm run build

    * Lệnh này sẽ tạo ra 1 thư mục "build/" chứa các file tĩnh.

# 3. Đưa ứng dụng ReactJS lên Heroku :

    - Tiến hành tạo tài khoản Heroku.
    - Truy cập vào "dashboard" > Tạo 1 app mới.
    - App name : sẽ là "subdomain" của bạn.
    - URL sẽ có dạng là : [appname].herokuapp.com
    - Choose a region : Tùy chọn vị trí máy chủ.
    - Sau khi đã tùy chọn các bước, tiến hành click vào "Create App" để hoàn tất.

    * Hoặc có thể sử dụng 1 câu lệnh duy nhất để tạo một ứng dụng trên Heroku :
        ~> heroku create [ten-app]

# 4. Cấu hình dự án để chạy trên Heroku :

## Sử dụng Express.js : Thêm thủ công

    + B1 : Cài đặt Express > Để tạo server Node.js
        ~> npm install express

    + B2 : Tạo một file "server.js" > Trong thư mục gốc của dự án > Cùng cấp với "package.json".

    + B3 : Cập nhật "package.json" > Để Heroku biết cách chạy ứng dụng.
        ---- heroku-postbuild : đảm bảo rằng Heroku sẽ chạy "npm run build" sau khi clone dự án lên.

## Sử dụng Buildpacks : Thêm tự động

    - Đối với app React khởi tạo bởi lệnh: create-react-app.
    - Trước khi đẩy "source code" lên app > phải thêm "buildpacks" cho nó.

    - Vào "Settings" > Buildpacks > Add Buildpacks > Điền vào đường dẫn.
        https://github.com/mars/create-react-app-buildpack.git

    - Buildpacks : sẽ chứa các câu lệnh để biên dịch ứng dụng, nó sẽ được khởi chạy mỗi khi ứng dụng được thiết lập.

    * Hoặc chạy câu lệnh để thêm "buildpack" vào ứng dụng Heroku :
        ~> heroku buildpacks:add https://github.com/mars/create-react-app-buildpack.git

# 5. Đẩy souce code lên Heroku :

    - Đăng nhập tài khoản heroku trên máy > Mở terminal > Gõ lệnh :
        ~> heroku login

    - Truy cập đến dự án cần deploy :
        ~> cd project-react

    - Khởi tạo git và chỉ định remote tới app trên heroku:
        ~> git init
        ~> heroku git remote -a [ten-app]

    - Tiếp theo, chúng ta sẽ deploy app lên heroku bằng cách push tới branch "master" của heroku :
        ~> git add .
        ~> git commit -a "first deploy"
        ~> git push heroku master

    - Sau khi hoàn tất, heroku sẽ cài đặt ứng dụng ReactJS tự động.

# 6. Kiểm tra và debug :

    - Truy cập ứng dụng sau khi triển khai thành công :
        ~> heroku open

    - Để theo dõi ứng dụng theo thời gian thực > Gõ lệnh :
        ~> heroku logs --tail

    - Chỉnh sửa các biến môi trường của dự án :
        Settings > Config Vars
