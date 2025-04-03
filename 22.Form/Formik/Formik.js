// Import thư viện Formik
import { Formik, Form } from "formik";

// Sử dụng Formik : Để quản lý "state" và "validation" của form
<Formik
	initialValues={{ name: "", email: "", password: "" }}
	validationSchema={
		{
			/* validation schema */
		}
	}
	onSubmit={
		{
			/* handle submit */
		}
	}
>
	{({ errors, touched }) => {
		<Form>{/* form fields */}</Form>;
	}}
</Formik>;

// Sử dụng các API của Formik : Để quản lý "state" và "validation" của form
<Field name="name" />;

// Sử dụng các props của Field : Để quản lý "state" và "validation" của trường input
<Field name="name" />;
{
	errors.name && touched.name && <div>{errors.name}</div>;
}

// Sử dụng hàm "handleSubmit" : Được truyền vào prop "onSubmit" của component Formik
<Formik
	initialValues={{ name: "", email: "", password: "" }}
	validationSchema={
		{
			/* validation schema */
		}
	}
	onSubmit={(value) => {
		// handle submit here
	}}
>
	{({ errors, touched }) => {
		<Form>
			{/* form fields */}
			<Field name="name" />
			{errors.name && touched.name ? <div>{errors.name}</div> : null}

			<Field name="email" />
			{errors.email && touched.email ? <div>{errors.email}</div> : null}

			<Field name="password" type="password" />
			{errors.password && touched.password ? (
				<div>{errors.password}</div>
			) : null}

			{/* submit form */}
			<button type="submit">Submit</button>
		</Form>;
	}}
</Formik>;

// Yup Validation Schema : Kiểm tra và xác thực dữ liệu nhập vào từ form
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().required(),
});

// Submitting Form : Xử lý các giá trị khi người dùng submit form
const handleSubmit = (values) => {
	console.log(values);
};

// Handing Asynchronous Form Submissions : Xử lý form bất đồng bộ
const handleSubmit_2 = async (value) => {
	try {
		await submitForm(value); // Gọi hàm xử lý submit form bất đồng bộ
		console.log("Submit form thành công");
	} catch (error) {
		console.error("Submit form thất bại", error);
	}
};
