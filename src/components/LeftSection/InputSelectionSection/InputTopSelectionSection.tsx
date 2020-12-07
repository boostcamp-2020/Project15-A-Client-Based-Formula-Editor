import React from 'react';
import { InputLatexTopContent } from '@src/constants/InputSection';
import { LatexContent } from '@src/components/Common/LatexContent';
import { useDispatch } from 'react-redux';
import { show } from '@src/store/modules/mathQuill';

import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  const dispatch = useDispatch();
  const onClickHandler = (name: string) => {
    dispatch(show(name));
  };
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
              onClick={() => onClickHandler(value.name)}
            />
          ))}
        </StyledComponent.InputLatexContainer>
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
