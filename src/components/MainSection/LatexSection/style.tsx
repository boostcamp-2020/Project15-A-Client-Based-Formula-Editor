import styled from 'styled-components';
import colors from '@src/utils/colors';

export const LaTex = styled.div`
  overflow: hidden;
`;

export const Handle = styled.div`
  display: flex;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-left: 6px;
  align-items: center;
  color: ${colors.backgroundGrey};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  font-weight: bold;
  cursor: row-resize;
`;

export const Content = styled.div`
  display: flex;
  height: 100%;
  textarea {
    padding: 10px;
    min-width: 96%;
    min-height: 90%;
    resize: none;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: bold;
    background-color: transparent;
    color: ${colors.white};
  }
`;
