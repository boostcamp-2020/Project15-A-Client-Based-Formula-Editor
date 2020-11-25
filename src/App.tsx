import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';

addStyles();

const App: React.FC = () => {
  const [sum, setSum] = useState('\\sum_{}^{}{}');
  return (
    <div>
      <EditableMathField
        latex={sum}
        onChange={(mathField) => {
          setSum(mathField.latex());
        }}
      />
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
