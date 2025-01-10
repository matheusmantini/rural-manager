import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 400px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PropertyName = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const PropertyInfo = styled.p`
  font-size: 1rem;
  color: #555;
  margin: 4px 0;
`;

export const CropsTitle = styled.h3`
  font-size: 1.2rem;
  color: #444;
  margin-top: 16px;
`;

export const CropsList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const CropsItem = styled.li`
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
