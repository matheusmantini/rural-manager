import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
  }
`;
