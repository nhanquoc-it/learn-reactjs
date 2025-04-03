import { ADD_NEW_NOTE } from "../const/index";

// Khởi tạo reducers
const noteReducers = (state = [], action) => {
	switch (action.type) {
		case ADD_NEW_NOTE:
			const generateID = new Date().getTime();
			state = [...state, { id: generateID, content: action.content }];
			return state;
		default:
			return state;
	}
};
export default noteReducers;
