import React from 'react';
import { InputLatexTopContent } from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';
import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  const onClickHandler = (value: string) => {};
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
              width="57"
              height="57"
              onClick={() => onClickHandler(value.latex)}
            />
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
