import React from 'react';
import Tab from '@src/components/Tab';
import Mathquill from '@src/components/MathQuill';
import ToolBar from '@src/components/Toolbar';
import Header from '@src/components/Header';
import InputSectionContainer from '@src/components/LeftSection/InputSelectionSection';
import MathSectionContainer from '@src/components/LeftSection/MathSection';
import TemplateContainer from '@src/components/LeftSection/TemplateSection';
import { rootState, RootState } from '@src/store/modules';
import { useDispatch, useSelector } from 'react-redux';

import { mathQuill, change } from '@src/store/modules/mathQuill';
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
  const { latex } = useSelector((state: RootState) => state.mathQuillReducer);
  const dispatch = useDispatch();
  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(change(e.target.value));
  };
  return (
    <StyleComponent.LeftArea>
      <StyleComponent.TextArea>
        <Mathquill latex={latex} />
      </StyleComponent.TextArea>
      <StyleComponent.LaTeX>
        <div>LaTex영역</div>
        <StyleComponent.LaTeXArea value={latex} onChange={changeHandler} />
      </StyleComponent.LaTeX>
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
