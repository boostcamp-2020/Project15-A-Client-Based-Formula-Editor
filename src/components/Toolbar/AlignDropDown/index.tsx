import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import * as fontAlignHandler from '@src/store/modules/fontAlign';
import Button from './Button';
import AlignContent from './AlignContent';
import * as StyledComponent from './style';

const AlignButton = () => {
  const { isAlign, fontAlign } = useSelector(
    (state: rootState) => state.fontAlignHandler
  );
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(fontAlignHandler.changeDropdownState());
  };
  const onChangeAlignHandler = () => {};

  return (
    <StyledComponent.AlignDropdown>
      <Button
        onClick={onClickHandler}
        isAlign={isAlign}
        fontAlign={fontAlign}
      />
      {isAlign && (
        <AlignContent align={fontAlign} changeAlign={onChangeAlignHandler} />
      )}
    </StyledComponent.AlignDropdown>
  );
};

export default AlignButton;
