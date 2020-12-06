import styled from 'styled-components';
import colors from '@src/utils/colors';

export const BackgroundContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  top: 3.75rem;
  & svg {
    cursor: pointer;
  }
  & svg:hover {
    background-color: ${colors.mainGreen};
  }
`;
export const BackgroundContent = styled.div``;
