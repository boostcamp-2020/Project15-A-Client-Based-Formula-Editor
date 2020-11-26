import React, { useState } from 'react';
import { addStyles, EditableMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

const EditableMathExample = () => {
  const [latex, setLatex] = useState('kkkk');

  return (
    <StyleComponent.MathField>
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
