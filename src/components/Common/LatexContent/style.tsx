import styled from 'styled-components';
import colors from '@src/utils/colors';

interface LatexProps {
  width: string;
  height: string;
  opacity: number;
}
export const InputLatexContent = styled.div<LatexProps>`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  opacity: ${(props) => props.opacity};
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.borderGrey};
  cursor: 'move';
  &:hover {
    border: 1px solid ${colors.mainGreen};
    cursor: pointer;
  }
`;
