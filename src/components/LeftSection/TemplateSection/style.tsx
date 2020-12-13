import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TemplateSectionContainer = styled.div`
  background-color: ${colors.white};
  width: 97%;
  height: 100%;
  border: 1px solid ${colors.borderGrey};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  button {
    margin-left: auto;
    margin-right: 10px;
    width: 28px;
    height: 22px;
    background-color: ${colors.white};
    border: none;
    border: 2px solid ${colors.grey};
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    opacity: 0.6;
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
  overflow: auto;
  align-content: flex-start;
`;
