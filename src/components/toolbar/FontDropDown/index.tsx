import React, { useState } from 'react';
import FontContent from './FontContent';
import FontButton from './FontButton';
import * as S from './style';

export default function FontDropDown() {
  const [selectedFontSize, setSelectedFontSize] = useState(15);
  const [dropDown, setDropDown] = useState('open');

  const changeFontSize = (size: number) => {
    setSelectedFontSize(size);
  };

  const changeStatus = () => {
    if (dropDown === 'open') setDropDown('close');
    else setDropDown('open');
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
    <S.DropDown>
      <FontButton
        changeStatus={changeStatus}
        dropDown={dropDown}
        selectedFontSize={selectedFontSize}
      />
      <S.DropDownContent dropDown={dropDown}>{fontList}</S.DropDownContent>
    </S.DropDown>
  );
}
