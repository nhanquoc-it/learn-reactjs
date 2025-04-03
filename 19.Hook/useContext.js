// Import Hook : useContext
import React, { createContext, useContext } from "react";

// Khởi tạo context
const MyContext = createContext();

// Tạo 1 Provider Component - Cung cấp giá trị context cho component con
const ParentComponent = () => {
	<MyContext.Provider value="Hello from context!">
		<ChildComponent />
	</MyContext.Provider>;
};
// Component con
const ChildComponent = () => {
	const contextValue = useContext(MyContext);
	return <p>{contextValue}</p>;
};

/*======================================================*/
// Lấy giá trị của context trong "Class Component"
class MyClass extends React.Component {
	render() {
		// Lấy giá trị của context
		const value = this.context;
	}
}
MyClass.contextType = MyContext;

/*======================================================*/
// Lấy giá trị của context trong Function Component

/* Component : AppContext.js */
// Khởi tạo context - truyền tham số
const AppContext = React.createContext({ foo: "bar" }); 

/* Component : MyClass.js */
import AppContext from "./appContext.js";
const MyClass = () => {
	// Lấy giá trị của context
	const value = useContext(AppContext);
	return <div>{value}</div>;
};
