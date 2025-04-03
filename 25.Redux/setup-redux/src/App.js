// Import kết nối tới react-redux
import { connect } from "react-redux";

// Import action dùng để dispatch
import { actAddNote } from "./actions/index";

// Component : App.js
function App(props) {
	return <div>{/* Component */}</div>;
}

// Gán dispatch thành props
const mapDispatchToProps = (dispatch) => {
	return {
		addNote: (content) => {
			dispatch(actAddNote(content));
		},
	};
};

// Gán giá trị của state thành props
const mapStateToProps = (state, ownProps) => {
	return {
		note: state.note,
	};
};

// Export component với kết nối redux
export default connect(mapStateToProps, mapDispatchToProps)(App);
