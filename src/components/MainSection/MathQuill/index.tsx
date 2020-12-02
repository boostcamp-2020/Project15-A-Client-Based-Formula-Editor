import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState } from '@src/store/modules';
import { mathQuill } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

interface Props {
  isActive: boolean;
  canDrop: boolean;
}

const EditableMathExample = ({ isActive, canDrop }: Props) => {
  const [latex, setLatex] = useState('kkkk');
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
          setLatex(mathField.latex());
        }}
        mathquillDidMount={(mathField) => {
          handleMathQuill(mathField);
        }}
      />
    </StyleComponent.MathField>
  );
};

export default EditableMathExample;
