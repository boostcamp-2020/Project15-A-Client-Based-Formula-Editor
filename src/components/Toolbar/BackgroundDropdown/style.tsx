import styled from 'styled-components';
import colors from '@src/utils/colors';

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    cursor: pointer;
  }
  & svg:hover {
    background-color: ${colors.mainGreen};
  }
`;
export const BackgroundContent = styled.div``;
