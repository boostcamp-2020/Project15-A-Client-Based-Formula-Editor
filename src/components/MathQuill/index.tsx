import React, { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import * as StyleComponent from './style';

addStyles();

const EditableMathExample: React.FC = () => {
  const [latex, setLatex] = useState('kkkk');

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let backgroundColor = '#222';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return (
    <StyleComponent.MathField backgroundColor={backgroundColor}>
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />
    </StyleComponent.MathField>
  );
};

export default EditableMathExample;
