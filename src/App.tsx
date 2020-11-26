import React from 'react';
import { GlobalStyle } from '@src/utils/global-style';
import * as StyleComponent from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <StyleComponent.Wrap>
        <StyleComponent.Header />
        <StyleComponent.Content>
          <StyleComponent.Aside />
          <StyleComponent.Main>
            <StyleComponent.ToolBar />
            <StyleComponent.MoveArea>
              <StyleComponent.LeftArea>
                <StyleComponent.TextArea>textarea 영역</StyleComponent.TextArea>
                <StyleComponent.LaTeX>LaTeX 영역</StyleComponent.LaTeX>
                <StyleComponent.Tab>Tab 영역</StyleComponent.Tab>
              </StyleComponent.LeftArea>
              <StyleComponent.RightArea />
            </StyleComponent.MoveArea>
          </StyleComponent.Main>
        </StyleComponent.Content>
      </StyleComponent.Wrap>
    </>
  );
};

export default App;
