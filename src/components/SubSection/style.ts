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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const GraphContainer = styled.div`
  width: 400px;
  height: 300px;
  border: 1px solid;
`;

export const Title = styled.div`
  width: 100%;
  height: 45px;
  border: 1px solid;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  .edge {
    width: 10px;
    height: 100%;
    background-color: ${colors.mainGreen};
  }
  .title {
    font-size: 30px;
  }
`;
