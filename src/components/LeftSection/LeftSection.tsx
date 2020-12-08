import React from 'react';
import LeftSectionTemplate from './LeftSectionTemplate';
import InputSelectionSection from './InputSelectionSection';
import ResizingBar from './ResizingBar';
import TempArea from './TempArea';
import SplitArea from './SplitArea';

const LeftSection = () => {
  return (
    <>
      <LeftSectionTemplate
        InputSectionContainer={<InputSelectionSection />}
        SplitArea={<SplitArea />}
        ResizingBar={<ResizingBar />}
        TempArea={<TempArea />}
      />
    </>
  );
};

export default LeftSection;
