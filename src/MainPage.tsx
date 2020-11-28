import React from 'react';
import { GlobalStyle } from '@src/utils/global-style';
import Tab from '@src/components/Tab';
import Mathquill from '@src/components/MathQuill';
import ToolBar from '@src/components/Toolbar';
import Header from '@src/components/Header';
import InputSectionContainer from '@src/components/LeftSection/InputSelectionSection';
import MathSectionContainer from '@src/components/LeftSection/MathSection';
import TemplateContainer from '@src/components/LeftSection/TemplateSection';
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
