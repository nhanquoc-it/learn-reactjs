import React from "react";
import styled from "styled-components"; // Import thư viện

// Khai báo styled
const Input = styled.input`
	background: green;
`;

// Sử dụng styled
const FormWrapper = () => <Input placeholder="hola" />;

export default FormWrapper;
