import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { toggle, changeFontSize } from '@src/store/modules/font-dropdown';
import FontContent from './FontContent';
import FontButton from './FontButton';
import * as S from './style';

export default function FontDropDown() {
  const { dropDown, selectedFontSize } = useSelector(
    (state: RootState) => state.fontDropDownReducer
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggle());
  };

  const handleChagneFontSize = (size: number) => {
    dispatch(changeFontSize(size));
  };

  const fonts = [11, 13, 15, 16, 19, 24, 28, 30, 34, 38];

  const fontList: JSX.Element[] = fonts.map(
    (font): JSX.Element => {
      return (
        <FontContent
          key={font}
          fontSize={font}
          changeFontSize={handleChagneFontSize}
          selectedFontSize={selectedFontSize}
        />
      );
    }
  );

  return (
    <>
      <FontButton
        changeStatus={handleToggle}
        selectedFontSize={selectedFontSize}
      />
      <S.DropDownContent dropDown={dropDown}>{fontList}</S.DropDownContent>
    </>
  );
}
