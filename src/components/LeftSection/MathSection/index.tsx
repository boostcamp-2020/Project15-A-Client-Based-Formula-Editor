import React from 'react';
import Title from '@src/components/Common/Title';
import MULTPLY from '@src/utils/svg/leftsection/inputsection/multiply.svg';
import Svg from '@src/components/Common/Svg';
import { useDispatch, useSelector } from 'react-redux';
import { insert } from '@src/store/modules/mathQuill';
import { RootState } from '@src/store/modules';
import { MathField } from '@src/components/MainSection/MathQuill/style';
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
          <StyledComponent.Button
            key={data.name}
            onClick={() => onClickHandler(data.latex)}
          >
            <Svg Svg={data.svg} />
          </StyledComponent.Button>
        ))}
      </StyledComponent.MathSectionContainer>
    </>
  );
};
export default MathSectionContainer;
