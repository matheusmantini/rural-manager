import styled from "styled-components";

export const ProducerContainer = styled.div`
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    -webkit-overflow-scrolling: touch;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;

  @media (max-width: 768px) {
    min-width: 600px;
  }
`;
export const TableHeader = styled.th`
  background-color: rgb(230, 230, 230);
  padding: 10px;
  text-align: left;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 12px;
    min-width: 150px;
  }

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 3;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  background-color: white;

  @media (max-width: 768px) {
    display: table-cell;
    padding: 8px;
    font-size: 12px;
    border: none;
    border-bottom: 1px solid #ddd;
    text-align: left;
    min-width: 150px;
  }

  &:first-child {
    position: sticky;
    left: 0;
    z-index: 2;
  }
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    display: table-row;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const PaginationWrapper = styled.div`
  max-width: 350px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

export const PagesInfoMob = styled.span`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-bottom: 16px;
  }
`;

export const PagesInfoDesk = styled.span`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;
