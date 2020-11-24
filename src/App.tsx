import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import FontDropDown from '@src/components/toolbar/FontDropDown';

addStyles();

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <FontDropDown />
    </div>
  );
};

export default App;
