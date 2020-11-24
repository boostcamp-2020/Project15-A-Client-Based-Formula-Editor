import React, { useState } from 'react';
import styled from 'styled-components';

import FontButton from '@src/components/toolbar/FontDropDown/FontButton.tsx';
import FontContent from '@src/components/toolbar/FontDropDown/FontContent.tsx';

const DropDown = styled.div`
  width: 100px;
`;

const DropDownContent = styled.div`
  width: 100px;
  border: 1px solid;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export default function FontDropDown() {
  return (
    <DropDown>
      <FontButton />
      <DropDownContent>
        <FontContent fontSize={11} />
        <FontContent fontSize={13} />
        <FontContent fontSize={15} />
        <FontContent fontSize={16} />
        <FontContent fontSize={19} />
        <FontContent fontSize={24} />
        <FontContent fontSize={28} />
        <FontContent fontSize={30} />
        <FontContent fontSize={34} />
        <FontContent fontSize={38} />
      </DropDownContent>
    </DropDown>
  );
}
