import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import { GlobalStyle } from '@src/utils/global-style';

addStyles();

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
    </>
  );
};

export default App;
