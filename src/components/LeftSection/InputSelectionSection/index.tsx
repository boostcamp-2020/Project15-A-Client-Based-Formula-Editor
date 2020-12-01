import React from 'react';
import Title from '@src/components/Common/Title';
import { InputLatexContent } from '@src/constants/InputSection';
import InputTopSelectionSvg from './InputTopSelectionSvg';
import * as StyledComponent from './style';
import { Box } from './Box';

const InputSelectionSectionContainer = () => {
  return (
    <>
      <StyledComponent.InputSectionContainer>
        <Title title="입력 선택" />
        <Box name="Glass" latex="\frac{ }{ }" />
        <StyledComponent.InputTopSelectionSectionContainer>
          <StyledComponent.InputLatexContainer>
            {InputLatexContent.map((value, index) => (
              <StyledComponent.InputLatexContent key={index}>
                <InputTopSelectionSvg Svg={value.svg} />
              </StyledComponent.InputLatexContent>
            ))}
          </StyledComponent.InputLatexContainer>
        </StyledComponent.InputTopSelectionSectionContainer>
      </StyledComponent.InputSectionContainer>
    </>
  );
};
export default InputSelectionSectionContainer;
