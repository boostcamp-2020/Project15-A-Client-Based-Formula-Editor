import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MathSectionContainer = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-content: flex-start;
`;
