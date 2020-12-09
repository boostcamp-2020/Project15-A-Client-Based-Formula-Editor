import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@src/store/modules';
import { mathQuill, change } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField, MathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

interface Props {
  isActive: boolean;
  canDrop: boolean;
  latex: string;
  isBackgroundDropdownShow: boolean;
  dragndrop: any;
  isDropdownShow: boolean;
}

const EditableMathExample = ({
  isActive,
  canDrop,
  latex,
  isBackgroundDropdownShow,
  dragndrop,
  isDropdownShow,
}: Props) => {
  const { isDecline } = useSelector((state: RootState) => state.declineHandler);
  const { fontAlign } = useSelector(
    (state: RootState) => state.fontAlignHandler
  );
  const { selectedFontSize } = useSelector(
    (state: RootState) => state.fontDropDownReducer
  );
  const { fontColor } = useSelector(
    (state: RootState) => state.fontColorDropdownHandler
  );
  const dispatch = useDispatch();

  const handleMathQuill = (mathquill: any) => {
    dispatch(mathQuill(mathquill));
  };

  const changeHandler = (mathField: MathField) => {
    dispatch(change(mathField.latex()));
  };
  return (
    <StyleComponent.MathField
      isActive={isActive}
      canDrop={canDrop}
      isDecline={isDecline}
      fontAlign={fontAlign}
      fontSize={selectedFontSize}
      fontColor={fontColor}
      isBackgroundDropdownShow={isBackgroundDropdownShow}
      isDropdownShow={isDropdownShow}
      ref={dragndrop}
    >
      <EditableMathField
        latex={latex}
        onChange={changeHandler}
        mathquillDidMount={(mathField) => {
          handleMathQuill(mathField);
        }}
      />
    </StyleComponent.MathField>
  );
};

export default EditableMathExample;
