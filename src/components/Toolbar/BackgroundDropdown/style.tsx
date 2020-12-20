import styled from 'styled-components';
import colors from '@src/utils/colors';
import { RoundButton } from '@src/components/Common/RoundButton/style';

interface Props {
  backgroundDropdown: boolean;
}
export const BackgroundDropdownButton = styled(RoundButton)<Props>`
  background-color: ${(props) =>
    props.backgroundDropdown ? colors.darkGrey : colors.white};
  svg path {
    fill: ${(props) => props.backgroundDropdown && colors.white};
  }

  &:hover {
    background-color: ${(props) =>
      props.backgroundDropdown ? colors.darkGrey : '#f1f3f4'};
    opacity: 0.8;
  }
`;

export const BackgroundContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3.75rem;
  width: 70px;
  padding: 12px;
  border: solid 1px ${colors.borderGrey};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  justify-content: space-between;
  z-index: 15;
  & svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    border: solid 1px ${colors.borderGrey};
    border-radius: 4px;
  }
  & svg:hover {
    background-color: ${colors.hoverGrey};
    border-radius: 4px;
  }
  input {
    width: 10px;
  }
`;
