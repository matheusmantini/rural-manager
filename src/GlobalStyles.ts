import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    color: #333;
  }


`;

export default GlobalStyles;

export const Card = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: rgb(57, 61, 71);
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  width: 100%;
`;
