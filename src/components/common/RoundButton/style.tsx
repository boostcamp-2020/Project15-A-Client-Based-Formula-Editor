import styled from 'styled-components';
import colors from '@src/utils/colors';

export const RoundButton = styled.div`
  border-radius: 3.125rem;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
  display: flex;
  background-color: ${colors.white};
  overflow: hidden;
  .title {
    margin: auto;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1 rem;
    font-weight: bold;
    color: ${colors.black};
  }
  svg {
    margin: auto;
  }
  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
