import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProducerCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProducerTitle = styled.h1`
  font-size: 2rem;
  color: #333;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
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

export const PropertiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  &.editing {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Message = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

export const CropsContainer = styled.div`
  margin-top: 16px;
`;

export const CropsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

export const CropsLabel = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  > label {
    width: 100px !important;
  }
`;

export const EditCropContainer = styled.div`
  margin-bottom: 24px;
`;

export const CropActions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  align-items: flex-end;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

export const FormContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;

export const PropertyFormContainer = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  color: rgb(57, 61, 71);
`;

export const FormWrapper = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }

  label {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: #333;
    width: 100%;
  }

  input {
    padding: 8px;
    font-size: 1rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
  }
`;

export const EditFormContent = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Checkbox = styled.label`
  display: flex !important;
  flex-direction: row !important;
  justify-content: flex-start !important;
  align-items: center !important;
  width: 100% !important;
  height: 24px !important;

  > input {
    width: 24px;
    margin-right: 8px;
    margin-top: 0;
  }

  > span {
    width: 100%;
  }
`;

export const DividerLine = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  background-color: #bcbcbc;
  margin-top: 16px;
`;

export const EditFormActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 24px;
  width: 100%;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #2196f3;
  &:hover {
    background-color: #1976d2;
  }
`;

export const ActionContainer = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
