import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: ${colors.mainGreen};
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  width: 100px;
  height: 100%;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  margin-right: 1rem;
`;

export const Span = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &::after {
    content: '\\00bb';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }

  ${CustomButton}: hover & {
    padding-right: 25px;
  }

  ${CustomButton}: hover &::after {
    opacity: 1;
    right: 0;
  }
`;
