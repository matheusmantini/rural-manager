import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const ButtonStyles = `
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  background-color: var(--bg-color, #007bff);
  color: #fff;

  &:hover {
    background-color: var(--hover-bg-color, #0056b3);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
export const StyledLink = styled(RouterLink)<{
  variant?: "primary" | "secondary" | "danger" | "success";
}>`
  ${ButtonStyles}

  --bg-color: ${(props) =>
    props.variant === "secondary"
      ? "#282c34"
      : props.variant === "danger"
      ? "#dc3545"
      : props.variant === "success"
      ? "#28a745"
      : "#007bff"};
  --hover-bg-color: ${(props) =>
    props.variant === "secondary"
      ? "#5a6268"
      : props.variant === "danger"
      ? "#c82333"
      : props.variant === "success"
      ? "#218838"
      : "#0056b3"};
`;