import styled from 'styled-components';
import colors from '@src/utils/colors';

export const DrawerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  position: absolute;
  top: 3.75rem;
  border: solid 1px ${colors.borderGrey};
  background-color: ${colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
  svg {
    margin-left: 0.3rem;
  }
`;
export const DrawerDiv = styled.div`
  border-radius: 4px;
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(props) => props.color};
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    cursor: pointer;
  }
`;
