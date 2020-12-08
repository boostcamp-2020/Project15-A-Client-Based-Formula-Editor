import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TemplateSectionContainer = styled.div`
  background-color: ${colors.white};
  width: 97%;
  height: 100%;
  border: 1px solid ${colors.borderGrey};
  display: flex;
  flex-direction: column;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
  align-content: flex-start;
`;
