import React from 'react';
import * as StyleComponent from './MainSectionStyle';

interface Props {
  mathQuill: JSX.Element;
  latex: JSX.Element;
  tab: JSX.Element;
  resizing: any;
  height: number;
}

const MainSectionTemplate = ({
  mathQuill,
  latex,
  tab,
  resizing,
  height,
}: Props) => {
  return (
    <StyleComponent.MainSectionTemplate ref={resizing}>
      <StyleComponent.TextArea>{mathQuill}</StyleComponent.TextArea>
      <StyleComponent.LaTeX height={height}>{latex}</StyleComponent.LaTeX>
      <StyleComponent.Tab>{tab}</StyleComponent.Tab>
    </StyleComponent.MainSectionTemplate>
  );
};

export default MainSectionTemplate;
