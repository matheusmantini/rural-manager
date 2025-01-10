import styled from "styled-components";

export const Button = styled.button<{
  variant?: "primary" | "secondary" | "danger" | "success";
}>`
  height: 38px;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "secondary"
      ? "#282c34"
      : props.variant === "danger"
      ? "#dc3545"
      : props.variant === "success"
      ? "#28a745"
      : "#007bff"};
  color: #fff;

  &:hover {
    background-color: ${(props) =>
      props.variant === "secondary"
        ? "#5a6268"
        : props.variant === "danger"
        ? "#c82333"
        : props.variant === "success"
        ? "#218838"
        : "#0056b3"};
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  
  @media (max-width: 768px) {
    width: 100%;
  }
`;
