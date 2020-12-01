import React from 'react';
import {
  InputLatexTopContent,
  InputLatexBottomContent,
} from '@src/constants/InputSection';
import * as StyledComponent from './style';
import InputTopSelectionSvg from './InputTopSelectionSvg';

const InputTopSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexTopContent.map((value, index) => (
            <StyledComponent.InputLatexContent key={index}>
              <InputTopSelectionSvg Svg={value.svg} />
            </StyledComponent.InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexBottomContent.map((value, index) => (
            <StyledComponent.InputLatexContent key={index}>
              <InputTopSelectionSvg Svg={value.svg} />
            </StyledComponent.InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
