import styled from 'styled-components';
import colors from '@src/utils/colors';

export const ToolBarTemplate = styled.div`
  flex: none;
  display: flex;
  position: relative;
  height: 3rem;
  background-color: ${colors.mainGreen};
  align-items: center;
`;

export const Attributes = styled.div`
  display: flex;
  width: 300px;
  margin-left: 20px;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const Options = styled.div`
  display: flex;
  width: 105px;
  margin-left: auto;
  margin-right: 20px;
  align-items: center;
  justify-content: space-between;
`;
