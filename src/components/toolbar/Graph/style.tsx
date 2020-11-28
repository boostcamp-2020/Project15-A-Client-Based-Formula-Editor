import styled, { keyframes } from 'styled-components';
import colors from '@src/utils/colors';

interface Props {
  show: boolean;
}
const slideUp = keyframes`
  from {
    opacity: 0;
    transform : translateX(100px);
  }to{
    opacity: 1;
    transform : translateX(0);
  }
`;
const slideDown = keyframes`
  from {
    opacity: 1;
    transform : translateX(0);
  }to{
    opacity: 0;
    transform : translateX(100px);
  }
`;
export const ButtonContainer = styled.div`
  background-color: black;
  cursor: pointer;
  svg {
    background-color: transparent;
  }
`;
export const Div = styled.div`
  display: flex;
`;
export const GraphContainer = styled.div<Props>`
  width: 100px;
  height: 100px;
  margin-left: auto;
  background-color: green;
  z-index: 1;
  display: ${(props) => (props.show ? 'block' : 'none')};
  animation: ${(props) => (props.show ? slideUp : slideDown)} 1s linear;
`;
