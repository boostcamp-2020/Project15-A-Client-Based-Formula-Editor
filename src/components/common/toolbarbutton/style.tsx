import styled from 'styled-components';

export const CustomButton = styled.div`
  & svg {
    background-color: ${(props) => props.color};
  }

  cursor: pointer;
`;
