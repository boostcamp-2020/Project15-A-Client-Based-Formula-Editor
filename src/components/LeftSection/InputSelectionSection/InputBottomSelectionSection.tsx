/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { RootState } from '@src/store/modules';
import {
  InputLatexMathTopContent,
  InputCalculation,
} from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';
import { changeFomula } from '@src/store/modules/leftSection';
import { insert } from '@src/store/modules/mathQuill';
import * as StyledComponent from './style';

const InputBottomSelectionSection = () => {
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer,
    shallowEqual
  );

  const dispatch = useDispatch();
  const onClickHandler = (name: string) => {
    dispatch(changeFomula(name));
  };

  const insertHandler = (value: string) => {
    mathQuiiFunc.write(value);
    dispatch(insert(value));
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
            isPossible={value.isPossible}
          />
        ))}
        <StyledComponent.InputLatexContent
          width="84"
          height="40"
          onClick={() => onClickHandler('dictionary')}
        >
          <StyledComponent.Dictionary>수식 사전</StyledComponent.Dictionary>
        </StyledComponent.InputLatexContent>
        {InputCalculation.map((value, index) => (
          <LatexContent
            key={`latex-dab${index}`}
            svg={value.svg}
            latex={value.latex}
            name={value.name}
            width="40"
            height="40"
            onClick={() => insertHandler(value.latex)}
            isPossible={value.isPossible}
          />
        ))}
      </StyledComponent.InputBottomSelectionSectionContainer>
    </>
  );
};

export default InputBottomSelectionSection;
