// File : App.js
import React from "react";

// Import Components
import ButtonClick from "./components/ButtonClick/ButtonClick";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputChange from "./components/InputChange/InputChange";
import MouseHover from "./components/MouseHover/MouseHover";
import FormSubmission from "./components/FormSubmission/FormSubmission";
import DoubleClick from "./components/DoubleClick/DoubleClick";
import KeyPress from "./components/KeyPress/KeyPress";
import ImageClick from "./components/ImageClick/ImageClick";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import DragAndDrop from "./components/DragAndDrop/DragAndDrop";
import LinkClick from "./components/LinkClick/LinkClick";
import ResizeWindow from "./components/ResizeWindow/ResizeWindow";
import HoverEffect from "./components/HoverEffect/HoverEffect";
import DynamicButton from "./components/DynamicButton/DynamicButton";
import PasswordStrengthChecker from "./components/PasswordStrengthChecker/PasswordStrengthChecker";
import CopyToClipboard from "./components/CopyToClipboard/CopyToClipboard";
import ScrollEvent from "./components/ScrollEvent/ScrollEvent";
import Autocomplete from "./components/Autocomplete/Autocomplete";

function App() {
	return (
		<div>
			{/* Gọi component */}
			<ButtonClick />
			<ToggleButton />
			<InputChange />
			<MouseHover />
			<FormSubmission />
			<DoubleClick />
			<KeyPress />
			<ImageClick />
			<ContextMenu />
			<DragAndDrop />
			<LinkClick />
			<ResizeWindow />
			<HoverEffect />
			<DynamicButton />
			<PasswordStrengthChecker />
			<CopyToClipboard />
			<ScrollEvent />
			<Autocomplete />
		</div>
	);
}

export default App;
