import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #282c34;
  color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

export const Logo = styled.div`
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;
