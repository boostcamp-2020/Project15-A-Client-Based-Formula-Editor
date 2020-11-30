import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import Button from './Button';
import AlignContent from './AlignContent';
import * as StyledComponent from './style';

const AlignButton = () => {
  const { isAlign, fontAlign } = useSelector(
    (state: rootState) => state.fontAlignHandler
  );
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log('?');
  };
  const onChangeAlignHandler = () => {};
  const aligns = ['left', 'center', 'right'];
  const AlignList: JSX.Element[] = aligns.map(
    (align): JSX.Element => {
      return (
        <AlignContent
          key={`align_${align}`}
          align={align}
          changeAlign={onChangeAlignHandler}
        />
      );
    }
  );
  return (
    <StyledComponent.AlignDropdown>
      <Button
        onClick={onClickHandler}
        isAlign={isAlign}
        fontAlign={fontAlign}
      />
      <div>{AlignList}</div>
    </StyledComponent.AlignDropdown>
  );
};

export default AlignButton;
