import React, { useRef } from 'react';
import { RootState } from '@src/store/modules';
import * as FontColorDropdownAction from '@src/store/modules/fontColorDropdown';
import { useDispatch, useSelector } from 'react-redux';
import useOutsideClick from '@src/hooks/useOutSideClick';
import FontColorButton from './Button';
import FontColorDropdownContent from './DropdownContent';
import * as StyleComponent from './style';

const FontColorDropdown = () => {
  const { isActive, fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownHandler
  );
  const dispatch = useDispatch();
  const colorRef = useRef<HTMLDivElement>(null);
  const changeFontColor = (color: string) => {
    dispatch(FontColorDropdownAction.changeColor(color));
  };

  const onClickHandler = () => {
    dispatch(FontColorDropdownAction.changeDropdownState());
  };
  useOutsideClick(colorRef, isActive, FontColorDropdownAction.closeDropdown);
  return (
    <StyleComponent.FontColorDropdown ref={colorRef}>
      <FontColorButton
        isActive={isActive}
        onClick={onClickHandler}
        fontColor={fontColor}
      />
      {isActive && <FontColorDropdownContent onClick={changeFontColor} />}
    </StyleComponent.FontColorDropdown>
  );
};

export default FontColorDropdown;
