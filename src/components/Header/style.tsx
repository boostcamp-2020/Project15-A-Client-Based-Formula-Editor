import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  & svg {
    flex: none;
    margin-left: 0.5rem;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 65%;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
  justify-content: flex-end;
  background-color: ${colors.white};
`;

export const Title = styled.div`
  flex: none;
  margin-right: 30px;
  font-weight: bold;
  .bigText {
    margin-bottom: 0.45rem;
    font-size: 1.3rem;
  }
  .smallText {
    color: ${colors.grey};
    font-size: 0.87rem;
  }
`;

export const SaveButtonContainer = styled.div<{ saveButtonActive: boolean }>`
  display: ${(props) => (props.saveButtonActive ? 'flex' : 'none')};
  width: 380px;
  justify-content: flex-start;
  align-items: center;
`;

export const MiniButton = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 3px;
  outline: none;
  border-right: 2px solid ${colors.lightGrey};
  opacity: 0.6;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  .text1 {
    margin: 5px 7px;
    color: ${colors.grey};
    font-size: 14px;
    font-weight: bold;
  }
  .text2 {
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 5px;
    color: white;
    font-size: 13px;
    font-weight: bold;
  }
  &:hover {
    opacity: 1;
  }
`;
