import React from 'react';
import { GlobalStyle } from '@src/utils/global-style';
import * as Semantic from '@src/components/index';
import * as StyleComponent from './mainPageStyle';

const MainPage = () => {
  return (
    <>
      <GlobalStyle />
      <StyleComponent.Wrap>
        <Semantic.HeaderSection />
        <StyleComponent.Content>
          <Semantic.Aside />
          <Semantic.Section />
        </StyleComponent.Content>
      </StyleComponent.Wrap>
    </>
  );
};

export default MainPage;
