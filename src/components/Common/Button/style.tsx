import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: 3px;
  margin-right: 1.87rem;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: bold;
  outline: none;
  &: hover {
    color: ${colors.mainGreen};
  }
`;
