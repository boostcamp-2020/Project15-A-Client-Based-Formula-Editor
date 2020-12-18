import styled from 'styled-components';
import colors from '@src/utils/colors';

interface LatexProps {
  width: string;
  height: string;
}
export const InputLatexContent = styled.div<LatexProps>`
  flex: auto;
  display: flex;
  width: ${(props) => props.width};
  height: ${(props) => props.height}px;
  border: 1px dashed ${colors.borderGrey};
  opacity: 1;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  transition-duration: 0.4s;
  cursor: pointer;
  * {
    cursor: pointer;
  }
  &:hover {
    background-color: ${colors.lightGrey};
  }
`;
