import styled from 'styled-components';
import colors from '@src/utils/colors';

export const DrawerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3.75rem;
  padding: 12px;
  border: solid 1px ${colors.borderGrey};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  svg {
    margin-left: 0.3rem;
  }
  button {
    border: none;
    background-color: ${colors.white};
    &:hover {
      cursor: pointer;
    }
  }
`;
export const DrawerDiv = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
