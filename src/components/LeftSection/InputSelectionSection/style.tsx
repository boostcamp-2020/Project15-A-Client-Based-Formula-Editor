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
  height: 44%;
  border-bottom: 1px solid ${colors.borderGrey};
`;
export const InputLatexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
`;
export const InputLatexContent = styled.div`
  width: 60px;
  height: 60px;
  padding-left: 10px;
  padding-top: 10px;
  &:hover {
    border: 1px solid ${colors.mainGreen};
    cursor: pointer;
  }
  border: 1px solid ${colors.borderGrey};
`;
