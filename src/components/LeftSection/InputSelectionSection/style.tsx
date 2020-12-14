import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  width: 97%;
  height: 280px;
  display: flex;
  flex-direction: column;
  margin-top: 4px;
  justify-content: space-between;
  border: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
  .dashed {
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
    border-top: 1px dashed ${colors.lightGrey};
  }
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
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  justify-content: center;
  align-items: center;
  border: 1px dashed ${colors.borderGrey};
  cursor: 'move';
  transition-duration: 0.4s;
  &:hover {
    background-color: ${colors.lightGrey};
    cursor: pointer;
  }
`;
