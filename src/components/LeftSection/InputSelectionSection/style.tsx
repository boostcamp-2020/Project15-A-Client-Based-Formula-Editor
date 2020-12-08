import styled from 'styled-components';
import colors from '@src/utils/colors';

export const InputSectionContainer = styled.div`
  background-color: ${colors.white};
  width: 97%;
  height: 40%;
  margin-top: 10px;
  border: 1px solid ${colors.borderGrey};
`;

export const InputTopSelectionSectionContainer = styled.div`
  width: 100%;
  height: 46%;
  padding-bottom: 5px;
  margin-left: -10px;
`;
export const InputBottomSelectionSectionContainer = styled.div`
  width: 100%;
  margin-top: 10px;
  margin-left: -10px;
`;
export const InputLatexContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 10px;
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
