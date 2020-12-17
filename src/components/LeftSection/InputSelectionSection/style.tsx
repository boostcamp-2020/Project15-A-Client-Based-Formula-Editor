import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 280px;
  margin-top: 4px;
  border: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
  justify-content: space-between;
  .dashed {
    border-top: 1px dashed ${colors.lightGrey};
    margin: 0;
    margin-top: 8px;
    margin-bottom: 8px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const InputTopSelectionSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-content: flex-start;
  justify-content: flex-start;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: ${colors.white};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: ${colors.lightGrey};

    &:hover {
      background-color: ${colors.grey};
    }
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
  }
`;

export const InputBottomSelectionSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: flex-start;
  align-content: flex-start;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: ${colors.white};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: ${colors.lightGrey};

    &:hover {
      background-color: ${colors.grey};
    }
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
  }
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
  border: 1px dashed ${colors.borderGrey};
  align-items: center;
  justify-content: center;
  cursor: 'move';
  transition-duration: 0.4s;
  &:hover {
    background-color: ${colors.lightGrey};
    cursor: pointer;
  }
`;
