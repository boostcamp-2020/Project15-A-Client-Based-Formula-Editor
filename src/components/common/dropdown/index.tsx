import React from 'react';
import styled from 'styled-components';
import Drawer from '@src/components/toolbar/DrawerDropDown';

const DropdownDiv = styled.div`
  position: absolute;
  width: 40%;
`;
const DropdownContent = styled.div`
  width: 100%;
  height: 50px;
  border: 1px solid;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
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
