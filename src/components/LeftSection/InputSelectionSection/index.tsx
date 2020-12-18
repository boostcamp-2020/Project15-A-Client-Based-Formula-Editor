import React from 'react';
import Title from '@src/components/Common/Title';
import InputTopSelectionSection from '@src/components/LeftSection/InputSelectionSection/InputTopSelectionSection';
import InputBottomSelectionSection from '@src/components/LeftSection/InputSelectionSection/InputBottomSelectionSection';
import * as StyledComponent from './style';

const InputSelectionSectionContainer = () => {
  return (
    <StyledComponent.InputSectionContainer>
      <StyledComponent.FlexContainer>
        <Title title="입력 선택" />
        <InputTopSelectionSection />
      </StyledComponent.FlexContainer>
      <InputBottomSelectionSection />
    </StyledComponent.InputSectionContainer>
  );
};
export default InputSelectionSectionContainer;
