import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  background-color: ${colors.containerBackground};
  width: 95%;
  height: 40%;
  margin-top: 10px;
  border: 1px solid ${colors.borderGrey};
`;

export const InputTopSelectionSectionContainer = styled.div`
  width: 100%;
  height: 48%;
  border-bottom: 1px solid ${colors.borderGrey};
  padding-top: 3px;
  padding-bottom: 5px;
`;
export const InputBottomSelectionSectionContainer = styled.div`
  width: 100%;
  margin-top: 3px;
`;
export const InputLatexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
`;
export const Dictionary = styled.p`
  padding: 10px 20px;
`;
