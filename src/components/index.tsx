import React from 'react';
import Tab from '@src/components/tab';
import Mathquill from '@src/components/mathquill';
import ToolBar from '@src/components/toolbar';
import Header from '@src/components/header';
import InputSectionContainer from '@src/components/leftsection/inputSelectionSection';
import MathSectionContainer from '@src/components/leftsection/mathSection';
import TemplateContainer from '@src/components/leftsection/templateSection';
import Graph from '@src/components/graph';
import * as StyleComponent from './style';

export const HeaderSection = () => {
  return (
    <StyleComponent.Header>
      <Header />
    </StyleComponent.Header>
  );
};

export const Aside = () => {
  return (
    <StyleComponent.Aside>
      <InputSectionContainer />
      <MathSectionContainer />
      <TemplateContainer />
    </StyleComponent.Aside>
  );
};

export const Section = () => {
  return (
    <StyleComponent.Main>
      <StyleComponent.ToolBar>
        <ToolBar />
      </StyleComponent.ToolBar>
      <StyleComponent.MoveArea>
        <MainSection />
        <SubSection />
      </StyleComponent.MoveArea>
    </StyleComponent.Main>
  );
};

export const MainSection = () => {
  return (
    <StyleComponent.LeftArea>
      <StyleComponent.TextArea>
        <Mathquill />
      </StyleComponent.TextArea>
      <StyleComponent.LaTeX>LaTeX 영역</StyleComponent.LaTeX>
      <StyleComponent.Tab>
        <Tab />
      </StyleComponent.Tab>
    </StyleComponent.LeftArea>
  );
};

export const SubSection = () => {
  return (
    <StyleComponent.RightArea>
      <Graph />
    </StyleComponent.RightArea>
  );
};
