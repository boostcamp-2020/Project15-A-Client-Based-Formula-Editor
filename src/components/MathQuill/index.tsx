import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import { addStyles, EditableMathField } from 'react-mathquill';
import * as StyleComponent from './style';

addStyles();

const EditableMathExample = () => {
  const [latex, setLatex] = useState('kkkk');
  const { isDecline } = useSelector((state: rootState) => state.declineHandler);
  return (
    <StyleComponent.MathField isDecline={isDecline}>
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
