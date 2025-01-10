import React from "react";
import { InputProps } from "../../../types/inputProps.types";
import { Container, StyledInput } from "./input.style";

const Input: React.FC<InputProps> = ({ label, ...props }) => (
  <Container>
    <label>{label}</label>
    <StyledInput {...props} />
  </Container>
);

export default Input;
