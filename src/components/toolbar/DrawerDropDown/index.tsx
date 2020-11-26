import React from 'react';
import ERASE from '@src/utils/svg/erase.svg';
import * as StyleComponent from './style';

const Drawer = () => {
  const color = ['black', 'yellow', 'red', 'green'];
  const DrawerItem = color.map(
    (value): JSX.Element => {
      return <StyleComponent.DrawerDiv key={value.toString()} color={value} />;
    }
  );
  return (
    <StyleComponent.DrawerContainer>
      {DrawerItem}
      <ERASE />
      <input type="range" />
    </StyleComponent.DrawerContainer>
  );
};

export default Drawer;
