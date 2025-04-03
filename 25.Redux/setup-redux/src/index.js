// Import thư viện
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Import Redux
import { Provider } from "react-redux";
import { createStore } from "redux";

// Gọi reducers
import reducers from "./reducers/index";

// Tạo store
const store = createStore(reducers);

// Render DOM
ReactDOM.render(
	<React.StrictMode>
		{/* Bọc các component vào trong "Provider" */}
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
