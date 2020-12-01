import React from 'react';
import { InputLatexMathTopContent } from '@src/constants/InputSection';
import Svg from '@src/components/Common/Svg';
import { InputLatexContent } from '@src/components/Common/LatexContent/style';
import * as StyledComponent from './style';

const InputBottomSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexMathTopContent.map((value, index) => (
            <InputLatexContent key={index} width="30" height="30">
              <Svg Svg={value.svg} />
            </InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputBottomSelectionSection;
