import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin-left: 0.3rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  width: 250px;
  height: 35px;
  background-color: ${colors.containerBackground};
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: bold;
  margin-left: 0.43rem;
  .bigText {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
  .smallText {
    font-size: 0.87rem;
    color: ${colors.grey};
  }
`;
