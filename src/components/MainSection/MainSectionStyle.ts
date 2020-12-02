import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MainSectionTemplate = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const TextArea = styled.div`
  background-color: #e1e0de;
  width: 100%;
  height: 100%;
`;

export const LaTeX = styled.div`
  background-color: #c9c9c9;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: auto;
`;

export const Tab = styled.div`
  background-color: ${colors.grey};
  width: 100%;
  height: 2.3rem;
`;
