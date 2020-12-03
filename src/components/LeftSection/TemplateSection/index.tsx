import React from 'react';
import Title from '@src/components/Common/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { LatexContent } from '@src/components/Common/LatexContent';
import * as mathSVG from '@src/constants/mathSection';
import { insert } from '@src/store/modules/mathQuill';
import * as StyledComponent from './style';

const TemplateSectionContainer = () => {
  // 임시로 변수 지정. 추후 props로 inputselected 받아와서 변경하도록 할예정
  const math = mathSVG.combi;
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
      <StyledComponent.TemplateSectionContainer>
        <Title title="템플릿" />
        <StyledComponent.ButtonContainer>
          {math.map((data) => (
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
      </StyledComponent.TemplateSectionContainer>
    </>
  );
};

export default TemplateSectionContainer;
