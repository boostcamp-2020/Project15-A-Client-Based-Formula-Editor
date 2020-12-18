import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import {
  showFontSizeDropdown,
  changeFontSize,
  closeFontSizeDropdown,
} from '@src/store/modules/fontSizeDropdown';
import useOutsideClick from '@src/hooks/useOutSideClick';
import fontSizeList from '@src/constants/fontSizeList';
import FontContent from './FontContent';
import FontButton from './FontButton';
import * as S from './style';

export default function FontDropDown() {
  const { fontSizeDropdown, selectedFontSize } = useSelector(
    (state: RootState) => state.fontSizeDropdownReducer
  );

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(showFontSizeDropdown());
  };

  const handleChagneFontSize = (size: number) => {
    dispatch(changeFontSize(size));
  };
  const fontRef = useRef<HTMLDivElement>(null);
  useOutsideClick(fontRef, fontSizeDropdown, closeFontSizeDropdown);
  // const fonts = [15, 16, 19, 24, 28, 30, 34];

  const fontList: JSX.Element[] = fontSizeList.map(
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
      <S.DropDownContent fontSizeDropdown={fontSizeDropdown}>
        {fontList}
      </S.DropDownContent>
    </S.FontDropdown>
  );
}
