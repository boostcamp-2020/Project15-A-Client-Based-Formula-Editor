import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import FontDropDown from '@src/components/toolbar/FontDropDown';
import { GlobalStyle } from '@src/utils/global-style';

addStyles();

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <FontDropDown />
    </div>
  );
};

export default App;
