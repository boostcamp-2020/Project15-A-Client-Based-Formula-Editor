import styled from 'styled-components';
import colors from '@src/utils/colors';

interface CanvasProps {
  show: string;
}
export const CanvasContainer = styled.canvas<CanvasProps>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.white};
  z-index: -1;
`;
