import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  display: inline-block;
  width: 100px;
  height: 100%;
  outline: 0;
  border-radius: 7px;
  border: none;
  background-color: ${colors.mainGreen};
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
`;

export const Span = styled.span`
  display: inline-block;
  position: relative;
  transition: 0.5s;
  cursor: pointer;

  &::after {
    position: absolute;
    top: 0;
    right: -20px;
    opacity: 0;
    transition: 0.5s;
    content: '\\00bb';
  }

  ${CustomButton}:hover & {
    padding-right: 25px;
  }

  ${CustomButton}:hover &::after {
    right: 0;
    opacity: 1;
  }
`;
