import styled from 'styled-components';
import colors from '@src/utils/colors';

export const ToolBarTemplate = styled.div`
  background-color: ${colors.mainGreen};
  height: 3rem;
  flex: none;
  position: relative;
  display: flex;
  align-items: center;
`;

export const Attributes = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: auto;
  align-items: center;
  width: 105px;
  margin-right: 20px;
`;
