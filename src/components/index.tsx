import React from 'react';
import Tab from '@src/components/Tab';
import Mathquill from '@src/components/MathQuill';
import ToolBar from '@src/components/Toolbar';
import Header from '@src/components/Header';
import InputSectionContainer from '@src/components/LeftSection/InputSelectionSection';
import MathSectionContainer from '@src/components/LeftSection/MathSection';
import TemplateContainer from '@src/components/LeftSection/TemplateSection';
import { rootState } from '@src/store/modules';
import { useSelector } from 'react-redux';

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
  const { visible } = useSelector((state: rootState) => state.graphHandler);
  return (
    <StyleComponent.Main>
      <StyleComponent.ToolBar>
        <ToolBar />
      </StyleComponent.ToolBar>
      <StyleComponent.MoveArea>
        <MainSection />
        <SubSection visible={visible} />
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

interface Props {
  visible: boolean;
}
export const SubSection = ({ visible }: Props) => {
  return (
    <StyleComponent.RightArea show={visible}>
      {/* <Graph /> */}
    </StyleComponent.RightArea>
  );
};
