# Render props trong ReactJS :

    - Là một kỹ thuật để tái sử dụng các đoạn mã.
    - Tương tự như phương pháp sử dụng "Higher Order Component".
    - Giúp chúng ta sử dụng lại logic trên nhiều component.

    - Sử dụng trong rất nhiều các module nổi tiếng trong hệ sinh thái của React, bao gồm "react-router".

# Các hoạt động :

    - Nó thực hiện bằng cách truyền vào component => 1 props => có value như là 1 function.

# Cách sử dụng :

    - Trước tiên, chúng ta sẽ truyền vào component 1 props là một function => Lúc này chúng ta sẽ nhận được giá trị trả về.

    - Trong component được gọi => sẽ gọi props render => trả về giá trị cần render => trả về giá trị ở hàm "props.render()".
