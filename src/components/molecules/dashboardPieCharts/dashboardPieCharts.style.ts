import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    gap: 16px;
  }
`;
