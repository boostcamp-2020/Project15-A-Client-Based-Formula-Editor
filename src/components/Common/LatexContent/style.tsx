import styled from 'styled-components';
import colors from '@src/utils/colors';

interface LatexProps {
  width: string;
  height: string;
}
export const InputLatexContent = styled.div<LatexProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  padding-left: 10px;
  padding-top: 10px;
  &:hover {
    border: 1px solid ${colors.mainGreen};
    cursor: pointer;
  }
  border: 1px solid ${colors.borderGrey};
`;
