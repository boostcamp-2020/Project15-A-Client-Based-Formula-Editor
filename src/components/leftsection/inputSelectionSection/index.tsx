import React from 'react';
import Title from '@src/components/common/title';
import MULTIPLY from '@src/utils/svg/leftsection/inputselection/multiply.svg';
import * as StyledComponent from './style';

const InputSelectionSectionContainer = () => {
  return (
    <>
      <StyledComponent.InputSectionContainer>
        <Title title="입력 선택" />
        <StyledComponent.InputTopSelectionSectionContainer>
          <MULTIPLY />
        </StyledComponent.InputTopSelectionSectionContainer>
      </StyledComponent.InputSectionContainer>
    </>
  );
};

export default InputSelectionSectionContainer;
