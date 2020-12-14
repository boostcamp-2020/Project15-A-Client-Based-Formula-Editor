import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TemplateSectionContainer = styled.div`
  width: 97%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border: 1px solid ${colors.borderGrey};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 28px;
    height: 22px;
    margin-left: auto;
    margin-right: 10px;
    border: none;
    border: 2px solid ${colors.grey};
    border-radius: 5px;
    background-color: ${colors.white};
    outline: none;
    opacity: 0.6;
    cursor: pointer;
  }

  button:hover {
    opacity: 1;
  }

  & > button > svg {
    width: 10px;
    height: 10px;
    fill: ${colors.grey};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
`;
