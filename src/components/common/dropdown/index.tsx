import React from 'react';
import Drawer from '@src/components/toolbar/DrawerDropDown';
import Background from '@src/components/toolbar/BackgroundDropdown';
import { DropdownDiv, DropdownContent } from './style';

interface DropDownProps {
  click: string;
}
const DropDown = ({ click }: DropDownProps) => {
  return (
    <DropdownDiv>
      <DropdownContent>
        {click === 'drawer' ? <Drawer /> : ''}
        {click === 'background' ? <Background /> : ''}
      </DropdownContent>
    </DropdownDiv>
  );
};

export default DropDown;
