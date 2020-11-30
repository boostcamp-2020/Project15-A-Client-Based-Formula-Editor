import styled from 'styled-components';
import colors from '@src/utils/colors';
import { RoundButton } from '@src/components/Common/RoundButton/style';

export interface Props {
  active?: boolean;
}

export const FontColorDropdown = styled.div``;

export const ColorBlind = styled.div<Props>`
  position: absolute;
  width: 0.9rem;
  height: 0.2rem;
  top: 1.5rem;
  z-index: 1;
  background-color: ${(props) =>
    props.active ? colors.fontGreen : props.color || colors.black};
`;

export const DropdownButton = styled(RoundButton)`
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => props.color};
  cursor: pointer;
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    border: solid 1px black;
  }
`;
export const DropdownContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3.75rem;
  border: solid 1px ${colors.borderGrey};
  z-index: 10;
`;
