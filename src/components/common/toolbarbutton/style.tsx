import styled from 'styled-components';

export const CustomButton = styled.div`
  & svg {
    background-color: ${(props) => props.color};
  }
  & svg:hover {
    border: 1px solid #fff;
  }
  cursor: pointer;
`;
