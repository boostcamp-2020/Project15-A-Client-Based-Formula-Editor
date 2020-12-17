import React from 'react';
import SplitPane from 'react-split-pane';
import MathSectionContainer from './MathSection';
import TemplateContainer from './TemplateSection';

const SplitArea = () => {
  return (
    <SplitPane split="horizontal" defaultSize="50%">
      <MathSectionContainer />
      <TemplateContainer />
    </SplitPane>
  );
};

export default SplitArea;
