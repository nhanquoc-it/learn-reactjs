import React from "react";

// Khai báo JSX sai
/*
    return (
        <h1>Hello, World !</h1>
        <p>Học lập trình ReactJS</p>
    );
*/

// Khai báo JSX đúng : Sử dụng Fragment
// return (
// 	<React.Fragment>
// 		<h1>Hello, World !</h1>
// 		<p>Học lập trình ReactJS</p>
// 	</React.Fragment>
// );

// Có thể sử dụng thẻ <div>
// return (
// 	<div>
// 		<h1>Hello, World !</h1>
// 		<p>Học lập trình ReactJS</p>
// 	</div>
// );

// Trường hợp không nên sử dụng <div> : Phải sử dụng <Fragment>
/* Component : Table */
class Table extends React.Component {
	render() {
		return (
			<table>
				<tr>
					<Columns />
				</tr>
			</table>
		);
	}
}

/* Component : Columns */
class Columns extends React.Component {
	render() {
		return (
			<div>
				<td>Hello</td>
				<td>World</td>
			</div>
		);
	}
}

/* Khi render sẽ phá vỡ cấu trúc tables : Hiển thị sai */
<table>
	<tr>
		<div>
			<td>Hello</td>
			<td>World</td>
		</div>
	</tr>
</table>;

// Cú pháp đầy đủ : Cho phép thêm key
function Glossary(props) {
	return (
		<dl>
			{props.items.map((item) => (
				// Bạn phải chỉ định một keys cho mỗi items trong lists
				<React.Fragment key={item.id}>
					<dt>{item.term}</dt>
					<dt>{item.description}</dt>
				</React.Fragment>
			))}
		</dl>
	);
}

// Cú pháp viết tắt : Không thể chỉ định key
return (
	<>
		<p>Học lập trình ReactJS</p>
	</>
);
