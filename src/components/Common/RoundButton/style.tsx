import styled from 'styled-components';
import colors from '@src/utils/colors';

export const RoundButton = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  border-radius: 3.125rem;
  background-color: ${colors.white};
  overflow: hidden;
  cursor: pointer;
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
    font-style: italic;
    color: ${colors.black};
  }
  svg {
    margin: auto;
  }
  &:hover {
    background-color: #f1f3f4;
  }
`;
