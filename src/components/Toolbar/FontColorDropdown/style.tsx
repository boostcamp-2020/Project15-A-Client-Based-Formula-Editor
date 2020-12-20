import styled from 'styled-components';
import colors from '@src/utils/colors';
import { RoundButton } from '@src/components/Common/RoundButton/style';

export interface Props {
  active?: boolean;
}

export const FontColorDropdown = styled.div``;

export const ColorBlind = styled.div<Props>`
  position: absolute;
  top: 1.5rem;
  width: 0.9rem;
  height: 0.2rem;
  background-color: ${(props) =>
    props.active ? colors.fontGreen : props.color || colors.black};
`;

export const DropdownButton = styled(RoundButton)`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;
export const ColorBox = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border: 1px solid ${colors.borderGrey};
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    border: solid 1px ${colors.black};
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3.75rem;
  width: fit-content;
  padding: 12px;
  border: solid 1px ${colors.borderGrey};
  background-color: ${colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 15;
`;
