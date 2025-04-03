import { combineReducers } from "redux";
import noteReducers from "./noteReducers";

// Gộp các reducers
export default combineReducers({
	note: noteReducers,
});
