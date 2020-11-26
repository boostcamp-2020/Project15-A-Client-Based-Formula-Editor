import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MathField = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  .mq-editable-field {
    border: none;
  }
  .mq-focused {
    box-shadow: none;
  }
  .mq-editable-field > .mq-root-block {
    display: flex;
    flex-wrap: wrap;
    border: none;
  }
`;
