import React, { useRef } from 'react';
import { RootState } from '@src/store/modules';
import {
  changeFontColor,
  showFontColorDropdown,
  closeFontColorDropdown,
} from '@src/store/modules/fontColorDropdown';
import { useDispatch, useSelector } from 'react-redux';
import useOutsideClick from '@src/hooks/useOutSideClick';
import FontColorButton from './Button';
import FontColorDropdownContent from './DropdownContent';
import * as StyleComponent from './style';

const FontColorDropdown = () => {
  const { fontColorDropdown, fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownReducer
  );
  const dispatch = useDispatch();
  const colorRef = useRef<HTMLDivElement>(null);
  const changeFontColorHandler = (color: string) => {
    dispatch(changeFontColor(color));
  };

  const onClickHandler = () => {
    dispatch(showFontColorDropdown());
  };
  useOutsideClick(colorRef, fontColorDropdown, closeFontColorDropdown);
  return (
    <StyleComponent.FontColorDropdown ref={colorRef}>
      <FontColorButton
        fontColorDropdown={fontColorDropdown}
        onClick={onClickHandler}
        fontColor={fontColor}
      />
      {fontColorDropdown && (
        <FontColorDropdownContent onClick={changeFontColorHandler} />
      )}
    </StyleComponent.FontColorDropdown>
  );
};

export default FontColorDropdown;
