import React from 'react';
import * as StyleComponent from './LeftSectionStyle';

interface Props {
  InputSectionContainer: JSX.Element;
  ResizingBar: JSX.Element;
  BottomWhiteSpace: JSX.Element;
  SplitArea: JSX.Element;
}

const LeftSectionTemplate = ({
  InputSectionContainer,
  ResizingBar,
  BottomWhiteSpace,
  SplitArea,
}: Props) => {
  return (
    <StyleComponent.Aside>
      {InputSectionContainer}
      {ResizingBar}
      {SplitArea}
      {BottomWhiteSpace}
    </StyleComponent.Aside>
  );
};

export default LeftSectionTemplate;
