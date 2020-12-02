import React from 'react';
import * as StyleComponent from './MainSectionStyle';

interface Props {
  mathQuill: JSX.Element;
  latex: JSX.Element;
  tab: JSX.Element;
}

const MainSectionTemplate = ({ mathQuill, latex, tab }: Props) => {
  return (
    <StyleComponent.MainSectionTemplate>
      <StyleComponent.TextArea>{mathQuill}</StyleComponent.TextArea>
      <StyleComponent.LaTeX>{latex}</StyleComponent.LaTeX>
      <StyleComponent.Tab>{tab}</StyleComponent.Tab>
    </StyleComponent.MainSectionTemplate>
  );
};

export default MainSectionTemplate;
