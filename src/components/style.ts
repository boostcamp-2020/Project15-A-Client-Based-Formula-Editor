import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Header = styled.div`
  height: 3.5rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
  border-bottom: 1px solid #d6d6d6;
`;

export const Aside = styled.div`
  display: flex;
  flex-direction: column;
  width: 27rem;
  background-color: ${colors.backgroundGrey};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MoveArea = styled.div`
  display: flex;
  height: 100%;

  & div {
    transition: all 1s;
  }
`;

export const LeftArea = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

interface Props {
  show: boolean;
}

export const RightArea = styled.div<Props>`
  flex: 1;
  width: ${(props) => (props.show ? '100%' : '0%')};
  flex-grow: ${(props) => (props.show ? '1' : '0')};
  overflow: hidden;
  background-color: ${colors.backgroundGrey};
`;
