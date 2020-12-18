import styled from 'styled-components';

export interface Props {
  svgColor: string;
}

export const CustomButton = styled.div<Props>`
  svg {
    fill: ${(props) => props.svgColor};
  }
`;
