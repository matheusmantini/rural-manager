import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);

  h3 {
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  button {
    width: 45%;
  }
`;

export const Checkbox = styled.label`
  display: flex !important;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100% !important;
  height: 24px;

  > input {
    width: 24px;
    margin-right: 8px;
    margin-top: 0;
  }

  > span {
    width: 100%;
  }
`;
