import { ADD_NEW_NOTE } from "../const/index";

// Action : Add Note
export const actAddNote = (content) => {
	return {
		type: ADD_NEW_NOTE,
		content,
	};
};
