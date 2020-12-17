/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import colors from '@src/utils/colors';

interface MathFieldProp {
  isDecline: boolean;
  fontAlign: string;
  isActive: boolean;
  canDrop: boolean;
  fontSize: number;
  fontColor: string;
  isBackgroundDropdownShow: boolean;
  paintDropdown: boolean;
}

export const MathField = styled.div<MathFieldProp>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    // eslint-disable-next-line no-nested-ternary
    props.isActive
      ? colors.dragEffect
      : props.canDrop
      ? colors.dragEffect
      : props.isBackgroundDropdownShow
      ? 'transparent'
      : props.paintDropdown
      ? 'transparent'
      : 'white'};

  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.fontColor};
  transition: all 0.3s;
  .mq-editable-field {
    width: 100%;
    border: none;
  }
  .mq-focused {
    box-shadow: none;
  }
  .mq-editable-field > .mq-root-block {
    display: inline-block;
    flex-wrap: wrap;
    border: none;
  }
  .mq-root-block var,
  span {
    text-align: ${(props) => props.fontAlign};
    font-style: ${(props) => (props.isDecline ? 'italic' : 'normal')};
  }
  .mq-empty {
    border: 0.5px dotted ${colors.grey};
    background-color: ${colors.white};
  }
`;
