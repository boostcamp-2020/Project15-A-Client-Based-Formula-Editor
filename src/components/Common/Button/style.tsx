import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  margin-left: 5px;
  outline: 0;
  border-radius: 7px;
  border: none;
  background-color: ${colors.mainGreen};
  color: ${colors.white};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
