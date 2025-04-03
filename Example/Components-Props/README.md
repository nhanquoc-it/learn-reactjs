# Tạo 1 component đơn giản (không nhận props).

- Bước 1 : Cài đặt Node.js và npm (https://nodejs.org/)

- Bước 2 : Tạo dự án React > Mở terminal > Gõ lệnh :

  > npx create-react-app components-props
  > cd components-props

- Bước 3 : Tạo Component "HelloReact".

  - Mở file "src" > Tạo folder "components" > Tạo component "HelloReact.js".
  - Thêm nội dung.

- Bước 4 : Sử dụng Component trong App

  - Mở file "src" > File "App.js".
  - Thêm nội dung.

- Bước 5 : Chạy ứng dụng > Mở terminal > Gõ lệnh :
  > npm start

# Tạo 1 component truyền và nhận props là 1 String.

- Tạo 1 Component "Greeting.js" > nhận props {name}.
- File "App.js" > truyền props với thuộc tính name="gia-tri".
  > gia-tri : nội dung bất kỳ.

# Tạo 1 component và áp dụng CSS, nhận props là 1 Array.

- Tạo 1 Component "PersonList.js" > nhận props {people} > Sử dụng map() để lặp qua từng phần tử trong mảng.
- Tạo file CSS "PersonList.css" > định dạng CSS.
- File "App.js" > Tạo 1 mảng "peopleList" gồm 4 phần tử > truyền props với thuộc tính : people={peopleList}.

# Tạo 1 component, áp dụng CSS và nhận props là 1 Object.

- Tạo 1 Component "ProductCard.js" > nhận props {product}
- Tạo file CSS "ProductCard.css" > định dạng CSS.
- File "App.js" > Tạo 1 object "productInfo" chứa thông tin bao gồm : name, price, description, img > truyền props với thuộc tính : product={productInfo}.

# Tạo 1 component, áp dụng CSS và nhận props là 1 Image.

- Tạo 1 Component "Avatar.js" > nhận props {imageUrl}.
- Tạo file CSS "Avatar.css" > định dạng CSS.
- File "App.js" > Tạo 1 biến "avatarUrl" và gán url hình ảnh > truyền props với thuộc tính : imageUrl={avatarUrl}

# Tạo 1 component, áp dụng CSS và nhận props gồm 2 Object.

- Tạo 1 Component "BlogPost.js" > nhận props {post}.
- Tạo file CSS "BlogPost.css" > định dạng CSS.
- File "App.js" > Tạo 2 objects lần lượt "blogPost" và "blogPost1" chứa thông tin bao gồm : title, date, content, image > truyền props với thuộc tính post={tenObjects} > tenObjects lần lượt là "blogPost" và "blogPost1".

# Tạo 1 component, áp dụng CSS, tái sử dụng Component cũ và nhận props là 1 Array chứa nhiều Object bên trong.

- Tạo 1 Component "ProductList.js" > nhận props {products} > Sử dụng map() để lặp qua từng phần tử trong mảng > Tái sử dụng component "ProductCard" để có thể lấy ra từng phần tử.
- Tạo file "ProductList.css" > định dạng CSS.
- File "App.js" > Tạo 1 Array có tên "productsArray" và chứa 3 Object con ở bên trong chứa thông bao gồm: name, price, img, description > truyền props có thuộc tính products={productsArray}.
