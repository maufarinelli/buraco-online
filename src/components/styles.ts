import styled from "styled-components";

export const TableWrapper = styled.div`
  flex: 1;
  min-height: 150px;

  display: flex;
  justify-content: space-between;

  border: 1px solid #fff;
  border-radius: 15px;
  margin: 10px 0;
  padding: 20px;
`;

export const CardWrapper = styled.button`
  margin-left: -40px;
`;

export const UserTableWrapper = styled.div`
  border: 1px solid #fff;
  border-radius: 15px;
  margin: 10px 0;
  padding: 20px;
`;

export const UserTableActive = styled.span`
  display: inline-block;
  margin-left: 5px;
  padding: 2px 5px 2px 0;
  background-color: #fff;
  color: #000;
`;

export const UserTableActiveClickable = styled.span`
  color: blue;
  cursor: pointer;
`;

export const Title = styled.h3`
  margin-top: 0;
`;
