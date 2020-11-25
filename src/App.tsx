import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';

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
    </div>
  );
};

export default App;
