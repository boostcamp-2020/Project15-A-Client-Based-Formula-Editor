import styled from 'styled-components';
import colors from '@src/utils/colors';
import { RoundButton } from '@src/components/Common/RoundButton/style';

interface Props {
  paintDropdown: boolean;
}
export const DropdownButton = styled(RoundButton)<Props>`
  background-color: ${(props) =>
    props.paintDropdown ? colors.darkGrey : colors.white};
  svg {
    fill: ${(props) => props.paintDropdown && colors.white};
  }

  &:hover {
    background-color: ${(props) =>
      props.paintDropdown ? colors.darkGrey : '#f1f3f4'};
    opacity: 0.8;
  }
`;
export const DrawerContainer = styled.div`
  display: flex;
  position: absolute;
  top: 3.75rem;
  padding: 12px;
  border: solid 1px ${colors.borderGrey};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  background-color: ${colors.white};
  align-items: center;
  justify-content: space-between;
  z-index: 15;
  svg {
    margin-left: 0.3rem;
  }
  button {
    border: none;
    background-color: ${colors.white};
    cursor: pointer;
  }
`;
export const DrawerDiv = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  & + & {
    margin-left: 0.3rem;
  }
`;
