import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  margin-bottom: 16px;
`;

export const CropInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 4px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  width: 100%;
`;

export const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  color: #fff;
`;

export const EditButton = styled(Button)`
  background-color: #4caf50;
  &:hover {
    background-color: #45a049;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: #f44336;
  &:hover {
    background-color: #e53935;
  }
`;
