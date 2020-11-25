import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import FontDropDown from '@src/components/toolbar/FontDropDown';
import { GlobalStyle } from '@src/utils/global-style';
import Toolbar from '@src/components/toolbar';

addStyles();

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Toolbar />
      <FontDropDown />
    </div>
  );
};

export default App;
