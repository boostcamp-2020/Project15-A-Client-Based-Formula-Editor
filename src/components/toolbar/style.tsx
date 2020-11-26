import styled from 'styled-components';
import colors from '@src/utils/colors';

export const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 35rem;
  background-color: ${colors.mainGreen};
  height: 59px;
  .attributes {
    display: flex;
  }
  .options {
    display: flex;
  }
`;
