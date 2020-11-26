import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import FontDropDown from '@src/components/toolbar/FontDropDown';
import FontColorDropdown from '@src/components/toolbar/FontColorDropdown';
import { GlobalStyle } from '@src/utils/global-style';
import Toolbar from '@src/components/toolbar';
import Mathquill from '@src/components/mathquill';

addStyles();

const App = () => {
  return (
    <div>
      <Mathquill />
      <GlobalStyle />
      <Header />
      <Toolbar />
      <FontDropDown />
      <FontColorDropdown />
    </div>
  );
};

export default App;
