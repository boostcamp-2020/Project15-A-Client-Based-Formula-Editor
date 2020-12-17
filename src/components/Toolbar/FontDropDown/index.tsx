import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import {
  toggle,
  changeFontSize,
  closeDropdown,
} from '@src/store/modules/fontSizeDropdown';
import useOutsideClick from '@src/hooks/useOutSideClick';
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
  const fontRef = useRef<HTMLDivElement>(null);
  useOutsideClick(fontRef, dropDown === 'open', closeDropdown);
  const fonts = [15, 16, 19, 24, 28, 30, 34];

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
    <S.FontDropdown ref={fontRef}>
      <FontButton
        changeStatus={handleToggle}
        selectedFontSize={selectedFontSize}
      />
      <S.DropDownContent dropDown={dropDown}>{fontList}</S.DropDownContent>
    </S.FontDropdown>
  );
}
