import styled from "styled-components";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const MainContent = styled.main`
  flex-grow: 1;
  padding: 1rem;

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
  }
`;
