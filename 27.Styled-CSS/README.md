# Các cách "Style CSS" bên trong React Components :

## Cách 1 - CSS Style Sheet :

> Đơn giản là bạn chỉ cần import file CSS vào component bạn muốn style.
> Nhược điểm : Sẽ bị ghi đè thuộc tính của các `class` ở các file `.css` khác.

- Ví dụ ta có file `Heading.css`.
- Để dùng CSS này style cho component `Heading` > Ta import file này vào component `Heading.jsx`.
- Sử dụng `className` với file import `.css` : `<className="heading">`.

## Cách 2 - CSS Inline Style :

> Với React, inline style không được thể hiện bằng một `string` mà bằng một `object`.

- Ví dụ ta có component `Box`.
- Ta có thể tạo biến để lưu những style object này.
- Và truyền vào element bằng `style={tenBien}`.
- Hoặc ta có thể style trực tiếp element => ví dụ `style={{color: 'pink'}}`.

## Cách 3 - CSS Modules :

> Với việc dùng CSS Module tên class và animation được giới hạn để chỉ apply cho riêng một component.
> Đặt tên theo dạng `camelCase` khi có 2 từ trở lên.
> Ưu điểm : Có thể đặt tên `class` trùng nhau mà không lo bị ghi đè ở các file `.module.css` khác. Hoạt động độc lập, không phụ thuộc.
> Nhược điểm : Không có tính kế thừa, không thể css cho các `tags name` như (h1,p,button,div).

- Ví dụ ta tạo ra các component : Heading, Paragraph, Button.
- Trong mỗi component, sẽ tạo ra file CSS có đuôi là `.module.css`.
- Để dùng style CSS module này thì ta chỉ cần import vào components thôi.
- Khai báo biến `styles` đại diện cho object của `.module.css`.
- Sử dụng style cho element bằng cách `className={styles.key}`.
- Với `key` là tên của `class` muốn định dạng css.
- Cấu trúc class module mẫu : `Paragraph_paragraph_ThmR9`.

- Giải thích như sau :

  > Paragraph : tên của file CSS Module.
  > paragraph : tên class bên trong file CSS Module.
  > ThmR9 : Mã hash sử dụng Base64.

- Sử dụng `className` với file import `.module.css` :

  > Áp dụng cho 1 class : `<className={styles.btn}>`.
  > Áp dụng 2 class trở lên, sử dụng template string : `<className={`${styles.btn} ${styles.active}`}>`.
  > Hoặc sử dụng mảng và phương thức `join()` : `<className={[styles.btn, styles.active].join(" ")}>`

* Lưu ý : Khi sử dụng `CSS Module` với `Create-React-App` thì Webpack đã hỗ trợ sẵn cấu hình `module` > Xử lý file import > Trả về 1 `object`.

## Cách 4 - CSS className và clsx :

> Có thể sử dụng nhiều class & class động.
> Cài đặt thư viện clsx : npm i clsx
> clsx là 1 function, khi sử dụng trong element thì truyền các tham số.
> Làm việc với object.

- Import vào component.
- Cách dùng với class thông thường : `className={clsx(styles.btn, styles.active)}`.
- Cách dùng với class động > class `active` là biến cho nên là phải đặt trong dấu ngoặc vuông [].

```js
// Sử dụng trong element
className={clsx(styles.btn, {
    [styles.active]: true,
})}
```

> Sử dụng kết hợp `clsx` với `module css` và `style sheet` :

```js
// Trường hợp luôn có "d-flex"
const classes = clsx(styles.btn, "d-flex", {
	[styles.primary]: primary,
});

// Trường hợp lúc có(true) lúc không(false) "d-flex"
const classes = clsx(styles.btn, {
	[styles.primary]: primary,
	"d-flex": true,
});
```

> Sử dụng và cài đặt thư viện classnames : npm i classnames

- Tiến hành tạo ra và viết mã cho các file `.module.scss`.
- Sử dụng `styles` trong file `.jsx`.

```jsx
// Import thư viện
import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
const cx = classNames.bind(styles);

// Sử dụng classnames
className={cx("ten-class")}
```

## Cách 5 - Styled-components :

> là một thư viện dành cho React và React Native giúp cho việc viết style CSS ngay trong một component.

> Cài đặt thư viện styled-compoent : npm install styled-components --save

- Tạo component `FormWrapper.js`.
- Import Styled-components vào component.
- Tạo những wrapper dùng để style element bằng :
  > style.<tên Element>`style cua element`
- Và sử dụng chúng để render

```js
// Style cho thẻ <input>
const Input = styled.input`
	background: green;
`;
```

## Cách 6 - Style SCSS :

> Cài đặt thư viện sass : npm i sass
> Thư viện này sẽ cài package `loader` để tải file `scss` để cấu hình wepack.

- Sau khi cài thành công > Thực hiện lệnh thoát và khởi chạy lại project:

  > Ctrl + C
  > npm start

- Tạo file SCSS bằng cách đặt tên file có đuôi `.module.scss`.

* Lưu ý : Khi gọi đến `property` của CSS trong 1 object của `clsx()`
  > Trả về giá trị `undefined`
  > Tức là nó chưa được định nghĩa hoặc viết class sai bên file `.scss`.

# Sử dụng kết hợp giữa `CSS Module` và `CSS Style Sheet` :

- Trong thư mục `src/components` > Tạo 1 component `GlobalStyles`.
- Tạo ra file `GlobalStyles.js` > Nhận vào props `{children}` > Trả về `children` > Export Components.
- Tạo file CSS `GlobalStyles.css` > Tiến hành viết code css cho nó.
- Tại file `src/App.js` > Bọc quanh dự án của bạn bằng component `GlobalStyles` > Import Components.
