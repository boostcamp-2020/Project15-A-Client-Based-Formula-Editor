import styled from 'styled-components';

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    margin-top: 10px;
    cursor: pointer;
  }
  & input {
    margin-top: 10px;
  }
`;
export const DrawerDiv = styled.div`
  border-radius: 20px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  margin-top: 10px;
  &: hover {
    cursor: pointer;
  }
`;
