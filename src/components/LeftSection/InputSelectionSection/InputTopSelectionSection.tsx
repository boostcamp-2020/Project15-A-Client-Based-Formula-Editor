import React from 'react';
import {
  InputLatexTopContent,
  InputLatexBottomContent,
} from '@src/constants/InputSection';
import Svg from '@src/components/Common/Svg';
import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexTopContent.map((value, index) => (
            <StyledComponent.InputLatexContent key={index}>
              <Svg Svg={value.svg} />
            </StyledComponent.InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexBottomContent.map((value, index) => (
            <StyledComponent.InputLatexContent key={index}>
              <Svg Svg={value.svg} />
            </StyledComponent.InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
