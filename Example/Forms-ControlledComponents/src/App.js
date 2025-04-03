// File : App.js
import React from "react";

// Import Components
import BasicForm from "./components/BasicForm/BasicForm";
import LoginForm from "./components/LoginForm/LoginForm";
import RegistrationForm from "./components/RegistrationForm/RegistrationForm";
import SearchBar from "./components/SearchBar/SearchBar";
import TodoForm from "./components/TodoForm/TodoForm";
import FileUpload from "./components/FileUpload/FileUpload";
import PasswordChangeForm from "./components/PasswordChangeForm/PasswordChangeForm";
import DynamicFormFields from "./components/DynamicFormFields/DynamicFormFields";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import DatePicker from "./components/DatePicker/DatePicker";
import AutocompleteSearch from "./components/AutocompleteSearch/AutocompleteSearch";
import SurveyForm from "./components/SurveyForm/SurveyForm";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import AddressForm from "./components/AddressForm/AddressForm";
import SurveyPoll from "./components/SurveyPoll/SurveyPoll";
import TimeTrackingForm from "./components/TimeTrackingForm/TimeTrackingForm";
import QuizForm from "./components/QuizForm/QuizForm";
import ReservationForm from "./components/ReservationForm/ReservationForm";

function App() {
	return (
		<>
			{/* Gọi Component */}
			<BasicForm />
			<LoginForm />
			<RegistrationForm />
			<SearchBar />
			<TodoForm />
			<FileUpload />
			<PasswordChangeForm />
			<DynamicFormFields />
			<CurrencyConverter />
			<DatePicker />
			<AutocompleteSearch />
			<SurveyForm />
			<MultiStepForm />
			<ColorPicker />
			<AddressForm />
			<SurveyPoll />
			<TimeTrackingForm />
			<QuizForm />
			<ReservationForm />
		</>
	);
}

export default App;
