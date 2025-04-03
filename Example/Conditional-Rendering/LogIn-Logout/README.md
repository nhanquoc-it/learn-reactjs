# Xây dựng ứng dụng đăng nhập / đăng xuất

## Chúng ta sẽ tạo một ứng dụng sao cho:

        + Nếu chưa login (hoặc logout) thì sẽ hiển thị "Please sign in".
        + Nếu đã login thì sẽ hiển thị "Welcome back!".

## Ta lần lượt thực hiện các bước sau:

    + Tạo 2 component :
        - UserGreeting : hiển thị nội dung khi login.
        - GuestGreeting : hiển thị nội dung khi chưa login hoặc logout.

    + Tạo 1 function Greeting điều khiển 2 component User và Guess tùy theo điều kiện user có login hay không.

    + Tạo 2 component hiện thị nội dung cho button:
        - LogoutButton : khi đã login.
        - LoginButton : khi chưa login hoặc logout.

    + Tạo 2 function : "handleLoginClick" và "handleLogoutClick" để xử lý click button.

    + Việc còn lại cuối cùng là tiến hành xử lý câu điều kiện bên trong phần render để trả đúng trạng thái user có login hay không.
