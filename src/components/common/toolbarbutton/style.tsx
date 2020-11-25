import styled from 'styled-components';

export const CustomButton = styled.svg`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  border: 1px solid #fbfbfb;
  cursor: pointer;
`;
