/* eslint-disable react/no-array-index-key */
import React from 'react';
import {
  InputLatexMathTopContent,
  InputLatexMathBottomContent,
} from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';

import * as StyledComponent from './style';

const InputBottomSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputBottomSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexMathTopContent.map((value, index) => (
            <LatexContent
              key={`latex-dab${index}`}
              svg={value.svg}
              latex={value.latex}
              name={value.name}
              width="40"
              height="40"
            />
          ))}
          <StyledComponent.InputLatexContent width="102" height="40">
            <StyledComponent.Dictionary>수식 사전</StyledComponent.Dictionary>
          </StyledComponent.InputLatexContent>
        </StyledComponent.InputLatexContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexMathBottomContent.map((value, index) => (
            <LatexContent
              key={`latex-${index}`}
              width="40"
              height="40"
              svg={value.svg}
              name={value.name}
              latex={value.latex}
            />
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputBottomSelectionSectionContainer>
    </>
  );
};

export default InputBottomSelectionSection;
