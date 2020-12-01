import React from 'react';
import Title from '@src/components/Common/Title';
import InputTopSelectionSection from '@src/components/LeftSection/InputSelectionSection/InputTopSelectionSection';
import * as StyledComponent from './style';
import { Box } from './Box';

const InputSelectionSectionContainer = () => {
  return (
    <>
      <StyledComponent.InputSectionContainer>
        <Title title="입력 선택" />
        {/* <Box name="Glass" latex="\frac{ }{ }" /> */}
        <InputTopSelectionSection />
      </StyledComponent.InputSectionContainer>
    </>
  );
};
export default InputSelectionSectionContainer;
