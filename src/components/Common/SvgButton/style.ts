import styled from 'styled-components';
import colors from '@src/utils/colors';

export interface Props {
  svgColor: string;
}

export const CustomButton = styled.div<Props>`
  svg {
    fill: ${(props) => props.svgColor};
  }
`;
