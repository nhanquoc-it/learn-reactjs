// Sử dụng Material UI
// Xây dựng form đăng ký đơn giản với các trường : tên, email, mật khẩu và xác nhận mật khẩu.
import React from "react";
import { TextField, Button } from "@material-ui/core";
import { Formik, Form } from "formik";
import * as Yup from "yup";

// Hàm kiểm tra các trường input
const validationShema = Yup.object().shape({
	name: Yup.string().required("Tên không được để trống"),
	email: Yup.string()
		.email("Email không hợp lệ")
		.required("Email không được để trống"),
	password: Yup.string().required("Mật khẩu không được để trống"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password")], "Mật khẩu không khớp")
		.required("Xác nhận mật khẩu không được để trống"),
});

// Sign Up Form
const SignupForm = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
				confirmPassword: "",
			}}
			validationShema={validationShema}
			onSubmit={(value) => {
				alert(JSON.stringify(values, null, 2));
			}}
		>
			{({ errors, touched }) => (
				<Form>
					<TextField
						name="name"
						label="Tên"
						error={errors.name && touched.name}
						helperText={errors.name}
						fullWidth
						margin="normal"
					/>
					<TextField
						name="email"
						label="Email"
						error={errors.email && touched.email}
						helperText={errors.email}
						fullWidth
						margin="normal"
					/>
					<TextField
						name="password"
						label="Mật khẩu"
						type="password"
						error={errors.password && touched.password}
						helperText={errors.password}
						fullWidth
						margin="normal"
					/>
					<TextField
						name="confirmPassword"
						label="Xác nhận mật khẩu"
						type="password"
						error={errors.confirmPassword && touched.confirmPassword}
						helperText={errors.confirmPassword}
						fullWidth
						margin="normal"
					/>

					<Button type="submit" variant="contained" color="primary">
						Đăng ký
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default SignupForm;
