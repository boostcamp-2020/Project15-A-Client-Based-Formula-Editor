import styled from 'styled-components';
import colors from '@src/utils/colors';

export const DropDown = styled.div`
  width: 100px;
`;

export const DropDownContent = styled.div<{ dropDown: string }>`
  width: 100px;
  border: 1px solid ${colors.borderGrey};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  display: ${(props) => (props.dropDown === 'open' ? 'block' : 'none')};
`;

export const DropButton = styled.div`
  cursor: pointer;
  width: 60px;
  border: 1px solid ${colors.borderGrey};
  display: flex;
  align-items: center;
  .number {
    padding: 7px;
    font-size: 13px;
  }
  svg {
    margin-top: 2px;
  }
`;

export const Content = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  .number {
    margin-left: 15px;
    font-size: 13px;
    color: ${(props) => (props.isSelected ? colors.fontGreen : colors.black)};
  }
  svg {
    visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    margin-left: auto;
    margin-top: 5px;
  }
  &: hover {
    background-color: #f1f1f1;
  }
`;
