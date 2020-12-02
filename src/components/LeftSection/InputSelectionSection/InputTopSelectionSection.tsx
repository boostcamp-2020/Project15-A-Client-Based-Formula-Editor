import React from 'react';
import {
  InputLatexTopContent,
  InputLatexBottomContent,
} from '@src/constants/InputSection';
import Svg from '@src/components/Common/Svg';
import { InputLatexContent } from '@src/components/Common/LatexContent/style';
import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexTopContent.map((value, index) => (
            <InputLatexContent key={index} width="60" height="60">
              <Svg Svg={value.svg} />
            </InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexBottomContent.map((value, index) => (
            <InputLatexContent key={index} width="60" height="60">
              <Svg Svg={value.svg} />
            </InputLatexContent>
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
