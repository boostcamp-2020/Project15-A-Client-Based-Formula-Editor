import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import ToolBar from '@src/components/toolbar';
import { GlobalStyle } from '@src/utils/global-style';

addStyles();

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ToolBar />
    </>
  );
};

export default App;
