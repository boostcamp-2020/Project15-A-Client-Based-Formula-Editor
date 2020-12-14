import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
    margin-left: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: auto;
  height: 65%;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export const Title = styled.div`
  font-weight: bold;
  .bigText {
    font-size: 1.3rem;
    margin-bottom: 0.45rem;
  }
  .smallText {
    font-size: 0.87rem;
    color: ${colors.grey};
  }
`;
interface Props {
  saveClick: boolean;
}
export const SaveButtonContainer = styled.div<Props>`
  display: ${(props) => (props.saveClick ? 'flex' : 'none')};
  align-items: center;
  justify-content: space-around;
  width: 380px;
`;

export const MiniButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${colors.grey};
  padding: 3px;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  opacity: 0.6;
  .text1 {
    font-size: 13px;
    color: white;
    font-weight: bold;
    margin-top: 5px;
    margin-left: 7px;
    margin-right: 7px;
    margin-bottom: 5px;
  }
  .text2 {
    font-size: 13px;
    color: white;
    font-weight: bold;
    margin-bottom: 5px;
    margin-left: 7px;
    margin-right: 7px;
  }
  &: hover {
    opacity: 1;
  }
`;
