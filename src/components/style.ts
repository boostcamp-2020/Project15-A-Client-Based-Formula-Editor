import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Header = styled.div`
  height: 3.8rem;
  display: flex;
  border-bottom: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
`;

export const Aside = styled.div`
  width: 23%;
  height: 100%;
`;
export const Main = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
`;

export const MoveArea = styled.div`
  width: 100%;
  flex: 1;
  display: flex;

  & > div {
    transition: all 1s;
  }
`;
