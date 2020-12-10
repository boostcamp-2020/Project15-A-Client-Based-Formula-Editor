import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${colors.white};
  border: 2px solid ${colors.grey};
  border-radius: 3px;
  margin-right: 1.87rem;
  color: ${colors.grey};
  cursor: pointer;
  font-size: 13px;
  color: ${colors.black};
  font-weight: bold;
  outline: none;
  transition-duration: 0.4s;
  &: hover {
    background-color: ${colors.grey};
    color: ${colors.white};
  }
`;
