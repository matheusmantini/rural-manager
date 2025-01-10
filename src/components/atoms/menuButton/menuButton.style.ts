import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledButton = styled(Link)`
  background: none;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: rgb(128, 185, 224);
  }

  &.active {
    font-weight: bold;
    color: #007bff;
  }
`;
