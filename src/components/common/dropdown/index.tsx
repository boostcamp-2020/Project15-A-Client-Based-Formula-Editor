import React from 'react';
import Drawer from '@src/components/toolbar/DrawerDropDown';
import { DropdownDiv, DropdownContent } from './style';

interface DropDownProps {
  click: string;
}
const DropDown = ({ click }: DropDownProps) => {
  return (
    <DropdownDiv>
      <DropdownContent>{click === 'drawer' ? <Drawer /> : ''}</DropdownContent>
    </DropdownDiv>
  );
};

export default DropDown;
