import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;

  background-color: ${colors.containerBackground};
  & svg {
    cursor: pointer;
    background-color: ${colors.containerBackground};
    margin-left: 10px;
    margin-top: 10px;
    width: 10%;
  }
`;

export const ButtonContainer = styled.div`
  margin-right: 200px;
  margin-top: -5px;
  width: 300px;
  height: 30px;
  background-color: ${colors.containerBackground};
`;
