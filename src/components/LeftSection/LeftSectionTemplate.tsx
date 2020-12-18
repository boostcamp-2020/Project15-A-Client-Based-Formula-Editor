import React from 'react';
import * as StyleComponent from './LeftSectionStyle';

interface Props {
  InputSectionContainer: JSX.Element;
  ResizingBar: JSX.Element;
  BottomWhiteSpace: JSX.Element;
  ResizingArea: JSX.Element;
}

const LeftSectionTemplate = ({
  InputSectionContainer,
  ResizingBar,
  BottomWhiteSpace,
  ResizingArea,
}: Props) => {
  return (
    <StyleComponent.Aside>
      {InputSectionContainer}
      {ResizingBar}
      {ResizingArea}
      {BottomWhiteSpace}
    </StyleComponent.Aside>
  );
};

export default LeftSectionTemplate;
