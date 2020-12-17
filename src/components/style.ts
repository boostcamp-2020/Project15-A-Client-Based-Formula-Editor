import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Header = styled.div`
  display: flex;
  height: 3.8rem;
  border-bottom: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
`;

export const Aside = styled.div`
  width: 23%;
  height: 100%;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 77%;
`;

export const MoveArea = styled.div`
  flex: 1;
  display: flex;
  width: 100%;

  & > div {
    transition: all 1s;
  }
`;
