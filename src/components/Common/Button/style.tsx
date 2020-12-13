import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${colors.mainGreen};
  border-radius: 7px;
  color: ${colors.grey};
  cursor: pointer;
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  border: none;
  outline: 0;
  text-align: center;
  margin-left: 5px;
  &:hover {
    opacity: 0.6;
  }
`;
