import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
  background-color: ${colors.containerBackground};
  border: 1px solid ${colors.borderGrey};
  border-radius: 3px;
  margin-right: 30px;
  color: ${(props) => props.color};
  cursor: pointer;
  font-weight: normal;
  &:hover {
    color: ${colors.mainGreen};
  }
`;
