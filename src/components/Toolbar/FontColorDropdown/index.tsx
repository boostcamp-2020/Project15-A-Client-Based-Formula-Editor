import React from 'react';
import { RootState } from '@src/store/modules';
import * as FontColorDropdownAction from '@src/store/modules/fontColorDropdown';
import { useDispatch, useSelector } from 'react-redux';
import FontColorButton from './Button';
import FontColorDropdownContent from './DropdownContent';
import * as StyleComponent from './style';

const FontColorDropdown = () => {
  const { isActive, fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownHandler
  );
  const dispatch = useDispatch();

  const changeFontColor = (color: string) => {
    dispatch(FontColorDropdownAction.changeColor(color));
  };
  const onClickHandler = () => {
    dispatch(FontColorDropdownAction.changeDropdownState());
  };
  return (
    <StyleComponent.FontColorDropdown>
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
