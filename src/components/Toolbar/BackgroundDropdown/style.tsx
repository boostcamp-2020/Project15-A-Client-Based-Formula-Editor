import styled from 'styled-components';
import colors from '@src/utils/colors';

export const BackgroundContainer = styled.div`
  display: flex;
  width: 70px;
  justify-content: space-between;
  z-index: 1;
  position: absolute;
  top: 3.75rem;
  border: solid 1px ${colors.borderGrey};
  background-color: ${colors.white};
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px;
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
export const BackgroundContent = styled.div``;
