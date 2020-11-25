import styled from 'styled-components';
import colors from '@src/utils/colors';

interface Props {
  active?: boolean;
}

export const FontColorDropdown = styled.div``;

export const ColorBlind = styled.div<Props>`
  width: 0.5rem;
  height: 2px;
  background-color: ${(props) => props.active? colors.fontGreen: (props.color || colors.black)};
`;

export const DropdownButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  cursor: pointer;

  ${ColorBlind}{
    width: 100%;
  }
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ColorBox = styled.div`
  margin-right:0.3rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props)=>props.color};
  cursor: pointer;
`;
export const DropdownContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  border: solid 1px ${colors.borderGrey};
  z-index: 10;
`;