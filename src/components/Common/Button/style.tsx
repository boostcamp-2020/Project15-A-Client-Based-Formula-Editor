import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  margin-left: 5px;
  border-radius: 7px;
  border: none;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  outline: 0;
  color: ${colors.white};
  background-color: ${colors.mainGreen};
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;
