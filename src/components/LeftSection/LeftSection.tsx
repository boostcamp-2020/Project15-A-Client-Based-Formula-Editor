import React from 'react';
import LeftSectionTemplate from './LeftSectionTemplate';
import InputSelectionSection from './InputSelectionSection';
import MathSection from './MathSection';
import ResizingBar from './ResizingBar';
import TempArea from './TempArea';
import TemplateSection from './TemplateSection';

const LeftSection = () => {
  return (
    <>
      <LeftSectionTemplate
        InputSectionContainer={<InputSelectionSection />}
        MathSectionContainer={<MathSection />}
        TemplateContainer={<TemplateSection />}
        ResizingBar={<ResizingBar />}
        TempArea={<TempArea />}
      />
    </>
  );
};

export default LeftSection;
