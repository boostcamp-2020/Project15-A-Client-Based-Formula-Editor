/* eslint-disable @typescript-eslint/ban-types */
import React, { useEffect } from 'react';
import Title from '@src/components/Common/Title';
import { useDispatch, useSelector } from 'react-redux';
import { insert } from '@src/store/modules/mathQuill';
import { RootState } from '@src/store/modules';
import { LatexContent } from '@src/components/Common/LatexContent';
import mathSection from '@src/constants/mathSection';
import * as mathSVG from '@src/constants/mathSection';
import * as StyledComponent from './style';

const MathSectionContainer = () => {
  const dispatch = useDispatch();
  const { mathQuiiFunc, name } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const math = mathSection.filter((id) => id.name === name);
  const mathArray = math.length > 0 ? math[0].value : mathSVG.mathFraction;
  const onClickHandler = (value: string) => {
    mathQuiiFunc.write(value);
    dispatch(insert(value));
  };
  return (
    <StyledComponent.MathSectionContainer>
      <Title title="수식" />
      <StyledComponent.ButtonContainer>
        {mathArray.map((data) => (
          <LatexContent
            latex={data.latex}
            key={data.name}
            svg={data.svg}
            width="80"
            height="80"
            name={data.name}
            onClick={() => onClickHandler(data.latex)}
          />
        ))}
      </StyledComponent.ButtonContainer>
    </StyledComponent.MathSectionContainer>
  );
};
export default MathSectionContainer;
