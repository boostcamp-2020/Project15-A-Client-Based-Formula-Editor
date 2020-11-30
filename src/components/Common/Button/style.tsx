import styled from 'styled-components';
import colors from '@src/utils/colors';

export const CustomButton = styled.button`
  width: 100px;
  height: 100%;
<<<<<<< HEAD:src/components/common/Button/style.tsx
  background-color: ${colors.containerBackground};
  border: 1px solid ${colors.borderGrey};
=======
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
>>>>>>> 6abaa2eb3e34036c4cfbac804e2faae865743b54:src/components/Common/Button/style.tsx
  border-radius: 3px;
  margin-right: 1.87rem;
  color: ${(props) => props.color};
  cursor: pointer;
<<<<<<< HEAD:src/components/common/Button/style.tsx
  font-weight: normal;
  &:hover {
=======
  font-weight: bold;
  outline: none;
  &: hover {
>>>>>>> 6abaa2eb3e34036c4cfbac804e2faae865743b54:src/components/Common/Button/style.tsx
    color: ${colors.mainGreen};
  }
`;
