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
  .italic {
    margin: auto;
    font-family: 'Times New Roman', Times, serif;
    font-size: 1 rem;
    font-weight: bold;
    color: ${colors.black};
    font-style: italic;
  }
  svg {
    margin: auto;
  }
  &:hover {
    background-color: #f1f3f4;
  }
`;
