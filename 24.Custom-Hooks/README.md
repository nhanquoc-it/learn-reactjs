# Custom Hooks là gì?

    - Là những hooks mà do lập trình viên tự định nghĩa.
    - Mục đích thực hiện 1 chức năng nào đó.
    - Được sử dụng để chia sẻ logic giữa các components.

# Cách đặt tên 1 Custom Hooks : use + nameHooks

    - Phải có từ khóa "use" ở đầu.
    - Ví dụ : useClick(), useClock(), useQuery(),....

# Khi nào dùng Custom Hooks :

    - Trong trường hợp ta muốn tách biệt các phần tử xử lý logic riêng ra khỏi UI, hay chia sẻ logic giữa các component.

# Ví dụ thực tế :

    - Giả sử trong trường hợp muốn xây dựng 2 component đều có 1 chức năng là "Hiển thị ngày giờ hiện tại" nhưng khác nhau ở giao diện.

        > Thông thường, chúng ta sẽ viết tất cả các logic xử lý giờ ở trong 1 component.
        > Rồi lại lặp lại logic này ở component thứ 2.
        > Như vậy, nó sẽ không tối ưu một chút nào.
        > Nếu mà có 10 cái đồng hồ thì cần phải lặp lại logic này ở mỗi components. => Không cần thiết, mất thời gian.
        > Giải pháp ở đây là sử dụng : Custom Hooks.

# Cách xây dựng 1 custom hooks :

    - Rất đơn giản, chỉ cần tách phần xử lý logic ra 1 Function.

    - Trong thư mục "src" > Tạo 1 thư mục "hooks" > Thư mục này sẽ chứa tất cả các "custom hooks".

    - Khi muốn sử dụng hooks này > Chỉ cần import nó vào component > Gọi như các hooks thông thường.
