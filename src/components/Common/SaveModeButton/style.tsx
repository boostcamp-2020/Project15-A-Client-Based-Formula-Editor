import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  display: inline-block;
  border-radius: 7px;
  border: none;
  outline: 0;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  background-color: ${colors.mainGreen};
  transition: all 0.5s;
  cursor: pointer;
`;

export const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &::after {
    position: absolute;
    top: 0;
    right: -20px;
    opacity: 0;
    content: '\\00bb';
    transition: 0.5s;
  }

  ${CustomButton}:hover & {
    padding-right: 25px;
  }

  ${CustomButton}:hover &::after {
    right: 0;
    opacity: 1;
  }
`;
