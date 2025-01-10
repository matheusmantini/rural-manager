import styled from "styled-components";

export const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;
