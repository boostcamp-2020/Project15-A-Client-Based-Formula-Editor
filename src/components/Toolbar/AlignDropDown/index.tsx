import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import * as fontAlignReducer from '@src/store/modules/fontAlign';
import useOutsideClick from '@src/hooks/useOutSideClick';
import Button from './Button';
import AlignContent from './AlignContent';
import * as StyledComponent from './style';

const AlignButton = () => {
  const { fontAlignDropdown, fontAlign } = useSelector(
    (state: RootState) => state.fontAlignReducer
  );
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(fontAlignReducer.showFontAlignDropdown());
  };
  const onChangeAlignHandler = (position: string) => {
    dispatch(fontAlignReducer.changeFontAlign(position));
  };
  const alignRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    alignRef,
    fontAlignDropdown,
    fontAlignReducer.closeFontAlignDropdown
  );

  return (
    <StyledComponent.AlignDropdown ref={alignRef}>
      <Button onClick={onClickHandler} fontAlign={fontAlign} />
      {fontAlignDropdown && <AlignContent changeAlign={onChangeAlignHandler} />}
    </StyledComponent.AlignDropdown>
  );
};

export default AlignButton;
