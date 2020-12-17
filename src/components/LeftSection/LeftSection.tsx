import React from 'react';
import LeftSectionTemplate from './LeftSectionTemplate';
import InputSelectionSection from './InputSelectionSection';
import ResizingBar from './ResizingBar';
import BottomWhiteSpace from './BottomWhiteSpace';
import SplitArea from './SplitArea';

const LeftSection = () => {
  return (
    <>
      <LeftSectionTemplate
        InputSectionContainer={<InputSelectionSection />}
        SplitArea={<SplitArea />}
        ResizingBar={<ResizingBar />}
        BottomWhiteSpace={<BottomWhiteSpace />}
      />
    </>
  );
};

export default LeftSection;
