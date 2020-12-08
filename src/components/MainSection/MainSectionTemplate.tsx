import React, { MutableRefObject } from 'react';
import * as StyleComponent from './MainSectionStyle';

interface Props {
  mainSectionRef: MutableRefObject<HTMLDivElement>;
  mathQuill: JSX.Element;
  latex: JSX.Element;
  tab: JSX.Element;
  resizing: any;
  height: number;
  canvas: JSX.Element;
  isBackground: any;
}

const MainSectionTemplate = ({
  mainSectionRef,
  mathQuill,
  latex,
  tab,
  resizing,
  height,
  canvas,
  isBackground,
}: Props) => {
  return (
    <StyleComponent.MainSectionTemplate ref={resizing}>
      <StyleComponent.TextArea
        isBackground={isBackground}
        height={height}
        ref={mainSectionRef}
      >
        {mathQuill}
        {canvas}
      </StyleComponent.TextArea>
      <StyleComponent.LaTeX height={height}>{latex}</StyleComponent.LaTeX>
      <StyleComponent.Tab>{tab}</StyleComponent.Tab>
    </StyleComponent.MainSectionTemplate>
  );
};

export default MainSectionTemplate;
