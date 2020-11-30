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
