import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { rootState, RootState } from '@src/store/modules';
import { mathQuill, change } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField } from 'react-mathquill';
import { useDrop } from 'react-dnd';
import * as StyleComponent from './style';

addStyles();
interface mathquillProps {
  latex: string;
}
const EditableMathExample = ({ latex }: mathquillProps) => {
  const { isDecline } = useSelector((state: rootState) => state.declineHandler);
  const { fontAlign } = useSelector(
    (state: rootState) => state.fontAlignHandler
  );
  const dispatch = useDispatch();

  const handleMathQuill = (mathquill: any) => {
    dispatch(mathQuill(mathquill));
  };

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'box',
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

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
