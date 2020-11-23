import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';

addStyles();

const EditableMathExample: React.FC = () => {
  const [latex, setLatex] = useState('\\sqrt{}');
  const [multiply, setMultiply] = useState('\\frac{}{}');
  const [integral, setIntegral] = useState('\\int_{}^{}{}');
  const [sum, setSum] = useState('\\sum_{}^{}{}');
  return (
    <div>
      <Header />
      <EditableMathField
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />
      <EditableMathField
        latex={multiply}
        onChange={(mathField) => {
          setMultiply(mathField.latex());
        }}
      />
      <EditableMathField
        latex={integral}
        onChange={(mathField) => {
          setIntegral(mathField.latex());
        }}
      />
      <EditableMathField
        latex={sum}
        onChange={(mathField) => {
          setSum(mathField.latex());
        }}
      />
    </div>
  );
};

const StaticMathExample = () => (
  <StaticMathField>{'\\frac{1}{\\sqrt{2}}\\cdot 2'}</StaticMathField>
);

export default EditableMathExample;
