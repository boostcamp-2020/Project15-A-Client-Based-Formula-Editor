import React, { MutableRefObject } from 'react';
import * as StyleComponent from './MainSectionStyle';

interface Props {
  mainSectionRef: MutableRefObject<HTMLDivElement>;
  mathQuill: JSX.Element;
  latex: JSX.Element;
  tab: JSX.Element;
  resizing: any;
  height: number;
}

const MainSectionTemplate = ({
  mainSectionRef,
  mathQuill,
  latex,
  tab,
  resizing,
  height,
}: Props) => {
  return (
    <StyleComponent.MainSectionTemplate ref={resizing}>
      <StyleComponent.TextArea ref={mainSectionRef}>
        {mathQuill}
      </StyleComponent.TextArea>
      <StyleComponent.LaTeX height={height}>{latex}</StyleComponent.LaTeX>
      <StyleComponent.Tab>{tab}</StyleComponent.Tab>
    </StyleComponent.MainSectionTemplate>
  );
};

export default MainSectionTemplate;
