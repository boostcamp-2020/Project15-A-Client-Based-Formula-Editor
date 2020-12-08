import React from 'react';
import * as StyleComponent from './LeftSectionStyle';

interface Props {
  InputSectionContainer: JSX.Element;
  ResizingBar: JSX.Element;
  TempArea: JSX.Element;
  SplitArea: JSX.Element;
}

const LeftSectionTemplate = ({
  InputSectionContainer,
  ResizingBar,
  TempArea,
  SplitArea,
}: Props) => {
  return (
    <StyleComponent.Aside>
      {InputSectionContainer}
      {ResizingBar}
      {SplitArea}
      {TempArea}
    </StyleComponent.Aside>
  );
};

export default LeftSectionTemplate;
