import React from 'react';
import Title from '@src/components/Common/Title';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { LatexContent } from '@src/components/Common/LatexContent';
import { insert } from '@src/store/modules/mathQuill';
import templateSection from '@src/constants/templateSection';
import * as StyledComponent from './style';

const TemplateSectionContainer = () => {
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );

  const { name } = useSelector((state: RootState) => state.leftSectionReducer);

  const dispatch = useDispatch();

  const template = templateSection.filter((id) => id.name === name);
  const templateArray = template.length > 0 ? template[0].value : [];
  const onClickHandler = (value: string) => {
    mathQuiiFunc.write(value);
    dispatch(insert(value));
  };

  return (
    <>
      <StyledComponent.TemplateSectionContainer>
        <StyledComponent.Header>
          <Title title="템플릿" />
        </StyledComponent.Header>
        <StyledComponent.ButtonContainer>
          {templateArray.length > 0 &&
            templateArray.map((data) => {
              return (
                <LatexContent
                  latex={data.latex}
                  key={data.name}
                  svg={data.svg}
                  width={
                    data.name.indexOf('integral') !== -1 ||
                    data.name.indexOf('limit') !== -1
                      ? '160'
                      : '80'
                  }
                  height="80"
                  name={data.name}
                  onClick={() => onClickHandler(data.latex)}
                  isPossible={data.isPossible}
                />
              );
            })}
        </StyledComponent.ButtonContainer>
      </StyledComponent.TemplateSectionContainer>
    </>
  );
};

export default TemplateSectionContainer;
