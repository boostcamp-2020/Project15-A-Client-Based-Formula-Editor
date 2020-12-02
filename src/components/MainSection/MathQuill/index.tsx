import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState, RootState } from '@src/store/modules';
import { mathQuill, change } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

interface Props {
  isActive: boolean;
  canDrop: boolean;
  latex: string;
}

const EditableMathExample = ({ isActive, canDrop, latex }: Props) => {
  const { isDecline } = useSelector((state: rootState) => state.declineHandler);
  const { fontAlign } = useSelector(
    (state: rootState) => state.fontAlignHandler
  );
  const dispatch = useDispatch();

  const handleMathQuill = (mathquill: any) => {
    dispatch(mathQuill(mathquill));
  };

  return (
    <StyleComponent.MathField
      isActive={isActive}
      canDrop={canDrop}
      isDecline={isDecline}
      fontAlign={fontAlign}
    >
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          dispatch(change(mathField.latex()));
        }}
        mathquillDidMount={(mathField) => {
          handleMathQuill(mathField);
        }}
      />
    </StyleComponent.MathField>
  );
};

export default EditableMathExample;
