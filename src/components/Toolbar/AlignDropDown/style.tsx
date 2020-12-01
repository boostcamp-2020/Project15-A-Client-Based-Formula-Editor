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
  border: solid 1px ${colors.borderGrey};
  z-index: 2;
`;

export const AlignDropdown = styled.div``;

export const RowContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const ColorBox = styled.div`
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  & + & {
    margin-left: 0.3rem;
  }
  &:hover {
    border: solid 1px black;
  }
`;
