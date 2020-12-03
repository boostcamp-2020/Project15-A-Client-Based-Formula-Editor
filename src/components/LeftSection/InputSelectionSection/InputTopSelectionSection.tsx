import React from 'react';
import {
  InputLatexTopContent,
  InputLatexBottomContent,
} from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';
import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexTopContent.map((value, index) => (
            <LatexContent
              // eslint-disable-next-line react/no-array-index-key
              key={`dab${index}`}
              svg={value.svg}
              latex={value.latex}
              name={value.name}
              width="60"
              height="60"
            />
          ))}
        </StyledComponent.InputLatexContainer>
        <StyledComponent.InputLatexContainer>
          {InputLatexBottomContent.map((value, index) => (
            <LatexContent
              // eslint-disable-next-line react/no-array-index-key
              key={`dab${index}`}
              svg={value.svg}
              latex={value.latex}
              name={value.name}
              width="60"
              height="60"
            />
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
