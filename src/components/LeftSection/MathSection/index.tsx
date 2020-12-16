/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import Title from '@src/components/Common/Title';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { insert } from '@src/store/modules/mathQuill';
import { RootState } from '@src/store/modules';
import { LatexContent } from '@src/components/Common/LatexContent';
import { DictionaryContent } from '@src/components/Common/DictionaryContent';
import { LatexSymbolContent } from '@src/components/Common/LatexSymbolContent';
import mathSection from '@src/constants/mathSection';
import * as mathSVG from '@src/constants/mathSection';
import * as StyledComponent from './style';

const MathSectionContainer = () => {
  const dispatch = useDispatch();
  const { mathQuiiFunc, name } = useSelector(
    (state: RootState) => state.mathQuillReducer,
    shallowEqual
  );
  const math = mathSection.filter((id) => id.name === name);
  const mathArray = math.length > 0 ? math[0].value : mathSVG.mathFraction;
  const onClickHandler = (value: string) => {
    mathQuiiFunc.write(value);
    dispatch(insert(value));
  };

  const symbolList = [
    'arrow',
    'inequality',
    'notoperator',
    'figure',
    'specialsymbol',
    'unit',
    'misc',
    'division',
    'plus',
    'minus',
    'multiple',
  ];
  const isSymbol = symbolList.includes(name);

  let latexContentList: JSX.Element[];
  if (name === 'dictionary') {
    latexContentList = mathArray.map((data: any) => {
      return (
        <DictionaryContent
          latex={data.latex}
          key={data.name}
          width="100%"
          height="80"
          name={data.name}
          onClick={() => onClickHandler(data.latex)}
        />
      );
    });
  } else if (isSymbol) {
    latexContentList = mathArray.map((data: any) => {
      return (
        <LatexSymbolContent
          latex={data.latex}
          key={data.name}
          symbol={data.symbol}
          width="80"
          height="80"
          name={data.name}
          onClick={() => onClickHandler(data.latex)}
        />
      );
    });
  } else {
    latexContentList = mathArray.map((data: any) => {
      return (
        <LatexContent
          latex={data.latex}
          key={data.name}
          svg={data.svg}
          width="80"
          height="80"
          name={data.name}
          onClick={() => onClickHandler(data.latex)}
        />
      );
    });
  }

  return (
    <StyledComponent.MathSectionContainer>
      <Title title="수식" />
      <StyledComponent.ButtonContainer>
        {latexContentList}
      </StyledComponent.ButtonContainer>
    </StyledComponent.MathSectionContainer>
  );
};
export default MathSectionContainer;
