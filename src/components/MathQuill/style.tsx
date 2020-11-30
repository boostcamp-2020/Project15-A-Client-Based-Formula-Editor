import styled from 'styled-components';
import colors from '@src/utils/colors';

interface MathFieldProp {
  isDecline: boolean;
}

export const MathField = styled.div<MathFieldProp>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
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
  .mq-root-block var,
  span {
    font-style: ${(props) => (props.isDecline ? 'italic' : 'normal')};
  }
`;
