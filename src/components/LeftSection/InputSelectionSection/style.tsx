import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  background-color: ${colors.white};
  width: 97%;
  height: 280px;
  margin-top: 4px;
  border: 1px solid ${colors.borderGrey};
  .dashed {
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    border-top: 1px dashed ${colors.lightGrey};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const InputTopSelectionSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: auto;
`;

export const InputBottomSelectionSectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: auto;
`;

export const Dictionary = styled.p``;
interface InputLatexContentProps {
  width: string;
  height: string;
}

export const InputLatexContent = styled.div<InputLatexContentProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border: 1px solid ${colors.borderGrey};
  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.mainGreen};
  }
`;
