import styled from 'styled-components';
import colors from '@src/utils/colors';

export const Handle = styled.div`
  height: 20px;
  border: 1px solid;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  textarea {
    width: 100%;
    padding: 30px;
  }
`;
