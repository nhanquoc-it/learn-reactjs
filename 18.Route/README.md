# React Route là gì?

    - Là một thư viện phổ biến trong ReactJS.

    - Được sử dụng để xử lý định tuyến (routing) và điều hướng (navigation).

    - Cho phép định nghĩa các đường dẫn (routes) và liên kết chúng với các component tương ứng.

    - Không cần tải lại toàn bộ trang web, giúp trải nghiệm người dùng mượt mà và nhanh chóng.

# Cài đặt React Router :

> npm install react-router-dom

# Sử dụng React Router trong Component :

    import {BrowserRouter, Route, Switch} from "react-router-dom";

# Các Components trong React Route :

## BrowserRouter :

    - Là một thành phần bao bọc cho toàn bộ ứng dụng ReactJS của bạn.

    - Quản lý việc định tuyến cho tất cả các trang trong ứng dụng.

    - Nó sử dụng "HTML5 history API" để gửi cho URL của trang luôn được cập nhật mà không cần tải lại trang.

    - Cách sử dụng :

        import { BrowserRouter } from 'react-router-dom';

        function App() {
            return (
                <BrowserRouter>
                    <div>
                        {/* Các thành phần khác sẽ được điền vào đây */}
                    </div>
                </BrowserRouter>
            );
        }

## Route :

    - Là thành phần chính của React Router.
    - Nó giúp xác định một tuyến đường (route) mà khi người dùng truy cập vào một URL cụ thể > React sẽ hiển thị một component tương ứng.

    - Cách sử dụng :

        import { Route } from 'react-router-dom';

        <Route path="/" exact component={HomePage} />
        <Route path="/users/:userId" component={UserPage} />
        <Route path="/about/" strict component={AboutPage} />
        <Route path="/login" sensitive component={LoginPage} />

    - Khi người dùng truy cập vào URL "/about", React sẽ render component "AboutPage".

    - Props của Route :
        + path : Đường dẫn (URL) mà bạn muốn theo dõi.
        + component : Component sẽ được render khi đường dẫn khớp với URL.
        + exact : Tuyến đường "chỉ" khớp với địa chỉ URL chính xác.
        + strict : Giống "exact" nhưng có thể có dấu dấu gạch chéo cuối cùng hoặc không.
        + sensitive : Tuyến đường "phải" khớp chính xác với các chữ cái viết hoa / viết thường trong địa chỉ URL.

## Switch :

    - Giúp đảm bảo rằng chỉ một "Route" duy nhất được render khi có sự thay đổi URL.

    - Điều này hữu ích khi bạn muốn chỉ "hiển thị một route tại một thời điểm".

    - Cách sử dụng :

        import { Switch, Route } from 'react-router-dom';

        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </Switch>

## Link :

    - Là một component thay thế cho thẻ <a> trong HTML.
    - Giúp điều hướng giữa các trang mà không làm "reload" lại toàn bộ trang.

    - Cách sử dụng :

        import { Link } from 'react-router-dom';

        <Link to="/about">Go to About Page</Link>

# NavLink :

    - Là một component giống <Link> nhưng nó hỗ trợ khả năng làm nổi bật đường dẫn mà người dùng đang truy cập.

    - Nó thêm một class "active" vào các liên kết khi đường dẫn hiện tại khớp với URL của <NavLink>.

    - Cách sử dụng :

    import { NavLink } from 'react-router-dom';

    <NavLink to="/about" activeClassName="active">
        About
    </NavLink>

# withRouter :

    - Là một Higher-Order Component (HOC).

    - Được sử dụng để đóng gói 1 component và cung cấp các thuộc tính liên quan đến routing : match, location, history.

    - Các thuộc tính được truyền vào component thông qua "props".

    - Cách sử dụng :

        import React from "react";
        import { withRouter } from "react-router-dom";

        function MyComponent(props) {
            console.log(props.match);
            return (
                <div>
                    <p>Match: {props.match.url}</p>
                </div>
            );
        }
        export default withRouter(MyComponent);

    - Props của withRouter :

        + match : chứa thông tin về đường truyền hiện tại và các tham số động (nếu có).

        + location : chứa thông tin về địa chỉ URL hiện tại.

        + history : chứa thông tin về lịch sử duyệt web, bao gồm các hoạt động như điều hướng, quay lại và tiến lên.

# Các tính năng khác của React Router :

## Route Params : Sử dụng tham số trong URL để điều hướng các trang động.

    - Nếu bạn muốn hiển thị thông tin của người dùng dựa trên ID, bạn có thể sử dụng ":id" trong đường dẫn "path".

    - Trong component "UserPage", bạn có thể truy cập tham số "id" bằng cách sử dụng Hook {useParams}.

## Redirect : Khi muốn tự động chuyển hướng người dùng từ một URL này sang một URL khác.

# useHistory : Là một hook cung cấp lịch sử điều hướng để bạn có thể điều khiển việc chuyển hướng trong code của mình.

# useLocation : Là một hook cho phép bạn truy cập thông tin về URL hiện tại, chẳng hạn như đường dẫn và trạng thái.

# React Router "history" Object :

    - createBrowserHistory : để tạo đối tượng lịch sử của trình duyệt.
    - goBack : điều hướng tới trang trước đó.
    - goForward : điều hướng trang tiếp theo.
    - replace : thay thế địa chỉ hiện tại bằng địa chỉ mới.

=========================================================

# Tóm lại :

<BrowserRouter> : bọc toàn bộ ứng dụng.

<Route> : xác định các tuyến đường và component sẽ hiển thị.

<Switch> : chỉ hiển thị một "route" duy nhất tại một thời điểm.

<Link> và <NavLink> : để điều hướng giữa các trang mà không làm "reload" trang.

<useHistory> và <useLocation> : là các hook hữu ích để kiểm soát và lấy thông tin về lịch sử và URL.
