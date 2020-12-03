import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Handle = styled.div`
  display: flex;
  cursor: n-resize;
  padding-top: 5px;
  padding-bottom: 5px;
  color: ${colors.backgroundGrey};
  font-weight: bold;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  margin-left: 6px;
  .x-button {
    margin-left: auto;
    margin-right: 6px;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  display: flex;
  textarea {
    background-color: transparent;
    color: ${colors.white};
    font-size: 17px;
    font-weight: bold;
    resize: none;
    border: none;
    outline: none;
    padding: 10px;
    min-width: 96%;
    min-height: 95%;
    margin: auto;
  }
`;
