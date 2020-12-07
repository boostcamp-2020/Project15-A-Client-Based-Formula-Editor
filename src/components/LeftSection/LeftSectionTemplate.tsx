import React from 'react';
import * as StyleComponent from './LeftSectionStyle';

interface Props {
  InputSectionContainer: JSX.Element;
  MathSectionContainer: JSX.Element;
  TemplateContainer: JSX.Element;
  ResizingBar: JSX.Element;
  TempArea: JSX.Element;
}

const LeftSectionTemplate = ({
  InputSectionContainer,
  MathSectionContainer,
  TemplateContainer,
  ResizingBar,
  TempArea,
}: Props) => {
  return (
    <StyleComponent.Aside>
      {InputSectionContainer}
      {ResizingBar}
      {MathSectionContainer}
      {ResizingBar}
      {TemplateContainer}
      {TempArea}
    </StyleComponent.Aside>
  );
};

export default LeftSectionTemplate;
