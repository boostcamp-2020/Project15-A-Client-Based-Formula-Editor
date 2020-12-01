import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { mathQuill } from '@src/store/modules/mathQuill';
import { addStyles, EditableMathField } from 'react-mathquill';
import { useDrop } from 'react-dnd';
import * as StyleComponent from './style';

addStyles();

const EditableMathExample = () => {
  const [latex, setLatex] = useState('kkkk');

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
    <StyleComponent.MathField isActive={isActive} canDrop={canDrop}>
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
