import styled from 'styled-components';
import { RoundButton } from '@src/components/Common/RoundButton/style';
import colors from '@src/utils/colors';

export const ButtonContainer = styled(RoundButton)`
  svg {
    background-color: transparent;
  }
`;
export const DropdownContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3.75rem;
  padding: 12px;
  border: solid 1px ${colors.borderGrey};
  background-color: ${colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const AlignDropdown = styled.div``;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ColorBox = styled.div`
  cursor: pointer;
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    border-radius: 4px;
    background-color: ${colors.hoverGrey};
  }
`;
