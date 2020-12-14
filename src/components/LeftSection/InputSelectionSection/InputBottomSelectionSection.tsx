/* eslint-disable react/no-array-index-key */
import React from 'react';
import { InputLatexMathTopContent } from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';
import { useDispatch } from 'react-redux';
import { show } from '@src/store/modules/mathQuill';

import * as StyledComponent from './style';

const InputBottomSelectionSection = () => {
  const dispatch = useDispatch();
  const onClickHandler = (name: string) => {
    dispatch(show(name));
  };
  return (
    <>
      <StyledComponent.InputBottomSelectionSectionContainer>
        {InputLatexMathTopContent.map((value, index) => (
          <LatexContent
            key={`latex-dab${index}`}
            svg={value.svg}
            latex={value.latex}
            name={value.name}
            width="40"
            height="40"
            onClick={() => onClickHandler(value.name)}
          />
        ))}
        <StyledComponent.InputLatexContent
          width="84"
          height="40"
          onClick={() => onClickHandler('dictionary')}
        >
          <StyledComponent.Dictionary>수식 사전</StyledComponent.Dictionary>
        </StyledComponent.InputLatexContent>
      </StyledComponent.InputBottomSelectionSectionContainer>
    </>
  );
};

export default InputBottomSelectionSection;
