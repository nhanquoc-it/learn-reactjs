// React Form - <input /> ==================================================================
class ActionForm extends React.Component {
	// Tạo state chứa giá trị input
	constructor(props) {
		super(props);
		this.state = { value: "" };
	}

	handleChange = (event) => {
		// Cập nhật state
		this.setState({ value: event.target.value });
	};

	handleSubmit = (event) => {
		// Chặn sự kiện mặc định của form
		event.preventDefault();
		// In ra giá trị của input trong form
		alert("Giá trị đã được submit: " + this.state.value);
	};
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Name:
					{/* Bắt sự kiện onChange */}
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
					/>
				</label>
				<input type="Submit" value="Submit" />
			</form>
		);
	}
}

// React Form - <textarea> ==================================================================
// constructor()
this.state = { value: "Your message here" };
// render()
<form onSubmit={this.handleSubmit}>
	<label>
		Message:
		<textarea
			type="text"
			value={this.state.value}
			onChange={this.handleChange}
		/>
	</label>
	<input type="Submit" value="Submit" />
</form>;

// React Form - <select> <option> ===========================================================
// constructor()
this.state = { value: "javascript" };
// render()
<form onSubmit={this.handleSubmit}>
	<label>
		Chọn khóa học:
		<select value={this.state.value} onChange={this.handleChange}>
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="javascript">JAVASCRIPT</option>
			<option value="react.js">REACTJS</option>
		</select>
	</label>
	<input type="Submit" value="Submit" />
</form>;

// React Form - 2 thành phần <input /> =======================================================
// constructor()
this.state = {
	isGoing: true,
	guestName: "Bùi Văn Tèo",
};

// Handle Events : Change & Submit
handleInputChange = (event) => {
	const target = event.target;
	const value = target.type === "checkbox" ? target.checked : target.value;
	const name = target.name;

	this.setState({
		[name]: value,
	});
};

handleSubmit = (event) => {
	alert(
		"Giá trị đã được submit: " +
			this.state.isGoing +
			" và " +
			this.state.guestName
	);
	event.preventDefault();
};
// render()
<form onSubmit={this.handleSubmit}>
	<label>
		Tham gia:
		<input
			name="isGoing"
			type="checkbox"
			checked={this.state.isGoing}
			onChange={this.handleInputChange}
		/>
	</label>
	<br />

	<label>
		Ghi rõ họ tên:
		<input
			name="guestName"
			type="text"
			value={this.state.guestName}
			onChange={this.handleInputChange}
		/>
	</label>
	<input type="submit" value="Submit" />
</form>;

// React Form - Kết hợp nhiều thành phần ======================================================
// constructor()
this.state = {
	isGoing: true,
	guestName: "Bùi Văn Tèo",
	course: "react.js",
	message: "Your message here",
};

// handler events : Change & Submit
handleInputChange = (event) => {
	// Giữ nguyên code
};

handleSubmit = (event) => {
	alert(
		"Tham gia: " +
			this.state.isGoing +
			" , họ tên:" +
			this.state.guestName +
			", " +
			this.state.course +
			" và " +
			this.state.message
	);
	event.preventDefault();
};

// render()
<form onSubmit={this.handleSubmit}>
	<label>
		Tham gia:
		<input
			name="isGoing"
			type="checkbox"
			checked={this.state.isGoing}
			onChange={this.handleInputChange}
		/>
	</label>
	<br />

	<label>
		Ghi rõ họ tên:
		<input
			name="guestName"
			type="text"
			value={this.state.guestName}
			onChange={this.handleInputChange}
		/>
	</label>
	<br />

	<label>
		Chọn khóa học:
		<select
			name="course"
			value={this.state.course}
			onChange={this.handleInputChange}
		>
			<option value="html">HTML</option>
			<option value="css">CSS</option>
			<option value="js">JAVASCRIPT</option>
			<option value="react">REACT</option>
		</select>
	</label>
	<br />

	<label>
		Message:
		<textarea
			name="message"
			type="text"
			value={this.state.message}
			onChange={this.handleInputChange}
		/>
	</label>
	<br />
	<input type="submit" value="Submit" />
</form>;

// Validation Form ===========================================================================
validationForm = () => {
	const re = /\S+@\S+\.\S+/;
	// Kiểm tra email
	if (re.test(this.state.email)) return false;
	return true;
};
handleSubmit = (event) => {
	// Chặn sự kiện mặc định của form
	event.preventDefault();
	// Validation Form
	if (!this.validationForm()) {
		alert("Email không đúng định dạng.");
	}
};
