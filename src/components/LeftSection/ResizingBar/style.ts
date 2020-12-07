import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Bar = styled.div`
  width: 100%;
  height: 1.5%;
  background-color: ${colors.borderGrey};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;
