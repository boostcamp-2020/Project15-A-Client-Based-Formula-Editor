import styled from 'styled-components';
import colors from '@src/utils/colors';

export const MathSectionContainer = styled.div`
  background-color: ${colors.containerBackground};
  width: 95%;
  height: 25%;
  margin-top: 14px;
  border: 1px solid ${colors.borderGrey};
`;

export const Button = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border: none;
  cusor: pointer;
  &:hover {
    border: 1px solid black;
  }
`;
