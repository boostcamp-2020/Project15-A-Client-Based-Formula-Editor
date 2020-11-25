import styled from 'styled-components';
import React from 'react';
import ERASE from '@src/utils/svg/erase.svg';

const DrawerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & svg {
    margin-top: 10px;
  }
  & input {
    margin-top: 10px;
  }
`;
const DrawerDiv = styled.div`
  border-radius: 3px;
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.color};
  margin-top: 10px;
`;

const Drawer = () => {
  const color = ['black', 'yellow', 'red', 'green'];
  const DrawerItem = color.map(
    (value): JSX.Element => {
      return <DrawerDiv key={value.toString()} color={value} />;
    }
  );
  return (
    <DrawerContainer>
      {DrawerItem}
      <ERASE />
      <input type="range" />
    </DrawerContainer>
  );
};

export default Drawer;
