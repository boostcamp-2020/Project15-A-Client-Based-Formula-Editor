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
  alert: JSX.Element;
}

const MainSectionTemplate = ({
  mainSectionRef,
  mathQuill,
  latex,
  tab,
  resizing,
  height,
  canvas,
  alert,
}: Props) => {
  return (
    <StyleComponent.MainSectionTemplate ref={resizing}>
      <StyleComponent.TextArea height={height} ref={mainSectionRef}>
        {alert}
        {mathQuill}
        {canvas}
      </StyleComponent.TextArea>
      <StyleComponent.LaTeX height={height}>{latex}</StyleComponent.LaTeX>
      <StyleComponent.Tab>{tab}</StyleComponent.Tab>
    </StyleComponent.MainSectionTemplate>
  );
};

export default MainSectionTemplate;
