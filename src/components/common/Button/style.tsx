import styled from 'styled-components';

export const CustomButton = styled.button`
  width: 70px;
  height: 20px;
  font-size: 10px;
  color: ${(props) => props.color};
  border: 1px solid #fbfbfb;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    color: #10df99;
  }
`;
