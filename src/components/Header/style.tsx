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
  height: 35px;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
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
  width: 115px;
  justify-content: space-between;
  margin-right: 1.87rem;
`;

export const MiniButton = styled.div`
 display: lex;
  flex-dection: column;
  justify-content: space-between 
  width: 50px;
  height: 100%;
  align-items: center;
  background-color: ${colors.grey};
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
  font-weight: bold;
  outline: none;
  opacity: 0.6;
  margin-right: 5px; 
  .text {
    font-size: 13px;
    color: white;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 4px;
    margin-top: 4px;
  }
  &: hover {
    opacity: 1
  }
`;
