import styled from 'styled-components';
import { RoundButton } from '@src/components/Common/RoundButton/style';

interface Props {
  show: boolean;
}
export const ButtonContainer = styled(RoundButton)`
  svg {
    background-color: transparent;
  }
`;
