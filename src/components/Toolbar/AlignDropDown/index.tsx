import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import * as fontAlignHandler from '@src/store/modules/fontAlign';
import AlignCenter from '@src/utils/svg/toolbar/align-center.svg';
import useOutsideClick from '@src/hooks/useOutSideClick';
import Button from './Button';
import AlignContent from './AlignContent';
import * as StyledComponent from './style';

const AlignButton = () => {
  const { isAlign, fontAlign } = useSelector(
    (state: RootState) => state.fontAlignHandler
  );
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(fontAlignHandler.changeDropdownState());
  };
  const onChangeAlignHandler = (position: string) => {
    dispatch(fontAlignHandler.changeFontAlign(position));
  };
  const alignRef = useRef<HTMLDivElement>(null);
  useOutsideClick(alignRef, isAlign, fontAlignHandler.closeDropdown);

  return (
    <StyledComponent.AlignDropdown ref={alignRef}>
      <Button onClick={onClickHandler} fontAlign={fontAlign} />
      {isAlign && <AlignContent changeAlign={onChangeAlignHandler} />}
    </StyledComponent.AlignDropdown>
  );
};

export default AlignButton;
