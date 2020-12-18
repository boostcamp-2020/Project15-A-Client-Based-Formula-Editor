import React from 'react';
import LeftSectionTemplate from './LeftSectionTemplate';
import InputSelectionSection from './InputSelectionSection';
import ResizingBar from './ResizingBar';
import BottomWhiteSpace from './BottomWhiteSpace';
import ResizingArea from './ResizingArea';

const LeftSection = () => {
  return (
    <>
      <LeftSectionTemplate
        InputSectionContainer={<InputSelectionSection />}
        ResizingArea={<ResizingArea />}
        ResizingBar={<ResizingBar />}
        BottomWhiteSpace={<BottomWhiteSpace />}
      />
    </>
  );
};

export default LeftSection;
