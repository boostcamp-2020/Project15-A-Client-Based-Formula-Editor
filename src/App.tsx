import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';

addStyles();

const App: React.FC = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
