import styled from 'styled-components';
import colors from '@src/utils/colors';

interface Props {
  show: boolean;
}

export const RightArea = styled.div<Props>`
  flex: 0 1;
  flex-basis: ${(props) => (props.show ? '30%' : '0%')};
  width: ${(props) => (props.show ? '30%' : '0%')};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.graphPuple};
  overflow: hidden;
`;

export const GraphContainer = styled.div`
  width: 400px;
  height: 300px;
`;

export const Title = styled.div`
  width: 100%;
  height: 45px;
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .edge {
    width: 10px;
    height: 100%;
    background-color: ${colors.mainGreen};
  }
  .title {
    margin-left: 30px;
    font-size: 30px;
    font-weight: bold;
    color: ${colors.white};
  }
`;
