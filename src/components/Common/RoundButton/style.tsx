import styled from 'styled-components';
import colors from '@src/utils/colors';

export const RoundButton = styled.div`
  display: flex;
  width: 2rem;
  height: 2rem;
  border-radius: 3.125rem;
  background-color: ${colors.white};
  overflow: hidden;
  cursor: pointer;
  .title {
    margin: auto;
    color: ${colors.black};
    font-family: 'Times New Roman', Times, serif;
    font-size: 1 rem;
    font-weight: bold;
  }
  .italic {
    margin: auto;
    color: ${colors.black};
    font-family: 'Times New Roman', Times, serif;
    font-size: 1 rem;
    font-weight: bold;
    font-style: italic;
  }
  svg {
    margin: auto;
  }
  &:hover {
    background-color: #f1f3f4;
  }
`;
