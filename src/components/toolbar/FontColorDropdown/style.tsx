import styled from 'styled-components';
import colors from '@src/utils/colors';

interface Props {
  active?: boolean;
}
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
