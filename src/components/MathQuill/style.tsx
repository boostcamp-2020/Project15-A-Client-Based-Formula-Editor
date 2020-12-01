import styled from 'styled-components';
import colors from '@src/utils/colors';

interface MathFieldProp {
  isDecline: boolean;
  fontAlign: string;
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
    display: inline-block;
    flex-wrap: wrap;
    border: none;
    width: 1000px;
  }
  .mq-root-block var,
  span {
    text-align: ${(props) => props.fontAlign};
    font-style: ${(props) => (props.isDecline ? 'italic' : 'normal')};
  }
`;
