import React, { useState } from 'react';
import SplitPane from 'react-split-pane';
import MathSectionContainer from '@src/components/LeftSection/MathSection';
import TemplateContainer from '@src/components/LeftSection/TemplateSection';

const SplitArea = () => {
  return (
    <SplitPane split="horizontal" defaultSize="50%">
      <MathSectionContainer />
      <TemplateContainer />
    </SplitPane>
  );
};

export default SplitArea;
