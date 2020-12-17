import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  height: 65%;
  display: flex;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.white};
`;

export const Title = styled.div`
  font-weight: bold;
  .bigText {
    margin-bottom: 0.45rem;
    font-size: 1.3rem;
  }
  .smallText {
    font-size: 0.87rem;
    color: ${colors.grey};
  }
`;

interface Props {
  saveButtonActive: boolean;
}

export const SaveButtonContainer = styled.div<Props>`
  width: 380px;
  display: ${(props) => (props.saveButtonActive ? 'flex' : 'none')};
  justify-content: flex-start;
  align-items: center;
`;

export const MiniButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3px;
  border-right: 2px solid ${colors.lightGrey};
  align-items: center;
  justify-content: center;
  outline: none;
  font-weight: bold;
  opacity: 0.6;
  cursor: pointer;
  .text1 {
    margin: 5px 7px;
    color: ${colors.grey};
    font-size: 16px;
    font-weight: bold;
  }
  .text2 {
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
  }
`;
