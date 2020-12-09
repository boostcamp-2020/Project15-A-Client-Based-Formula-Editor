import styled from 'styled-components';
import colors from '@src/utils/colors';

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

export const GraphContainer = styled.div`
  border: 3px solid;
  width: 100%;
  height: 500px;
`;
