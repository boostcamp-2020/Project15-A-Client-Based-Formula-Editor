import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CanvasContainer = styled.canvas`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${colors.white};
  z-index: -1;
`;
