import React, { useState } from 'react';
import { addStyles, EditableMathField, StaticMathField } from 'react-mathquill';
import Header from '@src/components/header';
import FontDropDown from '@src/components/toolbar/FontDropDown';
import FontColorDropdown from '@src/components/toolbar/FontColorDropdown';

addStyles();

const App= () => {
  return (
    <div>
      <Header />
      <FontDropDown />
      <FontColorDropdown/>
    </div>
  );
};

export default App;
