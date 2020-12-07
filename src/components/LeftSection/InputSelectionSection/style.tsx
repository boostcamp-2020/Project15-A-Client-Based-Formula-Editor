import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  background-color: ${colors.white};
  width: 97%;
  height: 40%;
  margin-top: 4px;
  border: 1px solid ${colors.borderGrey};
  border: 2px solid;
`;

export const InputTopSelectionSectionContainer = styled.div`
  width: 100%;
  height: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  overflow: auto;
`;
export const InputBottomSelectionSectionContainer = styled.div`
  border: 2px solid;
  width: 100%;
  height: 45%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
  overflow: auto;
`;
export const InputLatexContainer = styled.div`
  border: 2px solid yellow;
  display: flex;
  width: 97%;
  height: 100%;
  flex-wrap: wrap;
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
