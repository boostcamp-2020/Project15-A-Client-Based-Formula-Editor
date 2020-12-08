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
        {InputLatexTopContent.map((value, index) => (
          <LatexContent
            // eslint-disable-next-line react/no-array-index-key
            key={`dab${index}`}
            svg={value.svg}
            latex={value.latex}
            name={value.name}
            width="65"
            height="68"
            onClick={() => onClickHandler(value.name)}
          />
        ))}
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
