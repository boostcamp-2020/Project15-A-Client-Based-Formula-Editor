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
  const [selectedFontSize, setSelectedFontSize] = useState(15);

  const changeFontSize = (size: number) => {
    setSelectedFontSize(size);
  };

  const fonts = [11, 13, 15, 16, 19, 24, 28, 30, 34, 38];

  const fontList: JSX.Element[] = fonts.map(
    (font): JSX.Element => {
      return (
        <FontContent
          key={font}
          fontSize={font}
          changeFontSize={changeFontSize}
          selectedFontSize={selectedFontSize}
        />
      );
    }
  );

  return (
    <DropDown>
      <FontButton />
      <DropDownContent>{fontList}</DropDownContent>
    </DropDown>
  );
}
