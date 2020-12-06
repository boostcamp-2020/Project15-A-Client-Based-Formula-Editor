import React from 'react';
import ToolBar from '@src/components/Toolbar/ToolBar';
import Header from '@src/components/Header';
import InputSectionContainer from '@src/components/LeftSection/InputSelectionSection';
import MathSectionContainer from '@src/components/LeftSection/MathSection';
import TemplateContainer from '@src/components/LeftSection/TemplateSection';
import MainSection from '@src/components/MainSection/MainSection';
import { RootState } from '@src/store/modules';
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
  const { visible } = useSelector((state: RootState) => state.graphHandler);
  return (
    <StyleComponent.Main>
      <ToolBar />
      <StyleComponent.MoveArea>
        <MainSection />
        <SubSection visible={visible} />
      </StyleComponent.MoveArea>
    </StyleComponent.Main>
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
