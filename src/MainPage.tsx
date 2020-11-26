import React from 'react';
import { GlobalStyle } from '@src/utils/global-style';
import Tab from '@src/components/tab';
import Mathquill from '@src/components/mathquill';
import ToolBar from '@src/components/toolbar';
import Header from '@src/components/header';
import InputSectionContainer from '@src/components/leftsection/inputSelectionSection';
import MathSectionContainer from '@src/components/leftsection/mathSection';
import TemplateContainer from '@src/components/leftsection/templateSection';
import * as StyleComponent from './style';

const MainPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyleComponent.Wrap>
        <StyleComponent.Header>
          <Header />
        </StyleComponent.Header>
        <StyleComponent.Content>
          <StyleComponent.Aside>
            <InputSectionContainer />
            <MathSectionContainer />
            <TemplateContainer />
          </StyleComponent.Aside>
          <StyleComponent.Main>
            <StyleComponent.ToolBar>
              <ToolBar />
            </StyleComponent.ToolBar>
            <StyleComponent.MoveArea>
              <StyleComponent.LeftArea>
                <StyleComponent.TextArea>
                  <Mathquill />
                </StyleComponent.TextArea>
                <StyleComponent.LaTeX>LaTeX 영역</StyleComponent.LaTeX>
                <StyleComponent.Tab>
                  <Tab />
                </StyleComponent.Tab>
              </StyleComponent.LeftArea>
              <StyleComponent.RightArea />
            </StyleComponent.MoveArea>
          </StyleComponent.Main>
        </StyleComponent.Content>
      </StyleComponent.Wrap>
    </>
  );
};

export default MainPage;
