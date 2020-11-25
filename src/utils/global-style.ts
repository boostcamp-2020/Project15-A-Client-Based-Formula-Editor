import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import colors from '@src/utils/colors';

export const GlobalStyle = createGlobalStyle`
${reset}
*{
  box-sizing:border-box;
  background-color:${colors.borderGrey};
}
`;
