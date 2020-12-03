import React from 'react';
import Title from '@src/components/Common/Title';
import MULTPLY from '@src/utils/svg/leftsection/inputsection/multiply.svg';
import { useDispatch, useSelector } from 'react-redux';
import { insert } from '@src/store/modules/mathQuill';
import { RootState } from '@src/store/modules';
import { LatexContent } from '@src/components/Common/LatexContent';
import * as StyledComponent from './style';

const math = [
  {
    name: 'multiply',
    svg: MULTPLY,
    latex: '\\frac{ }{ }',
  },
];

const MathSectionContainer = () => {
  const dispatch = useDispatch();
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const onClickHandler = (value: string) => {
    mathQuiiFunc.write(value);
    dispatch(insert(value));
  };
  return (
    <>
      <StyledComponent.MathSectionContainer>
        <Title title="수식" />
        {math.map((data) => (
          <LatexContent
            latex={data.latex}
            key={data.name}
            svg={data.svg}
            width="60"
            height="60"
            name={data.name}
            onClick={() => onClickHandler(data.latex)}
          />
        ))}
      </StyledComponent.MathSectionContainer>
    </>
  );
};
export default MathSectionContainer;
