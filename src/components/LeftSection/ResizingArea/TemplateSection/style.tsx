import styled from 'styled-components';
import colors from '@src/utils/colors';

export const TemplateSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 100%;
  border: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  button {
    width: 28px;
    height: 22px;
    margin-left: auto;
    margin-right: 10px;
    outline: none;
    border: none;
    background-color: ${colors.white};
    opacity: 0.6;
    cursor: pointer;
  }

  button:hover {
    opacity: 1;
  }

  & > button > svg {
    fill: ${colors.grey};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
