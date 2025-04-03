# React-DOM là gì ?

    - Là cầu nối giữa React và DOM.
    - Khi viết ứng dụng với React, các component React sẽ được "biên dịch" thành các phần tử HTML thông qua React-DOM.
    - Giúp quản lý và cập nhật UI một cách hiệu quả.

# Tại sao phải sử dụng React-DOM?

    - Cập nhật các phần tử DOM cần thiết, giúp ứng dụng nhanh hơn và ít tốn tài nguyên hơn.
    - Dễ dàng quản lý các thay đổi của UI khi trạng thái (state) hoặc dữ liệu (props) thay đổi.
    - Tương thích với hầu hết mọi trình duyệt.

# Render UI :

- Thêm <script> bên trong thẻ <head> :
<script
    src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    crossorigin
></script>

- Render code HTML sử dụng React-DOM:
<div class="post-item">
    <h2 title="Học React tại React org">Học ReactJS</h2>
    <p>Học ReactJS từ cơ bản đến nâng cao</p>
</div>

- Render UI with React 17 :
  ReactDOM.render(reactElement, container)

- Render UI with React 18 :
  ReactDOM.createRoot(container)
