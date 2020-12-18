import styled from 'styled-components';
import colors from '@src/utils/colors';

export const FontDropdown = styled.div``;
export const DropDownContent = styled.div<{ fontSizeDropdown: boolean }>`
  display: ${(props) => (props.fontSizeDropdown ? 'block' : 'none')};
  position: absolute;
  top: 3.75rem;
  width: 6.25rem;
  border: 1px solid ${colors.borderGrey};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: white;
  z-index: 15;
  cursor: pointer;
`;

export const Content = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  .number {
    margin-left: 15px;
    color: ${(props) => (props.isSelected ? colors.fontGreen : colors.black)};
    font-size: 13px;
  }
  svg {
    visibility: ${(props) => (props.isSelected ? 'visible' : 'hidden')};
    margin-left: auto;
    margin-top: 5px;
  }
  &:hover {
    background-color: ${colors.hoverGrey};
  }
`;
