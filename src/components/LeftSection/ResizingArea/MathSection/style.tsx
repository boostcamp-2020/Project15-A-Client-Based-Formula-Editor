import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MathSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 97%;
  height: 100%;
  border: 1px solid ${colors.borderGrey};
  background-color: ${colors.white};
`;
export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: ${colors.white};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3.5px;
    background-color: ${colors.lightGrey};

    &:hover {
      background-color: ${colors.grey};
    }
  }
  &::-webkit-scrollbar-track {
    background: ${colors.white};
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
