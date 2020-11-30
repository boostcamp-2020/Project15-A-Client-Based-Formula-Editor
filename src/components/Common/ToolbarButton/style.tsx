import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.div`
  cursor: pointer;
  svg {
    fill: ${colors.white};
    &: hover {
      fill: ${colors.darkGrey};
    }
  }
`;
