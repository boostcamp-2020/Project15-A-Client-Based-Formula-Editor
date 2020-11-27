import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & svg {
    cursor: pointer;
    width: 3.75rem;
    height: 3.5rem;
    margin-left: 0.3rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 250px;
  height: 35px;
  background-color: ${colors.containerBackground};
  display: flex;
  align-items: center;
`;
