import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  margin-left: 30px;
  height: 26px;
  margin-top: 40px;
  background-color: ${colors.containerBackground};
  border: 1px solid #d0d0d0;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #10df99;
  }
  &:nth-child(2) {
    margin-top: 1px;
  }
`;
