import styled from 'styled-components';
import colors from '@src/utils/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  & svg {
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    margin-left: 0.3rem;
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
  margin-left: 0.43rem;
  .bigText {
    font-size: 1.3rem;
    margin-bottom: 0.3rem;
  }
  .smallText {
    font-size: 0.87rem;
    color: ${colors.grey};
  }
`;

export const SaveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  justify-content: space-between;
  margin-right: 1.87rem;
  display: none;
`;

export const MiniButton = styled.div`
  display: flex;
  flex-direction: column;
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
